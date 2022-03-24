
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
        case "FILTER_CREATED" :
            const createdFilter = action.payload === "created" ? state.allRecipes.filter(el => el.createdInDb) : state.allRecipes.filter(el => !el.createdInDb)
            return {
                ...state,
                recipes: createdFilter
            }
        
        default :
        return state
    }

}

export default rootReducer