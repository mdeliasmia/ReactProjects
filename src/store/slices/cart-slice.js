import { createSlice } from '@reduxjs/toolkit';

//Create Slice
//initialize initialState
//slice ->name, mention initialState, actions

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            // console.log(action);
            state.push(action.payload);
        },
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
