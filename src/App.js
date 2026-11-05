import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home"
import Basic from "./Pages/Basic"
import Framework from "./Pages/Frameworks"
import Tips from "./Pages/Tips"
import {useContext } from "react";
import Data from "./context/Data.jsx"
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not Found</h1>,
  },
    {
    path: "/Basic",
    element: <Basic />,
  },
    {
    path: "/Framework",
    element: <Framework />,
  },
    {
    path: "/Tips",
    element: <Tips />,
  },
    {
    path: "/Signin",
    element: <SignIn/>,
  },
    {
    path: "/Signup",
    element: <SignUp/>,
  },
]);
function App() {
    const {theme} = useContext(Data);

  return (
   <div className={`${theme}`}>
    <RouterProvider router={router} />
   </div>
  );
}

export default App;
