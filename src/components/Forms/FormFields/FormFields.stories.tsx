import TextField from './TextField';
import {useState} from 'react';
import {TextFieldProps} from './TextField.types';

const meta = {
  title: "ArtisanUX/FormFields",
  argTypes: { }
};

export default meta;

export const BasicTextField = () => {
  const [value, setValue] = useState<string>("");

  const textFieldProps: TextFieldProps = {
    id: "basic_text_field",
    value: value,
    onChange: setValue
  };

  return <TextField {...textFieldProps} />;
}
