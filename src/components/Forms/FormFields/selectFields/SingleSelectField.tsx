import React from 'react';
import {SelectFieldOptionKey, SingleSelectFieldProps} from './SelectFields.types';
import {Autocomplete} from '@mui/material';
import {
  getSelectFieldOptionKey,
  getSelectFieldOptionLabel,
  isSelectFieldOptionEqualToValue,
  renderSelectFieldInput
} from './SelectFields.helpers';


const SingleSelectField = (props: SingleSelectFieldProps) => {
  const {
    options,
    currentValue,
    onChange,
    label,
    helpText
  } = props;

  const onAutocompleteChange = (event: React.SyntheticEvent, value: SelectFieldOptionKey) => {
    const matchingOptions = options.filter(option => option.key === value);
    const selectedOption = matchingOptions.length > 0 ? matchingOptions[0] : null;
    onChange(value, selectedOption?.data);
  }

  return (
    <Autocomplete
      size={"small"}
      renderInput={(params) => renderSelectFieldInput(params, { label: label, helperText: helpText })}
      options={options}
      value={currentValue}
      onChange={onAutocompleteChange}
      getOptionKey={getSelectFieldOptionKey}
      isOptionEqualToValue={isSelectFieldOptionEqualToValue}
    />
  )
}

export default SingleSelectField;
