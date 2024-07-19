import { Exclude, Expose } from 'class-transformer';
import { BaseEntity } from '../../config/base.entity';
import { ROLES } from '../../constants/roles';
import { Column, Entity, JoinColumn, JoinTable, OneToMany } from 'typeorm';
import { PaginateConfig } from 'nestjs-paginate';
import { Category } from 'src/categories/entities/category.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  @Expose()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;

  @OneToMany(() => Category, (category: Category) => category.user, {
    eager: true,
    cascade: true,
  })
  @JoinTable({ name: 'relationCategories' })
  categories: Category[];
}

export const USER_PAGINATE_CONFIG: PaginateConfig<User> = {
  sortableColumns: [
    'id',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'username',
    'email',
    'role',
  ],
  nullSort: 'last',
  defaultSortBy: [['id', 'DESC']],
  searchableColumns: [
    'id',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'username',
    'email',
    'role',
  ],
};
