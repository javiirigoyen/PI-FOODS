const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const Recipe = require('../models/Recipe');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const urlApi = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=91bb058f06c64a4a99fd166c25420e7a&addRecipeInformation=true")
    const apiInfo = await urlApi.data.map(el => {
        return {
            name: el.name,
            id : el.id,
            summary: el.summary,
            image: el.image,
            healthScore: el.healthScore,
            spoonacularScore: el.spoonacularScore,
            steps: el.steps

        }
    })

    return apiInfo
}

const getDbInfo = async () => {
    return await Recipe.findALL({
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
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const allInfo = apiInfo.concat(dbInfo)
    return allInfo
}


module.exports = router;
