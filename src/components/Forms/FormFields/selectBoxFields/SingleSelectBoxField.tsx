import React from "react";
import {SingleSelectBoxFieldProps} from "./SelectBoxFields.types";
import Grid from "@mui/material/Unstable_Grid2";
import {
  DialogContentText,
  FormControlLabel,
  Radio,
  RadioProps,
  Typography
} from "@mui/material";

const SingleSelectBoxField = (props: SingleSelectBoxFieldProps) => {
  const {
    id,
    options,
      label,
      helpText,
      value,
      onChange
  } = props;

  const onClick = (key: string) => {
    onChange(key);
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
          const checkboxProps: RadioProps = {
            checked: option.key === value,
            onClick: () => onClick(option.key),
            size: "small"
          }

          return (
            <Grid item xs={3} id={`${id}_${option.key}`}>
              <FormControlLabel
                control={<Radio {...checkboxProps} />}
                label={option.label}
              />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default SingleSelectBoxField;
