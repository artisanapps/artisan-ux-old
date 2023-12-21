import React from "react";
import { TreeContextProps } from "./Tree.types";

const TreeContext = React.createContext<TreeContextProps>({ pending: false });

const useTreeContext = () => {
  const context = React.useContext(TreeContext);

  if (!context) {
    throw Error("Tree Context not provided");
  }

  return context;
};

export { TreeContext, useTreeContext };
