
const initialState = {
  
    recipes : [],
    allRecipes : []
}

function rootReducer(state = initialState, action ) {
    switch(action.type) {
        case "GET_RECIPES" : 
        return {
            ...state, 
            recipes : action.payload,
            allRecipes: action.payload
           
        }

        case "GET_NAME_RECIPES" :
            return {
                ...state,
                recipes : action.payload
            }

        
        case "FILTER_CREATED" :
            const createdFilter = action.payload === "created" ? state.allRecipes.filter(el => el.createdInDb) : state.allRecipes.filter(el => !el.createdInDb)
            return {
                ...state,
                recipes: createdFilter
            }

            case "ORDER_BY_NAME" :
                 const sortArr = action.payload === "a-z" ?
                state.recipes.sort(function (a, b) {
                    if(a.title > b.title) {
                        return 1
                    }
                    else if(b.title > a.title) {
                        return -1
                    } else {

                        return 0
                    }
                }) :
                state.recipes.sort(function (a, b) {
                    if(a.title > b.title) {
                    return -1
                    }
                    else if(b.title > a.title) {
                        return 1
                    } else {
                        return 0
                    }
                    
                })
                return {
                    ...state,
                    recipes: sortArr
                } 
        
        default :
        return state
    }

}

export default rootReducer