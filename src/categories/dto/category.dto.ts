import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CategoryDTO {
  @ApiProperty({
    description: 'Title of the category',
    example: 'Category 1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @ApiProperty({
    description: 'description of the category',
    example: 'Notes 1',
    required: true,
  })
  @IsString()
  @IsOptional()
  notes?: string;
}

export class CreateCategoryDTO {
  @ApiProperty({
    description: 'Title of the category',
    example: 'Category 1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @ApiProperty({
    description: 'description of the category',
    example: 'Notes 1',
    required: true,
  })
  @IsString()
  @IsOptional()
  notes?: string;
}

export class UpdateCategoryDTO extends PartialType(CategoryDTO) {}
