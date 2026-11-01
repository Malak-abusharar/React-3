import { createContext, useReducer } from "react";
const Data= createContext();


const initialData = { theme: localStorage.getItem("Theme") === null ? "light" :
  localStorage.getItem("Theme")
 };
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_Theme":
      return { ...state, theme: action.newValue };
    default:
      return state;
  }
};


export function DataProvider({ children }) {
const [firstState, dispatch] = useReducer(reducer, initialData);


const changeTheme = (newTheme) => {
  localStorage.setItem("Theme", newTheme);
dispatch({ type: "CHANGE_Theme", newValue: newTheme });
};
return (
<Data.Provider value={{ ...firstState, changeTheme}}>
{children}
</Data.Provider>
);
}
export default Data;
