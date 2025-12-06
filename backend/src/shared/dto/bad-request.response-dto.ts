import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class BadRequestResponseDto {
  @ApiProperty({
    example: ['Invalid input data', 'Missing required fields'],
    description: 'List of error messages describing the bad request',
  })
  @IsArray()
  message: string[];

  @ApiProperty({ example: 'Bad Request', description: 'Error type' })
  @IsString()
  error: string;

  @ApiProperty({ example: 400, description: 'HTTP status code' })
  @IsNumber()
  statusCode: number;
}
