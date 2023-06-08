import React from 'react';
import TreeItem from './TreeItem';
import {TreeView} from '@material-ui/lab';
import TreeDragAndDropProvider from "./TreeDragAndDropProvider";
import {TreeProps} from "./Tree.types";

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
