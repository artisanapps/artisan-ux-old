import React from "react";
import {
  AutocompleteRenderInputParams,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { SelectFieldOption } from "./SelectFields.types";

const renderSelectFieldInput = (
  params: AutocompleteRenderInputParams,
  additionalParams?: TextFieldProps
) => {
  return (
    <TextField
      {...params}
      {...additionalParams}
      variant={"standard"}
      color={"primary"}
      fullWidth={true}
    />
  );
};

interface OptionProcessingResults {
  options: Array<SelectFieldOption>;
  groups: Array<string>;
}

const preProcessOptions = (
  options: Array<SelectFieldOption>
): OptionProcessingResults => {
  const groupedOptions = options.filter((option) => Boolean(option.groupName));

  const groups = [...new Set(groupedOptions.map((option) => option.groupName))];

  let processedOptions: Array<SelectFieldOption> = [];

  if (groups.length > 1) {
    groups.forEach((group) => {
      const groupOptions = groupedOptions.filter(
        (option) => option.groupName === group
      );
      processedOptions.push(...groupOptions);
    });

    const unGroupedOptions = options.filter(
      (option) => !Boolean(option.groupName)
    );
    processedOptions.push(...unGroupedOptions);
  } else {
    processedOptions = options;
  }

  return {
    options: processedOptions,
    groups: groups,
  };
};

const getGroupNameFromOption = (option: SelectFieldOption): string => {
  return Boolean(option.groupName) ? `${option.groupName}` : "Ungrouped";
};

export { renderSelectFieldInput, preProcessOptions, getGroupNameFromOption };
