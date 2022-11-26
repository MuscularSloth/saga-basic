import { planetsStore } from "./reducers/planets/planetsStore";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { peopleStore } from "./reducers/people/peopleStore";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		people: peopleStore,
		planets: planetsStore,
	},
	middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
