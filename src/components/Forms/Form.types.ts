import { ReactElement } from "react";

export interface FormSectionProps {
  title?: string;
  subtitle?: string;
  fields: Array<ReactElement>;
}

export interface FormProps {
  sections: Array<FormSectionProps>;
}
