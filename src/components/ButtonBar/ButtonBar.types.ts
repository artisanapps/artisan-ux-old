export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ButtonBarProps {
  buttons: Array<ButtonProps>;
  disabled?: boolean;
  leftContent?: any;
  leftAlign?: boolean;
  endContent?: any;
  disableButtonStyling?: boolean;
}
