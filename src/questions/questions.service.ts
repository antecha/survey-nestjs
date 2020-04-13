import { Injectable } from '@nestjs/common';
import { Question } from './question.model';
@Injectable()
export class QuestionsService {
  private questions: Question[] = [];

  getAllQuestions(): Question[] {
    return this.questions;
  }
}
