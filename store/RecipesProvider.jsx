import { useReducer } from "react";
import { createContext } from "react";
import recipesReducer, { initialState } from "./RecipesReducer";

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, initialState);

  return (
    <RecipesContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipesContext.Provider>
  );
}

export {RecipesContext}
export default RecipesProvider;