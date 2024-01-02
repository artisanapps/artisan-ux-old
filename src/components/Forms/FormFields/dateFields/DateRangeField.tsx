import React from "react";
import {DateFieldProps, DateRangeFieldProps} from "./DateField.types";
import Grid from "@mui/material/Unstable_Grid2";
import DateField from "./DateField";

const DateRangeField = (props: DateRangeFieldProps) => {
  const {
    id,
      value,
      onChange,
      labels,
      helpTexts
  } = props;

  const startDateFieldProps: DateFieldProps = {
    id: `${id}_start`,
    value: value.startDate,
    onChange: (newStartDate: string) => {
      onChange({ startDate: newStartDate, endDate: value.endDate })
    },
    label: labels ? labels.startDateLabel : "Start",
    helpText: helpTexts?.startDateHelpText
  };

  const endDateFieldProps: DateFieldProps = {
    id: `${id}_end`,
    value: value.endDate,
    onChange: (newEndDate: string) => {
      onChange({ startDate: value.startDate, endDate: newEndDate })
    },
    label: labels ? labels.endDateLabel : "End",
    helpText: helpTexts?.endDateHelpText
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <DateField {...startDateFieldProps} />
      </Grid>
      <Grid item xs={6}>
        <DateField {...endDateFieldProps} />
      </Grid>
    </Grid>
  )
}

export default DateRangeField;
