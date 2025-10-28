import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types";

type CartState = Product[];

const initialState: CartState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action: PayloadAction<Product>){
            state.push(action.payload);
        },
        remove(state, action: PayloadAction<number>){
            return state.filter((item) => item.id !== action.payload)
        },
        clear(state){
            return [];
        }
    },
});

export const { add, remove, clear} = cartSlice.actions;
export default cartSlice.reducer;