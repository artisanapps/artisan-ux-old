import React from "react";
import { ButtonClickEvent } from "../../core/Events.types";
declare const PopUpMenuButton: (props: {
    icon: any;
    onClick: (event: ButtonClickEvent) => void;
    variant?: "text" | "outlined" | "contained" | undefined;
    disabled?: boolean | undefined;
}) => React.JSX.Element;
export default PopUpMenuButton;
