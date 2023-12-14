export type SelectFieldOptionKey = string;

export interface SelectFieldOption {
  label: string;
  key: SelectFieldOptionKey;
  data?: any;
}

interface SharedProps {
  options: Array<SelectFieldOption>;
  label?: string;
  helpText?: string;
}

export interface SingleSelectFieldProps extends SharedProps {
  currentValue: SelectFieldOptionKey;
  onChange: (newValue: SelectFieldOptionKey, data?: any) => void;
}

export interface MultiSelectFieldProps extends SharedProps {
  currentValues: Array<SelectFieldOptionKey>;
  onChange: (newValues: Array<SelectFieldOptionKey>, data?: Array<any>) => void;
}
