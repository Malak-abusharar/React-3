import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home"
import Basic from "./Pages/Basic"
import Framework from "./Pages/Frameworks"
import Tips from "./Pages/Tips"
import {useContext } from "react";
import Data from "./context/Data.jsx"
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Error404 from "./Pages/Error404.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404/>,
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
    {
    path: "*",
    element: <Error404/>,
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
