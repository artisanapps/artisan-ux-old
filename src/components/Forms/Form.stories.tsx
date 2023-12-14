import {useState} from 'react';
import {TextFieldProps} from './FormFields/TextFields/TextField.types';
import TextField from './FormFields/TextFields/TextField';
import {FormProps} from './Form.types';
import Form from './Form';
import {SelectFieldOption, SingleSelectFieldProps} from './FormFields/selectFields/SelectFields.types';
import SingleSelectField from './FormFields/selectFields/SingleSelectField';

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

const BasicMultiLineField = () => {
  const [value, setValue] = useState<string>("");

  const textFieldProps: TextFieldProps = {
    id: "basic_multiline_field",
    value: value,
    onChange: setValue,
    label: "Basic Multiline Field",
    multiline: true
  };

  return <TextField {...textFieldProps} />;
}

const BasicSingleSelectField = () => {
  const [value, setValue] = useState<string>(null);

  const options: Array<SelectFieldOption> = [
    {
      label: "Red",
      key: "red"
    },
    {
      label: "Blue",
      key: "blue"
    },
    {
      label: "Sky Blue",
      key: "sky_blue"
    }
  ];

  const fieldProps: SingleSelectFieldProps = {
    options: options,
    currentValue: value,
    onChange: setValue
  };

  return <SingleSelectField {...fieldProps} />;
};

export const ComprehensiveForm = () => {
  const formProps: FormProps = {
    sections: [
      {
        title: "Section 1",
        subtitle: "Additional information about this section",
        fields: [
          <BasicTextField />,
          <BasicMultiLineField />,
        ]
      },
      {
        title: "Section 2",
        subtitle: "This field contains our select fields",
        fields: [
          <BasicSingleSelectField />,
        ]
      }
    ]
  }

  return <Form {...formProps} />;
}
