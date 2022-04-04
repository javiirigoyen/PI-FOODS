import axios from "axios"


//conecto el front con el back

export function getRecipes () {
     return async function(dispatch) {
        dispatch({ type: "CARGANDO" });
         let response = await axios.get("http://localhost:3001/recipes", {

})
         return dispatch({
         type: "GET_RECIPES",
         payload: response.data
     })
    }
}

export function getNameRecipes (title) {
    
return async function (dispatch) {
        try{
            let response = await axios.get(`http://localhost:3001/recipes?title=${title}`)
            return dispatch ({
                type : "GET_NAME_RECIPES",
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDetail(id) {
    return async function(dispatch) {
        dispatch({ type: "CARGANDO" });
            let json = await axios.get("http://localhost:3001/recipes/" + id)
            return dispatch ({
                type: "GET_DETAIL",
                payload : json.data
            })
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

export function filterRecipesByTypes(payload) {
    return {
      type: "FILTER_BY_TYPES",
      payload,
    };
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
