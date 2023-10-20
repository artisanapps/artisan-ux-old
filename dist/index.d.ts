import React from 'react';
import { PaletteColorOptions } from '@material-ui/core';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}
interface ButtonBarProps {
    buttons: Array<ButtonProps>;
    disabled?: boolean;
    leftContent?: any;
    leftAlign?: boolean;
    endContent?: any;
    disableButtonStyling?: boolean;
}
declare const ButtonBar: (props: ButtonBarProps) => React.JSX.Element;

interface TreeProps {
    treeID: string;
    items: Array<TreeItemProps>;
    pending?: boolean;
}
interface TreeItemAdapter {
    id: string;
    primaryText: string;
    secondaryText: string;
    primaryAction?: {
        clickAction?: () => void;
        navigateToURL?: string;
    };
    childItems?: Array<TreeItemProps>;
    actions?: Array<TreeItemActionProps>;
}
interface TreeDragDropAdapter {
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
interface TreeItemProps {
    adapter: TreeItemAdapter;
    dragDropAdapter: TreeDragDropAdapter;
}
interface TreeItemActionProps {
    label: string;
    onClick: () => void;
}

declare const Tree: (props: TreeProps) => React.JSX.Element;

declare const ArtisanUXProvider: (props: {
    primaryColor: PaletteColorOptions;
    children?: any;
}) => React.JSX.Element;

export { ArtisanUXProvider, ButtonBar, ButtonBarProps, ButtonProps, Tree };
