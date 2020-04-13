import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.model';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  getAllQuestions(): Question[] {
    return this.questionsService.getAllQuestions();
  }

  @Post()
  createQuestions(@Body('questions') questions: Question[]): Question[] {
    return this.questionsService.createQuestions(questions);
  }
}
