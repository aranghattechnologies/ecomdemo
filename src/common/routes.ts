import path from "path";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children, Component } from "react";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import Cart from "../pages/Cart";

const routes = [
    { path : "/", Component : App, children : [
        {path : "/", Component : Products},
        {path : "/products/:id", Component : ProductDetails},
        {path : "/register", Component : Register},
        {path : "/cart", Component : Cart}
    ]}
];

const router = createBrowserRouter(routes);

export default router;