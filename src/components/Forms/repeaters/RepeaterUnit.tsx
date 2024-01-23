import React from "react";
import {RepeaterUnitProps} from "./Repeater.types";
import Grid from "@mui/material/Unstable_Grid2";

function RepeaterUnit<T>(props: RepeaterUnitProps<T>) {
  const {
    index,
      value,
      onChange,
      fields
  } = props;

  const onFieldChange = (newValue: T) => {
    onChange(index, newValue)
  }

  return (
    <Grid container spacing={2}>
      {
        fields.map(field => {
          console.log(`${field.fieldName}_${index}`)

          return (
            <Grid xs={field.colspan} key={`${field.fieldName}_${index}`}>
              <field.Component value={value} onValueChange={onFieldChange} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default RepeaterUnit;