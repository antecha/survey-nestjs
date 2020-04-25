export enum QuestionType {
  radio = 'radio',
  text = 'text',
  range = 'range',
  date = 'date',
  select = 'select',
  switch = 'switch',
}

export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  surveyID: string;
  title: string;
  type: QuestionType;
  options?: QuestionOption[];
}
