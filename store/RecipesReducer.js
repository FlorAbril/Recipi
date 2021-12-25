const ACTIONS = {
  addInitialRecipe: 'addInitialRecipe',
  addRecipe: 'ADD_RECIPE'
}

const initialState = {
  recipes: []
}

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.addInitialRecipe:
      return {
        ...state,
        recipes: action.payload
      }
    case ACTIONS.addRecipe:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    default:
      return state
  }
}

export { ACTIONS, initialState }
export default recipesReducer