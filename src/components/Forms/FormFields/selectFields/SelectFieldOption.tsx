import { SelectFieldOption } from "./SelectFields.types";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

const renderSelectFieldOption = (props: any, option: SelectFieldOption) => {
  return (
    <Box component={"li"} {...props}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant={"body1"}>{option.label}</Typography>
        </Grid>

        {Boolean(option.subText) && (
          <Grid item xs={12}>
            <Typography variant={"subtitle2"} style={{ color: "#999" }}>
              {option.subText}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default renderSelectFieldOption;
