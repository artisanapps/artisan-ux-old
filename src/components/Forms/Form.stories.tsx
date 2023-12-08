import {useState} from 'react';
import {TextFieldProps} from './FormFields/TextField.types';
import TextField from './FormFields/TextField';
import {FormProps} from './Form.types';
import Form from './Form';

const meta = {
  title: "ArtisanUX/Forms",
  argTypes: { }
};

export default meta;

const BasicTextField = () => {
  const [value, setValue] = useState<string>("");

  const textFieldProps: TextFieldProps = {
    id: "basic_text_field",
    value: value,
    onChange: setValue,
    label: "Basic Text Field"
  };

  return <TextField {...textFieldProps} />;
}

export const FormWithAllFields = () => {
  const formProps: FormProps = {
    sections: [
      {
        title: "Section 1",
        subtitle: "Additional information about this section",
        fields: [
          <BasicTextField />,
        ]
      }
    ]
  }

  return <Form {...formProps} />;
}
