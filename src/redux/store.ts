import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import clientIdReducer from "./slice/clientIdSlice";
import payment from "./slice/payment";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    clientId: clientIdReducer,
    payment: payment,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
