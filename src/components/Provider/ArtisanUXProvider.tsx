import {createTheme, PaletteColorOptions, ThemeProvider } from "@mui/material";
import React from "react";

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
  })

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default ArtisanUXProvider;
