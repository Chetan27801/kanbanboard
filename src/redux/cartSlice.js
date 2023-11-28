import { createReducer } from "@reduxjs/toolkit";

export const cartSlice = createReducer(
	{},
	{
		dataRequest: (state) => {
			state.loading = true;
		},
		dataSuccess: (state, action) => {
			state.loading = false;
			state.tickets = action.payload.tickets;
			state.users = action.payload.users;
		},
		dataFailure: (state) => {
			state.loading = false;
			state.tickets = [];
			state.users = [];
		},
	}
);

export const dataCartSlice = createReducer(
	{},
	{
		dataSelectRequest: (state) => {
			state.loading = true;
			state.dataSelected = [];
		},
		dataSelectSuccess: (state, action) => {
			state.loading = false;
			state.dataSelected = action.payload.dataSelected;
			state.user = action.payload.user;
		},
		dataSelectFailure: (state, action) => {
			state.loading = false;
			state.dataSelected = [];
			state.message = action.payload.message;
		},
	}
);