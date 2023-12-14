import React from 'react';
import {SelectFieldOption} from './SelectFields.types';
import {AutocompleteRenderInputParams, TextField, TextFieldProps} from '@mui/material';

const renderSelectFieldInput = (params: AutocompleteRenderInputParams, additionalParams?: TextFieldProps) => {
  return (
    <TextField
      {...params}
      {...additionalParams}
      variant={"standard"}
      color={"primary"}
      fullWidth={true}
    />
  )
}

const getSelectFieldOptionLabel = (option: SelectFieldOption) => {
  return option.label;
}

const getSelectFieldOptionKey = (option: SelectFieldOption) => {
  return option.key;
}

const isSelectFieldOptionEqualToValue = (option: SelectFieldOption, value: SelectFieldOption) => {
  return option.key === value.key;
}

export {
  getSelectFieldOptionLabel,
  renderSelectFieldInput,
  getSelectFieldOptionKey,
  isSelectFieldOptionEqualToValue
};
