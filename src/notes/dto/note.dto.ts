import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class NoteDTO {
  @ApiProperty({
    description: 'Title of the note',
    example: 'Note 1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @ApiProperty({
    description: 'description of the note',
    example: 'description Note 1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

  @ApiProperty({
    description: 'description of the note',
    example: 'section Note 1',
    required: true,
  })
  @IsString()
  section: string;
}

export class CreateNoteDTO {
  @ApiProperty({
    description: 'Title of the note',
    example: 'Note 1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @ApiProperty({
    description: 'description of the note',
    example: 'description Note 1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

  @ApiProperty({
    description: 'description of the note',
    example: 'section Note 1',
    required: true,
  })
  @IsString()
  section: string;
}

export class UpdateNoteDTO extends PartialType(NoteDTO) {}
