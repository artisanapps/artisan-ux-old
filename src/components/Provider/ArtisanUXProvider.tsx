import {
  createFilterOptions,
  createTheme,
  PaletteColorOptions,
  ThemeProvider
} from "@mui/material";
import React from "react";
import { SelectFieldOption } from "../Forms/FormFields/selectFields/SelectFields.types";
import renderSelectFieldOption from "../Forms/FormFields/selectFields/SelectFieldOption";

const ArtisanUXProvider = (props: {
  primaryColor: PaletteColorOptions;
  children?: any;
}) => {
  const theme = createTheme({
    palette: {
      primary: props.primaryColor,
      background: {
        default: "#F5F5F6",
      },
    },
    components: {
      MuiAutocomplete: {
        defaultProps: {
          renderOption: renderSelectFieldOption,
          getOptionKey: (option: SelectFieldOption) => option.key,
          isOptionEqualToValue: (
            option: SelectFieldOption,
            value: SelectFieldOption
          ) => option.key === value.key,
          size: "small",
          filterSelectedOptions: true,
          filterOptions: createFilterOptions({
            stringify: (value: SelectFieldOption) =>
              `${value.label} ${value.subText}`,
          }),
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ArtisanUXProvider;
