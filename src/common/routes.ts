import path from "path";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children, Component } from "react";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";

const routes = [
    { path : "/", Component : App, children : [
        {path : "/", Component : Products},
        {path : "/products/:id", Component : ProductDetails},
        {path : "/register", Component : Register}
    ]}
];

const router = createBrowserRouter(routes);

export default router;