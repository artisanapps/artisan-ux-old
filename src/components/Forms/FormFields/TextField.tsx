import {TextFieldProps} from './TextField.types';
import {TextField as MUITextField} from '@mui/material/TextField'
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
    />
  )
}

export default TextField;
