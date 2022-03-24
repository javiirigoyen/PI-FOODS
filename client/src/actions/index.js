import axios from "axios"

export const GET_RECIPES = "GET_RECIPES"
export const FILTER_CREATED = "FILTER_CREATED"

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

export function filterCreated(payload) {
    return {
        type: "FILTER_CREATED",
        payload
    }
}
