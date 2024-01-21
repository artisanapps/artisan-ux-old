import {ReactNode} from "react";

export interface RepeaterUnitFieldProps<T> {
  value: T;
  onValueChange: (updatedValue: T) => void;
}

interface RepeaterUnitField<T> {
  colspan: number;
  Component: (props: RepeaterUnitFieldProps<T>) => ReactNode
}

export interface RepeaterUnitProps<T> {
  index: number;
  value: T;
  validate: (index: number, value: T) => boolean;
  onChange: (index: number, value: T) => void;
  fields: Array<RepeaterUnitField<T>>;
}

export interface RepeaterProps<T> {
  values: Array<T>;
  blankValue: T;
  onValuesChange: (newValues: Array<T>) => void;
  onValidate: (index: number, value: T) => boolean;
  fields: Array<RepeaterUnitField<T>>;
}