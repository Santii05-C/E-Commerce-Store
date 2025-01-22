import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,

  setProducts: (products) => set({ products }),
  createProduct: async (productData) => {
    set({ loading: true });
    try {
      const res = await axios.post("/products", productData);
      set((prevState) => ({
        products: [...prevState.products, res.data],
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response.data.error);
      set({ loading: false });
    }
  },

  fetchProductsByCategory: async (category) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/products/category/${category}`);
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response.data.error || "Failed to fetch products");
    }
  },

  // deleteProduct: async (productId) => {
  //   set({ loading: true });
  //   try {
  //     await axios.delete(`/products/${productId}`);
  //     set((prevProducts) => ({
  //       products: prevProducts.products.filter(
  //         (product) => product._id !== productId
  //       ),
  //       loading: false,
  //     }));
  //   } catch (error) {
  //     set({ loading: false });
  //     toast.error(error.response.data.error || "Failed to delete product");
  //   }
  // },
}));
