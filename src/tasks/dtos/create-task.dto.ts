import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  ValidateNested,
} from 'class-validator';

class TaskMetadataDto {
  @IsNumber()
  @IsPositive()
  eventId: number;
}
export class CreateTaskDto {
  @IsNumber()
  @IsPositive()
  userId: number;

  runAt: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => TaskMetadataDto)
  metadata?: {
    eventId: number;
  };
}
