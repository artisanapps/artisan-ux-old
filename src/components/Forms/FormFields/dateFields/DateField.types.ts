export interface DateFieldProps {
  id: string;
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
  helpText?: string;
}

export interface DateRangeValue {
  startDate: string;
  endDate: string;
}

export interface DateRangeFieldProps {
  id: string;
  value: DateRangeValue,
  onChange: (newDateRange: DateRangeValue) => void;
  autoAdjustInvalidDates?: boolean;
  labels?: { startDateLabel: string, endDateLabel: string },
  helpTexts?: { startDateHelpText: string, endDateHelpText: string }
}
