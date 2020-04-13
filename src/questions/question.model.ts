export interface Question {
  id: string;
  surveyID: string;
  title: string;
  type: QuestionType;
  options?: QuestionOption[];
}

export enum QuestionType {
  radio = 'radio',
  input = 'input',
  range = 'range',
  datePicker = 'datePicker',
  selectMultiple = 'selectMultiple',
  switch = 'switch',
}

export interface QuestionOption {
  value: string;
  label: string;
}
