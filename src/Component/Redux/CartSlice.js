import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCartFromFirebase,
  removeCartItemFromFirebase,
  updateQtyInFirebase,
} from "../Services/cartService";

export const fetchCart = createAsyncThunk(
  "cart/fetch",
  async () => {
    return await getCartFromFirebase();
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/delete",
  async (docId) => {
    console.log("Deleting ID:", docId, typeof docId);
    await removeCartItemFromFirebase(docId);
    return docId;
  }
);

export const updateCartQty = createAsyncThunk(
  "cart/updateQty",
  async ({ docId, qty }) => {
    await updateQtyInFirebase(docId, qty);
    return { docId, qty };
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isCartOpen: false,
  },

  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.docId !== action.payload
        );
      })
      .addCase(updateCartQty.fulfilled, (state, action) => {
        const { docId, qty } = action.payload;
        const item = state.items.find((i) => i.docId === docId);
        if (item) {
          item.qty = qty;
        }
      });
  },
});

export const { openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
