import {Typography, TypographyProps, useTheme} from "@material-ui/core";
import {useTreeStyles} from "./Tree.styles";
import {useDrag, useDrop} from "react-dnd";
import React from "react";
import {DragIndicator} from "@material-ui/icons";
import {TreeDragDropAdapter, TreeItemProps} from "./Tree.types";
import TreeItemActionMenu from "./TreeItemActionMenu";

const PrimaryText = (props: {
  primaryText: string,
}) => {
  const { primaryText } = props;

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
    canDrop: (droppedItemData: any) => {
      if(droppedItemData.itemID === dragData.itemID) {
        return false;
      }

      return canDrop(droppedItemData);
    },
    drop: (droppedItem: any) => {
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


const TreeItemLabel = (props: TreeItemProps) => {
  const styles = useTreeStyles();

  const {
    primaryText,
    secondaryText,
      actions
  } = props.adapter;

  const isDraggable = Boolean(props.dragDropAdapter);
  const hasActions = actions && actions.length > 0;

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

      {hasActions && <TreeItemActionMenu actions={actions} />}
    </DraggableLabel>
  ) : (
    <div>
      <div className={styles.treeItem}>
        {labelBody}

        {hasActions && <TreeItemActionMenu actions={actions} />}
      </div>
    </div>
  );
}

export default TreeItemLabel;