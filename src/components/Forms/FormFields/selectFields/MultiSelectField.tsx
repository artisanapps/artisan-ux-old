import {
  MultiSelectFieldProps,
  SelectFieldOptionKey,
} from "./SelectFields.types";
import { Autocomplete, Skeleton } from "@mui/material";
import {
  getGroupNameFromOption,
  preProcessOptions,
  renderSelectFieldInput,
} from "./SelectFields.helpers";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

const MultiSelectField = (props: MultiSelectFieldProps) => {
  const {
    options,
    currentValues,
    onChange,
    label,
    helpText,
    required,
    loading,
    disabled,
    pending,
  } = props;

  const onAutocompleteChange = (
    event: React.SyntheticEvent,
    values: Array<SelectFieldOptionKey>
  ) => {
    const matchingOptions = options.filter((option) =>
      values.includes(option.key)
    );

    const selectedData = matchingOptions
      .filter((option) => Boolean(option.data))
      .map((option) => option.data);

    onChange(values, selectedData);
  };

  const results = preProcessOptions(options);
  const processedOptions = loading ? [] : results.options;
  const groupBy =
    results.groups.length > 1 ? getGroupNameFromOption : undefined;

  return pending ? (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skeleton variant={"rectangular"} animation={"wave"} height={"3rem"} />
      </Grid>
    </Grid>
  ) : (
    <Autocomplete
      multiple={true}
      renderInput={(params) =>
        renderSelectFieldInput(params, { label: label, helperText: helpText })
      }
      options={processedOptions}
      value={currentValues}
      onChange={onAutocompleteChange}
      disableClearable={required}
      loading={loading}
      disabled={disabled}
      groupBy={groupBy}
    />
  );
};

export default MultiSelectField;
