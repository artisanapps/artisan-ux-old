import {useState} from 'react';
import {TextFieldProps} from './FormFields/TextFields/TextField.types';
import TextField from './FormFields/TextFields/TextField';
import {FormProps} from './Form.types';
import Form from './Form';
import {
  MultiSelectFieldProps,
  SelectFieldOption,
  SingleSelectFieldProps
} from './FormFields/selectFields/SelectFields.types';
import SingleSelectField from './FormFields/selectFields/SingleSelectField';
import MultiSelectField from './FormFields/selectFields/MultiSelectField';
import {ArtisanUXProvider} from '../Provider';

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
      subText: "Hex: #FF0000",
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
    onChange: setValue,
    label: "Pick a color...",
    helpText: "This is the help text for a single select field"
  };

  return <SingleSelectField {...fieldProps} />;
};

const BasicMultiSelectField = () => {
  const [values, setValues] = useState<Array<string>>([]);

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

  const fieldProps: MultiSelectFieldProps = {
    options: options,
    currentValues: values,
    onChange: setValues,
    label: "Pick some colors...",
    helpText: "This is the help text for a multi select field"
  };

  return <MultiSelectField {...fieldProps} />;
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
          <BasicMultiSelectField />,
        ]
      }
    ]
  }

  return (
    <ArtisanUXProvider primaryColor={{main: "#9e2d0b"}} >
      <Form {...formProps} />
    </ArtisanUXProvider>
  )
}
