import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch all products (for regular users)
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5001/api/products", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      return data; // Returns the list of products
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to fetch a single product by ID (for product detail view)
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/products/${productId}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      const data = await response.json();
      return data; // Returns the single product's data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  productDetails: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch single product by ID (product details)
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
