import React from "react";
import {MultiSelectBoxFieldProps} from "./SelectBoxFields.types";
import Grid from "@mui/material/Unstable_Grid2";
import {Checkbox, CheckboxProps, FormControlLabel} from "@mui/material";

const MultiSelectBoxField = (props: MultiSelectBoxFieldProps) => {
  const {
    id,
    options,
      label,
      helpText,
      values,
      onChange
  } = props;

  const onClick = (key: string) => {
    let newValues = [...values];

    if(values.includes(key)) {
      newValues = newValues.filter(value => value !== key);
    } else {
      newValues.push(key);
    }

    onChange(newValues);
  }

  return (
    <Grid container spacing={1}>
      {
        options.map(option => {
          const checkboxProps: CheckboxProps = {
            checked: values.includes(option.key),
            onClick: () => onClick(option.key)
          }

          return (
            <Grid item xs={3}>
              <FormControlLabel
                control={<Checkbox {...checkboxProps} />}
                label={option.label}
              />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default MultiSelectBoxField;
