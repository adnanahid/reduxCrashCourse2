import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counters/countersSlice";
import informationReducer from "./features/information/informationSlice"

const store = configureStore({
  reducer: {
    counters: counterReducer,
    information: informationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
