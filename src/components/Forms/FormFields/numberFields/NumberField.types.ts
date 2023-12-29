export interface IntegerFieldProps {
  id: string;
  value: number;
  onChange: (newValue: number) => void;
  label?: string;
  helpText?: string;
}

export interface FloatFieldProps extends IntegerFieldProps { }
