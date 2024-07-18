import { BaseService } from 'src/config/base.service';
import { Category } from '../entities/category.entity';
import { CategoriesRepository } from '../repository/categories.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService extends BaseService<Category> {
  constructor(private readonly categoriesRepository: CategoriesRepository) {
    super(categoriesRepository);
  }
}
