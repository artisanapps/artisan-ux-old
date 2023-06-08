import React from 'react';
import {useTreeStyles} from './Tree.styles';
import {Typography, TypographyProps, useTheme} from '@material-ui/core';
import {
  TreeItem as MUITreeItem,
  TreeItemProps as MUITreeItemProps
} from "@material-ui/lab";
import {useDrag, useDrop} from 'react-dnd';
import {DragIndicator} from "@material-ui/icons";

export interface TreeItemAdapter {
  id: string,
  primaryText: string,
  secondaryText: string,
  childItems?: Array<TreeItemProps>,
}

export interface TreeDragDropAdapter {
  itemID: string;
  itemType: "group" | "item";
  dragData: any;
  canDrop: (droppedItemDragData: any) => boolean;
  onDrop: (droppedItemDragData: any) => void;
  disableDrag?: boolean;
}

export interface TreeItemProps {
  adapter: TreeItemAdapter;
  dragDropAdapter: TreeDragDropAdapter;
}

const PrimaryText = (props: {
  primaryText: string,
}) => {
  const { primaryText } = props;
  const classes = useTreeStyles();

  const typographyProps: TypographyProps = {
    variant: "body1",
    children: (
      <span>
        { primaryText }
      </span>
    )
  }

  return <Typography {...typographyProps} />;
}

const DraggableLabel = (props: {
  adapter: TreeDragDropAdapter,
  children?: any,
}) => {
  const theme = useTheme();
  const styles = useTreeStyles();

  const {
    itemID,
    itemType,
    dragData,
    canDrop,
    onDrop,
    disableDrag
  } = props.adapter;

  const [dragProps, drag, dragPreview] = useDrag(() => ({
    type: itemType,
    item: dragData,
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    canDrag: !disableDrag
  }));

  const [dropProps, drop] = useDrop(() => ({
    accept: itemType === "group" ? ["group", "item"] : ["item"],
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    canDrop: (droppedItem) => {
      return canDrop(droppedItem);
    },
    drop: (droppedItem, monitor) => {
      onDrop(droppedItem);
      return droppedItem;
    }
  }));

  const isDragging = dragProps.isDragging;
  const canDrag = !disableDrag;
  const isOver = dropProps.isOver;
  const dropAllowed = dropProps.canDrop;

  const dropStyle: React.CSSProperties = {
    borderBottom:
      isOver && dropAllowed
        ? `2rem solid ${theme.palette.primary.light}`
        : ''
  };

  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className={styles.treeItem} ref={drop} style={dropStyle}>
        {props.children}

        {canDrag && (
            <div id={itemID} ref={drag} style={{ cursor: "grab" }}>
              <DragIndicator />
            </div>
        )}
      </div>
    </div>
  )
}


const ItemLabel = (props: TreeItemProps) => {
  const styles = useTreeStyles();

  const {
    primaryText,
    secondaryText
  } = props.adapter;

  const isDraggable = Boolean(props.dragDropAdapter);

  const labelStyle: React.CSSProperties = { flex: 1 };

  const labelBody = (
      <div style={labelStyle}>
        <PrimaryText primaryText={primaryText} />

        {Boolean(secondaryText) && (
            <Typography variant={"body2"} className={styles.secondaryText}>
              {secondaryText}
            </Typography>
        )}
      </div>
  );

  return isDraggable ? (
      <DraggableLabel adapter={props.dragDropAdapter}>
        { labelBody }
      </DraggableLabel>
  ) : (
      <div>
        <div className={styles.treeItem}>
          {labelBody}
        </div>
      </div>
  );
}

const TreeItem = (props: TreeItemProps) => {
  const {
    id,
    childItems
  } = props.adapter;

  const treeItemProps: MUITreeItemProps = {
    nodeId: id,
    label: <ItemLabel {...props} />,
    children: childItems?.map(childItem => <TreeItem {...childItem} />)
  }

  return <MUITreeItem {...treeItemProps} />;
}

export default TreeItem;
