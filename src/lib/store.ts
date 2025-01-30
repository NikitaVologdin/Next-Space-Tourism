import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./features/mobileMenu/mobileMenuSlice";
// import slideShowReducer from "./features/slideShow/slideShowSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      mobileMenu: mobileMenuReducer,
      // slideShow: slideShowReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
