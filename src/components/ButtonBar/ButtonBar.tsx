import React from 'react';
import {ButtonBarProps} from './ButtonBar.types';
import {Button} from '@material-ui/core';

const ButtonBar = (props: ButtonBarProps) => {
  const {
    buttons,
    leftAlign,
    leftContent,
    endContent,
    disabled,
    disableButtonStyling
  } = props;

  const buttonCount = buttons.length;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {leftContent}

      {!leftAlign && <div style={{ flexGrow: 1 }} />}
      {!leftAlign && endContent}

      {props.buttons.map((buttonProps, index) => {
        const isLast: boolean = index + 1 === buttonCount;

        return (
          <Button
            onClick={buttonProps.onClick}
            key={index}
            variant={isLast && !disableButtonStyling ? "contained" : "outlined"}
            color={"primary"}
            style={{ marginRight: isLast ? "0rem" : "0.5rem" }}
            disabled={disabled || buttonProps.disabled}
            disableElevation={true}
            size={"small"}
          >
            {buttonProps.label}
          </Button>
        )
      })}
    </div>
  )
}

export default ButtonBar;
