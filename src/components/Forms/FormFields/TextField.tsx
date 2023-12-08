import {TextFieldProps} from './TextField.types';
import {default as MUITextField} from '@mui/material/TextField'
import {TextFieldChangeEvent} from './FormFields.types';

const TextField = (props: TextFieldProps) => {
  const {
    id,
    value,
    onChange,
    label
  } = props;

  const onValueChange = (event: TextFieldChangeEvent) => {
    onChange(event.target.value);
  }

  return (
    <MUITextField
      id={id}
      label={label}
      variant={"standard"}
      color={"primary"}
      value={value}
      onChange={onValueChange}
      fullWidth={true}
    />
  )
}

export default TextField;
