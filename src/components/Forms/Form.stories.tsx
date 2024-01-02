import { useState } from "react";
import { TextFieldProps } from "./FormFields/TextFields/TextField.types";
import TextField from "./FormFields/TextFields/TextField";
import { FormProps } from "./Form.types";
import Form from "./Form";
import {
  MultiSelectFieldProps,
  SelectFieldOption,
  SingleSelectFieldProps,
} from "./FormFields/selectFields/SelectFields.types";
import SingleSelectField from "./FormFields/selectFields/SingleSelectField";
import MultiSelectField from "./FormFields/selectFields/MultiSelectField";
import { ArtisanUXProvider } from "../Provider";
import { IntegerFieldProps } from "./FormFields/numberFields/NumberField.types";
import IntegerField from "./FormFields/numberFields/IntegerField";
import FloatField from "./FormFields/numberFields/FloatField";
import {Dayjs} from 'dayjs';
import {DateFieldProps, DateRangeFieldProps, DateRangeValue} from './FormFields/dateFields/DateField.types';
import DateField from './FormFields/dateFields/DateField';
import DateRangeField from "./FormFields/dateFields/DateRangeField";
import * as moment from "moment";

const meta = {
  title: "ArtisanUX/Forms",
  argTypes: {},
};

export default meta;

const BasicTextField = () => {
  const [value, setValue] = useState<string>("");

  const textFieldProps: TextFieldProps = {
    id: "basic_text_field",
    value: value,
    onChange: setValue,
    label: "Basic Text Field",
  };

  return <TextField {...textFieldProps} />;
};

const BasicMultiLineField = () => {
  const [value, setValue] = useState<string>("");

  const textFieldProps: TextFieldProps = {
    id: "basic_multiline_field",
    value: value,
    onChange: setValue,
    label: "Basic Multiline Field",
    multiline: true,
  };

  return <TextField {...textFieldProps} />;
};

const BasicSingleSelectField = () => {
  const [value, setValue] = useState<string>(null);

  const options: Array<SelectFieldOption> = [
    {
      label: "Blue",
      key: "blue",
      groupName: "Blues",
    },
    {
      label: "Red",
      subText: "Hex: #FF0000",
      key: "red",
      groupName: "Reds",
    },
    {
      label: "Sky Blue",
      key: "sky_blue",
      groupName: "Blues",
    },
  ];

  const fieldProps: SingleSelectFieldProps = {
    options: options,
    currentValue: value,
    onChange: setValue,
    label: "Pick a color...",
    helpText: "This is the help text for a single select field",
  };

  return <SingleSelectField {...fieldProps} />;
};

const BasicMultiSelectField = () => {
  const [values, setValues] = useState<Array<string>>([]);

  const options: Array<SelectFieldOption> = [
    {
      label: "Blue",
      key: "blue",
      groupName: "Blues",
    },
    {
      label: "Red",
      key: "red",
      groupName: "Reds",
    },
    {
      label: "Sky Blue",
      key: "sky_blue",
    },
  ];

  const fieldProps: MultiSelectFieldProps = {
    options: options,
    currentValues: values,
    onChange: setValues,
    label: "Pick some colors...",
    helpText: "This is the help text for a multi select field",
  };

  return <MultiSelectField {...fieldProps} />;
};

const BasicIntegerField = () => {
  const [value, setValue] = useState<number>(null);

  const props: IntegerFieldProps = {
    id: "basic_integer_field",
    label: "Enter integer...",
    value: value,
    onChange: setValue,
  };

  return <IntegerField {...props} />;
};

const BasicFloatField = () => {
  const [value, setValue] = useState<number>(null);

  const props: IntegerFieldProps = {
    id: "basic_float_field",
    label: "Enter float...",
    value: value,
    onChange: setValue,
  };

  return <FloatField {...props} />;
};

const BasicDateField = () => {
  const [value, setValue] = useState<string>(null);

  const props: DateFieldProps = {
    id: "basic_date_field",
    label: "Enter a date...",
    value: value,
    onChange: setValue,
    helpText: Boolean(value) && moment(value).format('MMM D YYYY')
  };

  return <DateField {...props} />;
};

const BasicDateRangeField = () => {
  const [value, setValue] = useState<DateRangeValue>({ startDate: null, endDate: null });

  const props: DateRangeFieldProps = {
    id: "basic_date_field",
    value: value,
    onChange: setValue,
    labels: {
      startDateLabel: "Starting on...",
      endDateLabel: "Ending on..."
    },
    helpTexts: {
      startDateHelpText: value.startDate && moment(value.startDate).format('MMM D YYYY'),
      endDateHelpText: value.endDate && moment(value.endDate).format('MMM D YYYY')
    }
  };

  return <DateRangeField {...props} />;
}

export const ComprehensiveForm = () => {
  const formProps: FormProps = {
    sections: [
      {
        title: "Text Fields",
        subtitle: "Additional information about this section",
        fields: [<BasicTextField />, <BasicMultiLineField />],
      },
      {
        title: "Select Fields",
        subtitle: "This field contains our select fields",
        fields: [<BasicSingleSelectField />, <BasicMultiSelectField />],
      },
      {
        title: "Number Fields",
        fields: [<BasicIntegerField />, <BasicFloatField />],
      },
      {
        title: "Date Fields",
        fields: [<BasicDateField />, <BasicDateRangeField />]
      },
    ],
  };

  return (
    <ArtisanUXProvider primaryColor={{ main: "#9e2d0b" }}>
      <Form {...formProps} />
    </ArtisanUXProvider>
  );
};
