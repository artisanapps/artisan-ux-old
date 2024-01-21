import React from "react";
import {RepeaterUnitProps} from "./Repeater.types";
import Grid from "@mui/material/Unstable_Grid2";

function RepeaterUnit<T>(props: RepeaterUnitProps<T>) {
  const {
    index,
      value,
      validate,
      onChange,
      fields
  } = props;

  const onFieldChange = (newValue: T) => {
    if(validate(index, newValue)) {
      onChange(index, newValue);
    }
  }

  return (
    <Grid container spacing={2}>
      {
        fields.map(field => {

          return (
            <Grid item xs={field.colspan}>
              <field.Component value={value} onValueChange={onFieldChange} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default RepeaterUnit;