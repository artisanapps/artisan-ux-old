import React from 'react';
import {useTreeStyles} from './Tree.styles';
import {Typography, TypographyProps, useTheme} from '@material-ui/core';
import {
  TreeItem as MUITreeItem,
  TreeItemProps as MUITreeItemProps
} from "@material-ui/lab";

export interface TreeItemAdapter {
  id: string,
  primaryText: string,
  secondaryText: string,
  childItems?: Array<TreeItemProps>,
}

export interface TreeItemProps {
  adapter: TreeItemAdapter,
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

const TreeItem = (props: TreeItemProps) => {
  const styles = useTreeStyles();
  const theme = useTheme();

  const {
    id,
    primaryText,
    secondaryText,
    childItems
  } = props.adapter;

  const labelStyle: React.CSSProperties = { flex: 1 };

  const treeItemProps: MUITreeItemProps = {
    nodeId: id,
    label: (
      <div>
        <div className={styles.treeItem}>
          <div style={labelStyle}>
            <PrimaryText primaryText={primaryText} />

            {Boolean(secondaryText) && (
              <Typography variant={"body2"} className={styles.secondaryText}>
                {secondaryText}
              </Typography>
            )}
          </div>
        </div>
      </div>
    ),
    children: childItems?.map(childItem => <TreeItem {...childItem} />)
  }

  return (
    <MUITreeItem {...treeItemProps} />
  );
}

export default TreeItem;
