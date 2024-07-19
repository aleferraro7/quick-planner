import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';
import { ROLES } from 'src/constants/roles';

export class UserDTO {
  @ApiProperty({
    description: 'Username',
    example: 'John23',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'User mail',
    example: 'johndoe@mail.com',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({
    description: 'User role',
    example: 'USER',
    required: true,
  })
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES;

  @ApiProperty({
    description: 'Categories of the user',
    example: [
      {
        id: 5,
        createdAt: '2024-07-19T13:16:03.383Z',
        updatedAt: '2024-07-19T13:16:03.553Z',
        deletedAt: null,
        title: 'Category 4',
      },
    ],
    required: true,
  })
  categories: Category[];
}

export class CreateUserDTO {
  @ApiProperty({
    description: 'Username',
    example: 'John23',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'User mail',
    example: 'johndoe@mail.com',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({
    description: 'User role',
    example: 'USER',
    required: true,
  })
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES;

  @ApiProperty({
    description: 'Categories of the user',
    example: [
      {
        id: 5,
        createdAt: '2024-07-19T13:16:03.383Z',
        updatedAt: '2024-07-19T13:16:03.553Z',
        deletedAt: null,
        title: 'Category 4',
      },
    ],
    required: true,
  })
  categories: Category[];
}

export class UpdateUserDTO extends PartialType(UserDTO) {}
