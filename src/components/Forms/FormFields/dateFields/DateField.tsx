import React from 'react';
import {DateFieldProps} from './DateField.types';
import { default as MUITextField } from "@mui/material/TextField/TextField";
import {TextFieldChangeEvent} from '../FormFields.types';

const DateField = (props: DateFieldProps) => {
  const {
    id,
    value,
    onChange,
    label,
      helpText
  } = props;

  const onInput = (event: TextFieldChangeEvent) => {
    onChange(event.target.value);
  }

  return (
    <MUITextField
      id={id}
      type={"date"}
      label={label}
      value={value}
      onChange={onInput}
      variant={"standard"}
      color={"primary"}
      fullWidth={true}
      InputLabelProps={{ shrink: true }}
      helperText={helpText}
    />
  )
};

export default DateField;
