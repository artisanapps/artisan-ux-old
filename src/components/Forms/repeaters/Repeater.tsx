import React from "react";
import {RepeaterProps} from "./Repeater.types";
import Grid from "@mui/material/Unstable_Grid2";
import RepeaterUnit from "./RepeaterUnit";
import {Button} from "@mui/material";

function Repeater<T>(props: RepeaterProps<T>) {
  const {
    values,
      blankValue,
      onValuesChange,
      fields
  } = props;

  const onValueChange = (changedIndex: number, newValue: T) => {
    const newValues = values.map((value, index) => {
      return index === changedIndex ? newValue : value;
    })

    onValuesChange(newValues);
  }

  const onBlankValueAdd = () => {
    const newValues = [...values, {...blankValue}];
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
                  onChange={onValueChange}
                  fields={fields}
              />
            </Grid>
          )
        })
      }

      <Grid item xs={12}>
        <Button
          fullWidth={true}
          color={"primary"}
          variant={"contained"}
          onClick={onBlankValueAdd}
          disableElevation={true}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  )
}

export default Repeater;
