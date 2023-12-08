import React from "react";
import {PopUpMenuItemProps} from "./PopUpMenu.types";
import {ListItemClickEvent} from "../../core/Events.types";
import {ListItemText, ListItemTextProps, MenuItem} from "@mui/material";

const PopUpMenuItem = (props: PopUpMenuItemProps) => {
  const {
    label,
    onClick
  } = props;

  const preClick = (event: ListItemClickEvent) => {
    event.preventDefault();
    onClick();
  }

  const listItemTextProps: ListItemTextProps = {
    primary: label,
    primaryTypographyProps: {
      color: "textPrimary"
    }
  };

  return (
    <MenuItem onClick={preClick} dense={true}>
      <ListItemText {...listItemTextProps} />
    </MenuItem>
  )
}

export default PopUpMenuItem;
