import React from 'react';
import {SelectFieldOptionKey, SingleSelectFieldProps} from './SelectFields.types';
import {Autocomplete, Skeleton} from '@mui/material';
import {
  getGroupNameFromOption,
  preProcessOptions,
  renderSelectFieldInput,
  sortAndGroupOptions
} from './SelectFields.helpers';
import Grid from '@mui/material/Unstable_Grid2';


const SingleSelectField = (props: SingleSelectFieldProps) => {
  const {
    options,
    currentValue,
    onChange,
    label,
    helpText,
    required,
    loading,
    disabled,
    pending
  } = props;

  const onAutocompleteChange = (event: React.SyntheticEvent, value: SelectFieldOptionKey) => {
    const matchingOptions = options.filter(option => option.key === value);
    const selectedOption = matchingOptions.length > 0 ? matchingOptions[0] : null;
    onChange(value, selectedOption?.data);
  }

  const results = preProcessOptions(options)
  const processedOptions = loading ? [] : results.options;
  const groupBy = results.groups.length > 1 ? getGroupNameFromOption : undefined;

  return pending ? (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skeleton variant={"rectangular"} animation={"wave"} height={"3rem"} />
      </Grid>
    </Grid>
  ) : (
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
