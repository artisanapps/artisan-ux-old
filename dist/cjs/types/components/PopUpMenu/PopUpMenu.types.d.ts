import { ButtonClickEvent } from "../../core/Events.types";
export interface PopUpMenuItemProps {
    label: string;
    onClick: () => void;
}
export interface PopUpMenuProps {
    items: Array<PopUpMenuItemProps>;
    label?: string;
    icon?: any;
    variant?: "text" | "outlined" | "contained";
    disabled?: boolean;
}
export interface PopUpMenuButtonProps {
    onClick: (event: ButtonClickEvent) => void;
    label?: string;
    icon?: any;
    disabled?: boolean;
}
