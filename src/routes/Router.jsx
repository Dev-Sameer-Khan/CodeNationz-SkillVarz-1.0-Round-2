import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Wooden from "../Wooden";
import ErrorPage from "../ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage/>
  },
  {
    path: "/wooden",
    element: <Wooden />,
  },
]);

export default Router;
