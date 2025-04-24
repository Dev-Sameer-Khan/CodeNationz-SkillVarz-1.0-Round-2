import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Wooden from "../Wooden";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wooden",
    element: <Wooden />,
  },
]);

export default Router;
