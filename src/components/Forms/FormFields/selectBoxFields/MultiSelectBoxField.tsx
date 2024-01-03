import React from "react";
import {MultiSelectBoxFieldProps} from "./SelectBoxFields.types";
import Grid from "@mui/material/Unstable_Grid2";
import {Checkbox, CheckboxProps, DialogContentText, FormControlLabel, Typography} from "@mui/material";

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
      {label && (
        <Grid item xs={12}>
          <Typography variant={"body1"}>
            { label }
          </Typography>

          {helpText && (
            <DialogContentText>
              { helpText }
            </DialogContentText>
          )}
        </Grid>
      )}

      {
        options.map(option => {
          const checkboxProps: CheckboxProps = {
            checked: values.includes(option.key),
            onClick: () => onClick(option.key),
            size: "small"
          }

          return (
            <Grid item xs={3} id={`${id}_${option.key}`}>
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
