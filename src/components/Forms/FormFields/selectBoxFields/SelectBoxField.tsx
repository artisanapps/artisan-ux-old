import React from "react";
import {MultiSelectBoxFieldProps, SingleSelectBoxFieldProps} from "./SelectBoxFields.types";

const SelectBoxField = (props: SingleSelectBoxFieldProps | MultiSelectBoxFieldProps) => {

  const {
    id,
    variant,
    options,
    label  ,
      helpText,
      onChange
  } = props;


}

export default SelectBoxField;