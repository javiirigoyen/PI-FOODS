import axios from "axios"

export const GET_RECIPES = "GET_RECIPES"
export const FILTER_CREATED = "FILTER_CREATED"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const GET_NAME_RECIPES = "GET_NAME_RECIPES"

//conecto el front con el back

export function getRecipes () {
     return async function(dispatch) {
         let response = await axios.get("http://localhost:3001/recipes", {})
         return dispatch({
         type: GET_RECIPES,
         payload: response.data
     })
    }
}

export function getNameRecipes (title) {
    return async function (dispatch) {
        try{
            let response = await axios.get(`http://localhost:3001/recipes?name=${title}`)
            return dispatch ({
                type : "GET_NAME_RECIPES",
                payload: response.data
            })
        } catch (error) {
            console.log();
        }
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
