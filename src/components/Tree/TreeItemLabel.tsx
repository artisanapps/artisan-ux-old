import {Link, Skeleton, Typography, TypographyProps, useTheme} from "@mui/material";
import {useTreeStyles} from "./Tree.styles";
import {useDrag, useDrop} from "react-dnd";
import React from "react";
import {DragIndicator} from "@mui/icons-material";
import {TreeDragDropAdapter, TreeItemProps} from "./Tree.types";
import TreeItemActionMenu from "./TreeItemActionMenu";
import {useTreeContext} from "./TreeContext";

const PrimaryText = (props: {
  primaryText: string,
  primaryAction?: {
    clickAction?: () => void;
    navigateToURL?: string;
  }
}) => {
  const classes = useTreeStyles();

  const { primaryText, primaryAction } = props;
  const primaryClickAction = primaryAction?.clickAction;
  const navigateToURL = primaryAction?.navigateToURL;

  const typographyProps: TypographyProps = {
    variant: "body1",
    children: Boolean(navigateToURL) ? (
      <Link href={navigateToURL}>
        <span className={classes.clickable}>
          { primaryText }
        </span>
      </Link>
    ) : (
      <span
        onClick={primaryClickAction}
        className={Boolean(primaryClickAction) ? classes.clickable : undefined}
      >
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
  const pending = useTreeContext().pending;

  const {
    primaryText,
    secondaryText,
    actions,
    primaryAction
  } = props.adapter;

  const isDraggable = Boolean(props.dragDropAdapter);
  const hasActions = actions && actions.length > 0;

  const labelStyle: React.CSSProperties = { flex: 1 };

  const labelBody = pending ? (
    <div style={labelStyle}>
      <Skeleton variant={"rectangular"} animation={"wave"} />
      <Skeleton variant={"rectangular"} animation={"wave"} />
    </div>
  ) : (
    <div style={labelStyle}>
      <PrimaryText primaryText={primaryText} primaryAction={primaryAction} />

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

      {hasActions && actions !== undefined && <TreeItemActionMenu actions={actions} />}
    </DraggableLabel>
  ) : (
    <div>
      <div className={styles.treeItem}>
        {labelBody}

        {hasActions && actions !== undefined && <TreeItemActionMenu actions={actions} />}
      </div>
    </div>
  );
}

export default TreeItemLabel;
