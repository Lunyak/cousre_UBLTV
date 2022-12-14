import { DeepPartial } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { IStateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider = ({
  children,
  initialState,
}: StoreProviderProps) => {
  const store = createReduxStore(initialState as IStateSchema);
  return <Provider store={store}>{children}</Provider>;
};
