import React from 'react';
import {SelectFieldOptionKey, SingleSelectFieldProps} from './SelectFields.types';
import {Autocomplete} from '@mui/material';
import {
  getGroupNameFromOption,
  preProcessOptions,
  renderSelectFieldInput,
  sortAndGroupOptions
} from './SelectFields.helpers';


const SingleSelectField = (props: SingleSelectFieldProps) => {
  const {
    options,
    currentValue,
    onChange,
    label,
    helpText,
    required,
    loading,
    disabled
  } = props;

  const onAutocompleteChange = (event: React.SyntheticEvent, value: SelectFieldOptionKey) => {
    const matchingOptions = options.filter(option => option.key === value);
    const selectedOption = matchingOptions.length > 0 ? matchingOptions[0] : null;
    onChange(value, selectedOption?.data);
  }

  const results = preProcessOptions(options)
  const processedOptions = loading ? [] : results.options;
  const groupBy = results.groups.length > 1 ? getGroupNameFromOption : undefined;

  return (
    <Autocomplete
      renderInput={(params) => renderSelectFieldInput(params, { label: label, helperText: helpText })}
      options={processedOptions}
      value={currentValue}
      onChange={onAutocompleteChange}
      disableClearable={required}
      loading={loading}
      disabled={disabled}
      groupBy={groupBy}
    />
  )
}

export default SingleSelectField;
