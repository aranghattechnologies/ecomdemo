import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartState";

let store = configureStore({
    reducer : {
        cart : cartReducer
    }
});

export default store;