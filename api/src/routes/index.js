const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
//const Recipe = require('../models/Recipe');
const {Diets, Recipe} = require("../db")



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const urlApi = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=91bb058f06c64a4a99fd166c25420e7a&addRecipeInformation=true&number=100")
    console.log(urlApi.length)
    const apiInfo = urlApi.data.results.map(e => {
       
        return {
            name: e.title,
            id : e.id,
            summary: e.summary,
            image: e.image,
            healthScore: e.healthScore,
            spoonacularScore: e.spoonacularScore,
            steps: e.analyzedInstructions.length?e.analyzedInstructions[0].steps.map(e => e.step) : []

        }
    })
      
    return apiInfo
}

const getDbInfo = async () => {
    return await Recipe.findAll({
        include: {
            model: Diets,
            attributes: ["name"],
            trough: {
                attributes: [],
            },
        }
    })
}

const getAllRecipes = async () => {
    const apiInfos = await getApiInfo()
    const dbInfos = await getDbInfo()
    const allInfo = apiInfos.concat(dbInfos)
    return allInfo
}

router.get("/recipes", async (req, res) => {
    const name = req.query.name
    let recipesAll = await getAllRecipes()
    if(name) {
        let recipesName = await recipesAll.filter(e => e.title.toLowerCase().includes(name.toLowerCase))
        recipesName.length ? 
        res.status(200).send(recipesName) : 
        res.status(404).send("no recipes found")
    } else {
        res.status(200).send(recipesAll)
    }
})






module.exports = router;
