import React from "react";
import {MultiSelectBoxFieldProps} from "./SelectBoxFields.types";
import Grid from "@mui/material/Unstable_Grid2";
import {Checkbox, FormControlLabel} from "@mui/material";

const MultiSelectBoxField = (props: MultiSelectBoxFieldProps) => {
  const {
    id,
    options,
      label,
      helpText,
      values,
      onChange
  } = props;

  return (
    <Grid container spacing={1}>
      {
        options.map(option => {

          return (
            <Grid item xs={3}>
              <FormControlLabel
                control={<Checkbox />}
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
