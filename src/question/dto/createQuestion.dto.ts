import { QuestionType, QuestionOption } from '../question.model';
import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  id: string;

  @IsNotEmpty()
  surveyID: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  type: QuestionType;

  options?: QuestionOption[];
}
