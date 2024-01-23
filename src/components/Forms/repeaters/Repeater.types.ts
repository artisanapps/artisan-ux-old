import {ReactNode} from "react";

export interface RepeaterUnitFieldProps<T> {
  value: T;
  onValueChange: (updatedValue: T) => void;
}

interface RepeaterUnitField<T> {
  fieldName: string;
  colspan: number;
  Component: (props: RepeaterUnitFieldProps<T>) => ReactNode
}

export interface RepeaterUnitProps<T> {
  index: number;
  value: T;
  onChange: (index: number, value: T) => void;
  fields: Array<RepeaterUnitField<T>>;
}

export interface RepeaterProps<T> {
  id: string;
  values: Array<T>;
  blankValue: T;
  onValuesChange: (newValues: Array<T>) => void;
  fields: Array<RepeaterUnitField<T>>;
}