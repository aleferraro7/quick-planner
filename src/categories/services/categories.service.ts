import { BaseService } from 'src/config/base.service';
import { Category } from '../entities/category.entity';
import { CategoriesRepository } from '../repository/categories.repository';
import { Injectable } from '@nestjs/common';
import { CategoryDTO } from '../dto/category.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class CategoriesService extends BaseService<Category> {
  constructor(private readonly categoriesRepository: CategoriesRepository) {
    super(categoriesRepository);
  }

  async createCategory(category: CategoryDTO, user: User) {
    const newCategory = await this.categoriesRepository.create({
      ...category,
      user: user,
    });
    await this.categoriesRepository.save(newCategory);
    return newCategory;
  }
}
