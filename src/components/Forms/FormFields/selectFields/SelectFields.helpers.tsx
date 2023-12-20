import React from 'react';
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

export {
  renderSelectFieldInput,
};
