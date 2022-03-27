
const initialState = {
  
    recipes : [],
    allRecipes : [],
    diets : [],
    detail : []
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

            case "POST_RECIPE" :
            return {
                    ...state
                }

                case "GET_DIETS" : 
                return {
                    ...state,
                    diets : action.payload
                }

                case "GET_DETAIL" : 
                return {
                    ...state,
                    detail : action.payload
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

                case "ORDER_BY_SCORE":
                    const sortedArrayScore = action.payload === "asc" ?
                        state.recipes.sort(function (a, b) {
                            if (a.healthScore < b.healthScore) return 1
                            if (a.healthScore > b.healthScore) return -1
                            return 0;
                            
                          }) :
                        state.recipes.sort(function (a, b) {
                            if(a.healthScore < b.healthScore) return -1
                            if(a.healthScore > b.healthScore) return 1
                            return 0;
                            
                          });
                    return {
                      ...state,
                      recipes: sortedArrayScore,
                    };
        
        default :
        return state
    }

}

export default rootReducer