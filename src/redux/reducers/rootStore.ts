import { configureStore } from "@reduxjs/toolkit";
import { peopleStore } from "./stores/peopleStore";

export const store = configureStore({
	reducer: {
		people: peopleStore,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
