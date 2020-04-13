import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionsService {
  private questions = [];

  getAllQuestions() {
    return this.questions;
  }
}
