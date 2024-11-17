import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch cart items (could come from the backend)
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:5001/api/cart/${userId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
      return data; // Return the list of cart items
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to add an item to the cart
export const addToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (item, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5001/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();
      return data; // Return the updated cart after adding the item
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to remove an item from the cart
export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async (itemId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:5001/api/cart/${itemId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }

      const data = await response.json();
      return data; // Return the updated cart after removing the item
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeItemFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
