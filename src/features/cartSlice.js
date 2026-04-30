import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
      localStorage.setItem("cart", JSON.stringify([...state.cart]))
    },
  },
})



// Action creators are generated for each case reducer function
export const {addToCart } = cartSlice.actions

export default cartSlice.reducer