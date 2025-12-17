"use client";
import { Provider } from "react-redux";
import { store } from "./index";
import StoreInitializer from "./StoreInitializer";

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <StoreInitializer />
      {children}
    </Provider>
  );
}
