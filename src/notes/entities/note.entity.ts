import { PaginateConfig } from 'nestjs-paginate';
import { Category } from 'src/categories/entities/category.entity';
import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Note extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category: Category) => category.notes)
  category: Category;
}

export const NOTE_PAGINATE_CONFIG: PaginateConfig<Note> = {
  sortableColumns: ['id', 'createdAt', 'updatedAt', 'deletedAt', 'title'],
  nullSort: 'last',
  defaultSortBy: [['id', 'DESC']],
  searchableColumns: ['id', 'createdAt', 'updatedAt', 'deletedAt', 'title'],
};
