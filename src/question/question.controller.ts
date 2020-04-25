import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.model';
import { CreateQuestionDto } from './dto/createQuestion.dto';

@Controller('questions')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  getAllQuestions(@Query() query): Question[] {
    return this.questionService.getAllQuestions(query);
  }

  @Post()
  createQuestions(@Body() createQuestionDto: CreateQuestionDto): Question {
    return this.questionService.createQuestion(createQuestionDto);
  }

  @Delete('/:id')
  deleteQuestion(@Param('id') id: string): void {
    this.questionService.deleteQuestion(id);
  }
}
