import React from "react";
import {DateFieldProps, DateRangeFieldProps, DateRangeValue} from "./DateField.types";
import Grid from "@mui/material/Unstable_Grid2";
import DateField from "./DateField";
import moment from "moment";

const DateRangeField = (props: DateRangeFieldProps) => {
  const {
    id,
      value,
      onChange,
      labels,
      helpTexts,
      autoAdjustInvalidDates
  } = props;

  const startDateFieldProps: DateFieldProps = {
    id: `${id}_start`,
    value: value.startDate,
    onChange: (newStartDate: string) => {
      const newDateRange: DateRangeValue = { startDate: newStartDate, endDate: value.endDate }

      if(autoAdjustInvalidDates) {
        if(moment(newDateRange.endDate).isSameOrBefore(newDateRange.startDate)) {
          newDateRange.endDate = moment(newDateRange.startDate).add("1", "day").format('YYYY-MM-DD');
        }
      }

      onChange(newDateRange)
    },
    label: labels ? labels.startDateLabel : "Start",
    helpText: helpTexts?.startDateHelpText
  };

  const endDateFieldProps: DateFieldProps = {
    id: `${id}_end`,
    value: value.endDate,
    onChange: (newEndDate: string) => {
      const newDateRange: DateRangeValue = { startDate: value.startDate, endDate: newEndDate }
      onChange(newDateRange)
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
