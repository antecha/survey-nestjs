import { Injectable } from '@nestjs/common';
import { Question } from './question.model';
import * as uuid from 'uuid/v1';
import { CreateQuestionDto } from './dto/createQuestion.dto';

@Injectable()
export class QuestionService {
  private questions: Question[] = [];

  getAllQuestions(): Question[] {
    return this.questions;
  }

  createQuestions(createQuestionDto: CreateQuestionDto): Question {
    const { title, type, surveyID } = createQuestionDto;

    const newQuestion: Question = {
      id: uuid(),
      surveyID,
      title,
      type,
    };

    this.questions.push(newQuestion);

    return newQuestion;
  }
}
