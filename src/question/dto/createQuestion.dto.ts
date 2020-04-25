import { Question, QuestionType, QuestionOption } from '../question.model';

export class CreateQuestionDto {
  id: string;
  surveyID: string;
  title: string;
  type: QuestionType;
  options?: QuestionOption[];
}
