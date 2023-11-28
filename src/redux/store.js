import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, dataCartSlice } from "./cartSlice";
// import { dataCartSlice } from "./selectDataSlice";

export const store = configureStore({
	reducer: {
		cartSlice: cartSlice,
		dataCartSlice: dataCartSlice,
	},
});