import {Box, createTheme, PaletteColorOptions, ThemeProvider, Typography} from "@mui/material";
import React from "react";
import {SelectFieldOption} from '../Forms/FormFields/selectFields/SelectFields.types';
import Grid from '@mui/material/Unstable_Grid2';

const ArtisanUXProvider = (props: {
  primaryColor: PaletteColorOptions,
  children?: any
}) => {
  const theme = createTheme({
    palette: {
      primary: props.primaryColor,
      background: {
        default: "#F5F5F6"
      },
    },
    components: {
      MuiAutocomplete: {
        defaultProps: {
          renderOption: (props, option: SelectFieldOption, state, ownerState) => {
            return (
              <Box component={"li"} {...props} >
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography variant={"body1"}>
                      { option.label }
                    </Typography>
                  </Grid>

                  {
                    Boolean(option.subText) && (
                      <Grid item xs={12}>
                        <Typography variant={"subtitle2"} style={{ color: "#999" }}>
                          { option.subText }
                        </Typography>
                      </Grid>
                    )
                  }
                </Grid>
              </Box>
            )
          },
          getOptionKey: (option: SelectFieldOption) => option.key,
          isOptionEqualToValue: (option: SelectFieldOption, value: SelectFieldOption) => option.key === value.key,
          size: "small",
          filterSelectedOptions: true
        }
      }
    }
  })

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default ArtisanUXProvider;
