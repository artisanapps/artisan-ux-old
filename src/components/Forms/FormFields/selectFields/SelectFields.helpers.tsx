import React from 'react';
import {SelectFieldOption} from './SelectFields.types';
import {AutocompleteRenderInputParams, TextField, TextFieldProps} from '@mui/material';

const renderSelectFieldInput = (params: AutocompleteRenderInputParams, additionalParams?: TextFieldProps) => {
  return <TextField {...params} {...additionalParams} />;
}

const getSelectFieldOptionLabel = (option: SelectFieldOption) => {
  return option.label;
}

const getSelectFieldOptionKey = (option: SelectFieldOption) => {
  return option.key;
}

export {
  getSelectFieldOptionLabel,
  renderSelectFieldInput,
  getSelectFieldOptionKey
};
