export interface TreeProps {
  treeID: string;
  items: Array<TreeItemProps>,
}

export interface TreeItemAdapter {
  id: string,
  primaryText: string,
  secondaryText: string,
  childItems?: Array<TreeItemProps>,
  actions?: Array<TreeItemActionProps>,
}

export interface TreeDragDropAdapter {
  itemID: string;
  itemType: "group" | "item";
  dragData: {
    itemID: string;
    payload: any;
  };
  canDrop: (droppedItemDragData: any) => boolean;
  onDrop: (droppedItemDragData: any) => void;
  disableDrag?: boolean;
}

export interface TreeItemProps {
  adapter: TreeItemAdapter;
  dragDropAdapter: TreeDragDropAdapter;
}

export interface TreeItemActionProps {
  label: string;
  onClick: () => void;
}