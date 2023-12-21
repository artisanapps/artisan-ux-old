import {MultiSelectFieldProps, SelectFieldOption, SelectFieldOptionKey} from './SelectFields.types';
import {Autocomplete} from '@mui/material';
import {getGroupNameFromOption, preProcessOptions, renderSelectFieldInput} from './SelectFields.helpers';
import React from 'react';

const MultiSelectField = (props: MultiSelectFieldProps) => {
  const {
    options,
    currentValues,
    onChange,
    label,
    helpText,
    required,
    loading,
    disabled
  } = props;

  const onAutocompleteChange = (event: React.SyntheticEvent, values: Array<SelectFieldOptionKey>) => {
    const matchingOptions = options.filter(option => values.includes(option.key));
    const selectedData = matchingOptions.filter(option => Boolean(option.data)).map(option => option.data);
    onChange(values, selectedData);
  }

  const results = preProcessOptions(options)
  const processedOptions = loading ? [] : results.options;
  const groupBy = results.groups.length > 1 ? getGroupNameFromOption : undefined;

  return (
    <Autocomplete
      multiple={true}
      renderInput={(params) => renderSelectFieldInput(params, { label: label, helperText: helpText })}
      options={processedOptions}
      value={currentValues}
      onChange={onAutocompleteChange}
      disableClearable={required}
      loading={loading}
      disabled={disabled}
      groupBy={groupBy}
    />
  )
}

export default MultiSelectField;
