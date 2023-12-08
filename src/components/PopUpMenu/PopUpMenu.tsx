import React, {useState} from "react";
import {PopUpMenuItemProps, PopUpMenuProps} from "./PopUpMenu.types";
import {ButtonClickEvent} from "../../core/Events.types";
import {Menu, MenuProps} from "@mui/material";
import PopUpMenuButton from "./PopUpMenuButton";
import PopUpMenuItem from "./PopUpMenuItem";

const PopUpMenu = (props: PopUpMenuProps) => {
  const [anchor, setAnchor] = useState<any>(null);

  const {
    items,
      label,
      icon,
      variant
  } = props;

  const openMenu = (event: ButtonClickEvent) => {
    setAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
  };

  const menuProps: MenuProps = {
    open: Boolean(anchor),
    anchorEl: anchor,
    onClose: closeMenu,
    MenuListProps: { onMouseLeave: closeMenu }
  };

  const menuItems: Array<PopUpMenuItemProps> = items.map(item => ({
    ...item,
    onClick: () => {
      closeMenu();
      item.onClick();
    }
  }));

  return (
    <>
      <PopUpMenuButton
        icon={icon}
        onClick={openMenu}
      />

      <Menu {...menuProps}>
        {menuItems.map((menuItem, index) => (
          <PopUpMenuItem key={index} {...menuItem} />
        ))}
      </Menu>
    </>
  )
}

export default PopUpMenu;
