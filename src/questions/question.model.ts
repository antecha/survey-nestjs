export interface Question {
  id: string;
  survey_id: string[];
  title: string;
  type: QuestionType;
  options?: { value: string; label: string }[];
}

export enum QuestionType {
  radio = 'radio',
  input = 'input',
  range = 'range',
  datePicker = 'datePicker',
  selectMultiple = 'selectMultiple',
  switch = 'switch',
}
