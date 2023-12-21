import React from "react";
import { FormProps, FormSectionProps } from "./Form.types";
import Grid from "@mui/material/Unstable_Grid2";
import { DialogContentText, Typography } from "@mui/material";

const Form = (props: FormProps) => {
  const { sections } = props;

  return (
    <Grid container spacing={6}>
      {sections.map((section) => (
        <Grid item xs={12}>
          <FormSection {...section} />
        </Grid>
      ))}
    </Grid>
  );
};

const FormSection = (props: FormSectionProps) => {
  const { title, subtitle, fields } = props;

  return (
    <Grid container spacing={2}>
      {Boolean(title) && (
        <Grid item xs={12}>
          <Typography variant={"h6"}>{title}</Typography>

          {Boolean(subtitle) && (
            <DialogContentText>{subtitle}</DialogContentText>
          )}
        </Grid>
      )}

      {fields.map((field) => (
        <Grid item xs={12}>
          {field}
        </Grid>
      ))}
    </Grid>
  );
};

export default Form;
