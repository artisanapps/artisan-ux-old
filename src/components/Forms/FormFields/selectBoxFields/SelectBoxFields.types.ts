import {SelectFieldOption} from "../selectFields/SelectFields.types";

interface SelectBoxFieldProps {
  id: string;
  options: Array<SelectFieldOption>;
  maxColumns?: number;
  label?: string;
  helpText?: string;
}

export interface SingleSelectBoxFieldProps extends SelectBoxFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export interface MultiSelectBoxFieldProps extends SelectBoxFieldProps {
  values: Array<string>;
  onChange: (values: Array<string>) => void;
}