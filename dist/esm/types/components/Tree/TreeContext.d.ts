import React from "react";
import { TreeContextProps } from "./Tree.types";
declare const TreeContext: React.Context<TreeContextProps>;
declare const useTreeContext: () => TreeContextProps;
export { TreeContext, useTreeContext };
