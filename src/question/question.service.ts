import { Injectable } from '@nestjs/common';
import { Question } from './question.model';
import * as uuid from 'uuid/v1';
import { CreateQuestionDto } from './dto/createQuestion.dto';

@Injectable()
export class QuestionService {
  private questions: Question[] = [];

  getAllQuestions(query?: { survey_id: string }): Question[] {
    if (query.survey_id) {
      return this.questions.filter(
        question => question.surveyID === query.survey_id,
      );
    }
    return this.questions;
  }

  createQuestion(createQuestionDto: CreateQuestionDto): Question {
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

  deleteQuestion(id: string): void {
    this.questions = this.questions.filter(question => question.id !== id);
  }
}
