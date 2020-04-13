import { Injectable } from '@nestjs/common';
import { Question, QuestionType, QuestionOption } from './question.model';
import * as uuid from 'uuid/v1';
@Injectable()
export class QuestionsService {
  private questions: Question[] = [];

  getAllQuestions(): Question[] {
    return this.questions;
  }

  createQuestions(questions: Question[]): Question[] {
    const newQuestions: Question[] = questions.map(question => ({
      ...question,
      id: uuid(),
      surveyID: 'testSurvey',
    }));

    newQuestions.forEach(question => this.questions.push(question));
    return newQuestions;
  }
}
