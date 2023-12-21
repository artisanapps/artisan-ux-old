import React from "react";
import TreeItem from "./TreeItem";
import { TreeView } from "@mui/x-tree-view";
import TreeDragAndDropProvider from "./TreeDragAndDropProvider";
import { TreeContextProps, TreeProps } from "./Tree.types";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { TreeContext } from "./TreeContext";

const TreeContent = (props: TreeProps) => {
  const { treeID, items } = props;

  return (
    <TreeDragAndDropProvider rootElementID={treeID}>
      {items.map((item) => (
        <TreeItem {...item} />
      ))}
    </TreeDragAndDropProvider>
  );
};

const Tree = (props: TreeProps) => {
  const { treeID } = props;

  const context: TreeContextProps = {
    pending: Boolean(props.pending),
  };

  return (
    <TreeContext.Provider value={context}>
      <div id={treeID}>
        <TreeView
          defaultCollapseIcon={<KeyboardArrowDown />}
          defaultExpandIcon={<KeyboardArrowRight />}
        >
          <TreeContent {...props} />
        </TreeView>
      </div>
    </TreeContext.Provider>
  );
};

export default Tree;
