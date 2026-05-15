import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]));
    },
    deleteWishlistItem: (state, action) => {
      // state.wishlist.push(action.payload);
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, deleteWishlistItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
