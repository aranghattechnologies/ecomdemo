import path from "path";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children, Component } from "react";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

const routes = [
    { path : "/", Component : App, children : [
        {path : "/", Component : Products},
        {path : "/products/:id", Component : ProductDetails},
    ]}
];

const router = createBrowserRouter(routes);

export default router;