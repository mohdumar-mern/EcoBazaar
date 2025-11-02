"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import RSLayout from "@/components/(site)/(layouts)/layout";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <RSLayout>
        {children}
      </RSLayout>
    </Provider>
  )
};

export default ReduxProvider;
