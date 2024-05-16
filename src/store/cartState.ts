import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types/Cart";

let cartState = createSlice(
    {
        name : "cart",
        initialState : {
            items : [] as CartItem[]
        },
        reducers : {
            addToCart : (state,action) => {
                let item = state.items.find(item => item.product.id === action.payload.id);
                if(item){
                    item.quantity++;
                }else{
                    state.items.push({product : action.payload,quantity : 1});
                }
            },
            removeFromCart : (state,action) => {
                state.items = state.items.filter(item => item.product.id !== action.payload.id);
            }
        }
    }
);

export default cartState.reducer;
export let { addToCart, removeFromCart } = cartState.actions;