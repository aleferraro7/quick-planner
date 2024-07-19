import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Logger,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RolesAccess } from 'src/auth/decorators/roles.decorator';
import { ROLES } from 'src/constants/roles';
import {
  ApiOkPaginatedResponse,
  ApiPaginationQuery,
  Paginate,
  PaginateQuery,
} from 'nestjs-paginate';
import { CategoriesService } from '../services/categories.service';
import { CategoryDTO, UpdateCategoryDTO } from '../dto/category.dto';
import {
  Category,
  CATEGORY_PAGINATE_CONFIG,
} from '../entities/category.entity';

// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard, RolesGuard)
// @RolesAccess(ROLES.USER)
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly logger: Logger,
  ) {}

  @Post()
  async create(@Body() categoryDTO: CategoryDTO, @Req() req) {
    return await this.categoriesService.createCategory(categoryDTO, req);
  }
  // @Post()
  // async create(@Body() categoryDTO: CategoryDTO) {
  //   return await this.categoriesService.create(categoryDTO);
  // }

  @Get()
  @ApiOkPaginatedResponse(Category, CATEGORY_PAGINATE_CONFIG)
  @ApiPaginationQuery(CATEGORY_PAGINATE_CONFIG)
  async findAll(@Paginate() query: PaginateQuery) {
    return await this.categoriesService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.categoriesService.findOneById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCategoryDTO: UpdateCategoryDTO,
  ) {
    return await this.categoriesService.update(id, updateCategoryDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.categoriesService.deleteById(id);
  }
}
