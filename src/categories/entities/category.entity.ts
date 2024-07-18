import { PaginateConfig } from 'nestjs-paginate';
import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @Column()
  title: string;

  @Column() //ONE TO MANY
  notes?: string;
}

export const CATEGORY_PAGINATE_CONFIG: PaginateConfig<Category> = {
  sortableColumns: ['id', 'createdAt', 'updatedAt', 'deletedAt', 'title'],
  nullSort: 'last',
  defaultSortBy: [['id', 'DESC']],
  searchableColumns: ['id', 'createdAt', 'updatedAt', 'deletedAt', 'title'],
};
