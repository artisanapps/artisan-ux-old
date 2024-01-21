import React from "react";
import {RepeaterProps} from "./Repeater.types";
import Grid from "@mui/material/Unstable_Grid2";
import RepeaterUnit from "./RepeaterUnit";

function Repeater<T>(props: RepeaterProps<T>) {
  const {
    values,
      blankValue,
      onValuesChange,
      onValidate,
      fields
  } = props;

  const onValueChange = (changedIndex: number, newValue: T) => {
    const newValues = values.map((value, index) => {
      return index === changedIndex ? newValue : value;
    })

    onValuesChange(newValues);
  }

  const onBlankValueChange = (index: number, newValue: T) => {
    const newValues = [...values, newValue];
    onValuesChange(newValues);
  }

  return (
    <Grid container spacing={4}>
      {
        values.map((value, index) => {

          return (
            <Grid item xs={12}>
              <RepeaterUnit
                  index={index}
                  value={value}
                  validate={onValidate}
                  onChange={onValueChange}
                  fields={fields}
              />
            </Grid>
          )
        })
      }

      <Grid item xs={12}>
        <RepeaterUnit
            index={values.length + 1}
            value={blankValue}
            validate={onValidate}
            onChange={onBlankValueChange}
            fields={fields}
        />
      </Grid>
    </Grid>
  )
}

export default Repeater;
