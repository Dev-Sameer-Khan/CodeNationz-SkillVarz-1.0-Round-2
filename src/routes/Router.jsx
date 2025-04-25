import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Wooden from "../Wooden";
import ErrorPage from "../ErrorPage";
import Shop from "../components/Shop";
import ContactForm from "../components/ContactForm";
import Nature from "../Nature";
import Valantina from "../Valantina";

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
  {
    path: "/nature",
    element: <Nature />,
  },
  {
    path: "/valantina",
    element: <Valantina />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
]);

export default Router;
