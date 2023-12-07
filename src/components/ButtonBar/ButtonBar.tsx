import React from 'react';
import {Button} from '@mui/material';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ButtonBarProps {
  buttons: Array<ButtonProps>;
  disabled?: boolean;
  leftContent?: any;
  leftAlign?: boolean;
  endContent?: any;
  disableButtonStyling?: boolean;
}

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

        let variant: "outlined" | "contained" = "outlined";
        if(!disableButtonStyling) {
          if(leftAlign) {
            if(index === 0) {
              variant = "contained";
            }
          } else if (isLast) {
            variant = "contained";
          }
        }

        return (
          <Button
            onClick={buttonProps.onClick}
            key={index}
            variant={variant}
            color={"primary"}
            style={{
              marginRight: isLast ? "0rem" : "0.5rem",
              textTransform: "none"
            }}
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
