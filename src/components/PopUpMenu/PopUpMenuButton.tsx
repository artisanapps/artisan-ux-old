import React from "react";
import { ButtonClickEvent } from "../../core/Events.types";
import { IconButton } from "@mui/material";

const PopUpMenuButton = (props: {
  icon: any;
  onClick: (event: ButtonClickEvent) => void;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
}) => {
  const { icon, onClick, variant, disabled } = props;

  const preClick = (event: ButtonClickEvent) => {
    event.preventDefault();
    onClick(event);
  };

  return <IconButton onClick={preClick}>{icon}</IconButton>;
};

export default PopUpMenuButton;
