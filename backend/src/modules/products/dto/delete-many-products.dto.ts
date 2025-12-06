import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsUUID } from 'class-validator';

export class DeleteManyProductBodyDto {
  @ApiProperty({
    type: [String],
    description: 'Array of product IDs to delete',
    example: [crypto.randomUUID(), crypto.randomUUID(), crypto.randomUUID()],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  ids: string[];
}
