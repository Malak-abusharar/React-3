import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home"
import Basic from "./Pages/Basic"
import Framework from "./Pages/Frameworks"
import Tips from "./Pages/Tips"
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
