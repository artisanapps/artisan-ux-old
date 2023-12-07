import React from 'react';
import {
  TreeItem as MUITreeItem,
  TreeItemProps as MUITreeItemProps
} from "@mui/x-tree-view";
import TreeItemLabel from "./TreeItemLabel";
import {TreeItemProps} from "./Tree.types";

const TreeItem = (props: TreeItemProps) => {
  const {
    id,
    childItems
  } = props.adapter;

  const treeItemProps: MUITreeItemProps = {
    nodeId: id,
    label: <TreeItemLabel {...props} />,
    children: childItems?.map(childItem => <TreeItem {...childItem} />)
  }

  return <MUITreeItem {...treeItemProps} />;
}

export default TreeItem;
