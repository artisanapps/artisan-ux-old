import React from 'react';
import TreeItem, {TreeItemProps} from './TreeItem';
import {TreeView} from '@material-ui/lab';
import TreeDragAndDropProvider from "./TreeDragAndDropProvider";

export interface TreeProps {
  treeID: string;
  items: Array<TreeItemProps>,
}

const TreeContent = (props: TreeProps) => {
  const { treeID, items } = props;

  return (
    <TreeDragAndDropProvider rootElementID={treeID}>
      {items.map(item => (<TreeItem {...item} />))}
    </TreeDragAndDropProvider>
  )
}

const Tree = (props: TreeProps) => {
  const { treeID } = props;

  return (
    <div id={treeID}>
      <TreeView>
        <TreeContent {...props} />
      </TreeView>
    </div>
  )
}

export default Tree;
