import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { QuestionType, QuestionOption } from './question.model';

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  surveyID: string;

  @Column()
  title: string;

  @Column()
  type: QuestionType;

  @Column("text",{array:true})
  options: QuestionOption[];
}
