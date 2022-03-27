import axios from "axios"

export const GET_RECIPES = "GET_RECIPES"
export const FILTER_CREATED = "FILTER_CREATED"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const GET_NAME_RECIPES = "GET_NAME_RECIPES"
export const ORDER_BY_SCORE = "ORDER_BY_SCORE"
export const GET_DIETS = "GET_DIETS"
export const GET_DEATAIL = "GET_DETAIL"

//conecto el front con el back

export function getRecipes () {
     return async function(dispatch) {
         let response = await axios.get("http://localhost:3001/recipes", {

         })
         return dispatch({
         type: GET_RECIPES,
         payload: response.data
     })
    }
}

export function getNameRecipes (title) {
    console.log(title, "esta es la info")
    return async function (dispatch) {
        try{
            let response = await axios.get(`http://localhost:3001/recipes?title=${title}`)
            return dispatch ({
                type : "GET_NAME_RECIPES",
                payload: response.data
            })
        } catch (error) {
            console.log();
        }
    }
}

export function getDetail(id) {
    return async function(dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch ({
                type: "GET_DETAIL",
                payload : json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDiets() {
    return async function(dispatch) {
        let infoDiets = await axios.get("http://localhost:3001/types", {

        })
        return dispatch({
            type :  "GET_DIETS",
            payload: infoDiets.data
        })
    }
}

export function postRecipe(payload){
return async function(dispatch) {
    let postRecipe = await axios.post("http://localhost:3001/recipe", payload)
    return postRecipe
}

}

export function filterCreated(payload) {
    return {
        type: "FILTER_CREATED",
        payload
    }
}

export function orderByName(payload) {
    return {
        type : "ORDER_BY_NAME",
        payload
    }
}

export function orderByScore(payload) {
    return {
      type: "ORDER_BY_SCORE",
      payload
    };
  }
