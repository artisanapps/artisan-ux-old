import React from "react";
import { TreeItemActionProps } from "./Tree.types";
import { PopUpMenuItemProps } from "../PopUpMenu/PopUpMenu.types";
import PopUpMenu from "../PopUpMenu/PopUpMenu";
import { MoreVert } from "@mui/icons-material";

const TreeItemActionMenu = (props: { actions: Array<TreeItemActionProps> }) => {
  const menuItems: Array<PopUpMenuItemProps> = props.actions.map((action) => {
    return {
      label: action.label,
      onClick: action.onClick,
    };
  });

  return <PopUpMenu items={menuItems} icon={<MoreVert />} />;
};

export default TreeItemActionMenu;
