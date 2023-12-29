export interface TextFieldProps {
  id: string;
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
  helpText?: string;
  multiline?: boolean;
}
