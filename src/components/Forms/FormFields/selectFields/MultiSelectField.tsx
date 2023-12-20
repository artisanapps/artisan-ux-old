import {MultiSelectFieldProps, SelectFieldOptionKey} from './SelectFields.types';
import {Autocomplete} from '@mui/material';
import { renderSelectFieldInput } from './SelectFields.helpers';
import React from 'react';

const MultiSelectField = (props: MultiSelectFieldProps) => {
  const {
    options,
    currentValues,
    onChange,
    label,
    helpText,
    required
  } = props;

  const onAutocompleteChange = (event: React.SyntheticEvent, values: Array<SelectFieldOptionKey>) => {
    const matchingOptions = options.filter(option => values.includes(option.key));
    const selectedData = matchingOptions.filter(option => Boolean(option.data)).map(option => option.data);
    onChange(values, selectedData);
  }

  return (
    <Autocomplete
      renderInput={(params) => renderSelectFieldInput(params, { label: label, helperText: helpText })}
      options={options}
      value={currentValues}
      onChange={onAutocompleteChange}
      disableClearable={required}
    />
  )
}

export default MultiSelectField;
