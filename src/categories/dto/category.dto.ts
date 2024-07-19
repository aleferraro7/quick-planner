import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Note } from 'src/notes/entities/note.entity';
import { User } from 'src/users/entities/user.entity';

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
    description: 'Notes of the category',
    required: true,
    example: [
      {
        id: 1,
        title: 'Note 1',
        description: 'description Note 1',
      },
    ],
  })
  notes: Note[];

  @ApiProperty({
    description: 'User',
    required: true,
  })
  user: User;
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
    description: 'Notes of the category',
    required: true,
    example: [
      {
        id: 1,
        title: 'Note 1',
        description: 'description Note 1',
      },
    ],
  })
  notes: Note[];

  @ApiProperty({
    description: 'User',
    required: true,
  })
  user: User;
}

export class UpdateCategoryDTO extends PartialType(CategoryDTO) {}
