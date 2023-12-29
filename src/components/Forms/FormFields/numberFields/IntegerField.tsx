import {IntegerFieldProps} from './NumberField.types';
import {TextFieldChangeEvent} from '../FormFields.types';
import React from 'react';
import { default as MUITextField } from "@mui/material/TextField/TextField";

const IntegerField = (props: IntegerFieldProps) => {
  const { id, value, onChange, label, helpText } = props;

  const onValueChange = (event: TextFieldChangeEvent) => {
    const newValue = parseInt(event.target.value);
    newValue !== value && onChange(newValue);
  };

  return (
    <MUITextField
      id={id}
      label={label}
      variant={"standard"}
      color={"primary"}
      type={"number"}
      value={value}
      onChange={onValueChange}
      fullWidth={true}
      helperText={helpText}
    />
  )
}

export default IntegerField;
