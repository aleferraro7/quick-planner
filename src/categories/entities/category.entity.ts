import { PaginateConfig } from 'nestjs-paginate';
import { BaseEntity } from 'src/config/base.entity';
import { Note } from 'src/notes/entities/note.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @Column()
  title: string;

  @ManyToOne(() => User, (user: User) => user.categories)
  @JoinColumn()
  user: User;

  @OneToMany(() => Note, (note: Note) => note.category, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  notes: Note[];
}

export const CATEGORY_PAGINATE_CONFIG: PaginateConfig<Category> = {
  sortableColumns: ['id', 'createdAt', 'updatedAt', 'deletedAt', 'title'],
  nullSort: 'last',
  defaultSortBy: [['id', 'DESC']],
  searchableColumns: ['id', 'createdAt', 'updatedAt', 'deletedAt', 'title'],
};
