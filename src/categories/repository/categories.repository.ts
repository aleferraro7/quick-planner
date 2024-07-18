import { BaseAbstractRepository } from 'src/config/base.abstract.repository';
import {
  Category,
  CATEGORY_PAGINATE_CONFIG,
} from '../entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesRepository extends BaseAbstractRepository<Category> {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {
    super(categoriesRepository, CATEGORY_PAGINATE_CONFIG);
  }
}
