import { PaginateConfig } from 'nestjs-paginate';
import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Note extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column() //MANY TO ONE
  section?: string;
}

export const NOTE_PAGINATE_CONFIG: PaginateConfig<Note> = {
  sortableColumns: [
    'id',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'title',
    'section',
  ],
  nullSort: 'last',
  defaultSortBy: [['id', 'DESC']],
  searchableColumns: [
    'id',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'title',
    'section',
  ],
};
