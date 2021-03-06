const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
//const Recipe = require('../models/Recipe');
const {Diets, Recipe} = require("../db")


const router = Router();
//
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 const getApiInfo = async () => {
    const urlApi = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=efa82ee29b5c47299a1884588ddbc5ac&addRecipeInformation=true&number=100")
    const apiInfo = urlApi.data.results.map(e => {
     
        return {
            title: e.title,
            id : e.id,
            summary: e.summary,
            image: e.image,
            healthScore: e.healthScore,
            spoonacularScore: e.spoonacularScore,
            steps: e.analyzedInstructions.length?e.analyzedInstructions[0].steps.map(e => e.step) : [],
            diets : e.diets.length?e.diets : [], 
            dishTypes : e.dishTypes.length?e.dishTypes : [] 

        }
    })
      
    return apiInfo
} 

const getDbInfo = async () => {
    return await Recipe.findAll({
        include: {
            model: Diets,
            attributes: ["title"],
            
        }
    })
    
    
    
}

const getAllRecipes = async () => {
   const apiInfos = await getApiInfo()
    const dbInfos = await getDbInfo()
    const allInfo = dbInfos.concat(apiInfos) 
    
    return allInfo
}

router.get("/recipes", async (req, res) => {
    
    const title = req.query.title
    console.log(title)
    let recipesAll = await getAllRecipes()
    

    if(title) {
        res.status(title)
        let recipesName =  recipesAll.filter(e => e.title.toLowerCase().includes(title.toLowerCase())).map(el => el)
        recipesName.length ? 
        res.status(200).send(recipesName) : 
        res.status(404).send("no recipes found") 
    } else {
       
        res.status(200).json(recipesAll)
    }
})

router.get("/types", async (req, res) => {
    const  diets = [
        "vegetarian",
        "vegan" ,
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "paleolithic",
        "primal",
        "pescatarian",
        "fodmap friendly",
        "whole 30",
        "ketogenic",
    ]
    diets.forEach((e) => {
        Diets.findOrCreate({
            where: { title : e }
        })
    })

    const allDiets = await Diets.findAll()
    res.send(allDiets)
})

 router.post("/recipe", async (req, res) => {
    const { title, summary, image, healthScore, spoonacularScore, steps, createInDb, diets, } = req.body

    
    const recipeCreated = await Recipe.create({
        
        title,
        summary,
        image,
        healthScore,
        spoonacularScore,
        steps,
        createInDb,
        
    })
    const typeOfDiets = await Diets.findAll({
        where : {title : diets}
    })
     await recipeCreated.addDiets(typeOfDiets)
    return res.status(200).send("recipe created successfully!")


})


router.get("/recipes/:id", async (req, res) => {
    const id = req.params.id
    const recipesTotal = await getAllRecipes()
        if(id) {
            let recipeId = await recipesTotal.filter(e => e.id == id) 
            recipeId.length ?
            res.status(200).json(recipeId) :
            res.status(404).send("recipe not found!")
        }
        }) 
 

module.exports = router;
