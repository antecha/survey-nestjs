import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.model';
import { CreateQuestionDto } from './dto/createQuestion.dto';

@Controller('questions')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  getAllQuestions(): Question[] {
    return this.questionService.getAllQuestions();
  }

  @Post()
  createQuestions(@Body() createQuestionDto: CreateQuestionDto): Question {
    return this.questionService.createQuestions(createQuestionDto);
  }
}
