import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Delete,
  Param,
  Patch,
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

  @Patch('/:id/title')
  updateQuestionTitle(
    @Param('id') id: string,
    @Body('title') title: string,
  ): Question {
    return this.questionService.updateQuestionTitle(id, title);
  }
}
