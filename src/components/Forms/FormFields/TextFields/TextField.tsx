import React from "react";
import { TextFieldProps } from "./TextField.types";
import { TextFieldChangeEvent } from "../FormFields.types";
import { default as MUITextField, TextFieldProps as MUITextFieldProps } from "@mui/material/TextField/TextField";

const TextField = (props: TextFieldProps) => {
  const { id, value, onChange, label, multiline } = props;

  const onValueChange = (event: TextFieldChangeEvent) => {
    onChange(event.target.value);
  };

  const muiTextFieldProps: MUITextFieldProps = {
    id: id,
    label: label,
    variant: "standard",
    color: "primary",
    value: value,
    onChange: onValueChange,
    fullWidth: true,
    multiline: multiline,
    rows: 2
  }

  return <MUITextField {...muiTextFieldProps} />;
};

export default TextField;
