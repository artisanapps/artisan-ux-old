import React from 'react';
import TreeItem, {TreeItemProps} from './TreeItem';
import {TreeView} from '@material-ui/lab';

export interface TreeProps {
  key: string;
  items: Array<TreeItemProps>,
}

const Tree = (props: TreeProps) => {
  const { key, items } = props;

  return (
    <div id={key}>
      <TreeView>
        {items.map(item => (<TreeItem {...item} />))}
      </TreeView>
    </div>
  )
}

export default Tree;
