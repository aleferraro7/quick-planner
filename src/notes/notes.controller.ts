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
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RolesAccess } from 'src/auth/decorators/roles.decorator';
import { ROLES } from 'src/constants/roles';
import { NoteDTO, UpdateNoteDTO } from './dto/note.dto';
import {
  ApiOkPaginatedResponse,
  ApiPaginationQuery,
  Paginate,
  PaginateQuery,
} from 'nestjs-paginate';
import { Note, NOTE_PAGINATE_CONFIG } from './entities/note.entity';

// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard, RolesGuard)
// @RolesAccess(ROLES.USER)
@ApiTags('Notes')
@Controller('notes')
export class NotesController {
  constructor(
    private readonly notesService: NotesService,
    private readonly logger: Logger,
  ) {}

  @Post()
  async create(@Body() noteDTO: NoteDTO) {
    return await this.notesService.create(noteDTO);
  }

  @Get()
  @ApiOkPaginatedResponse(Note, NOTE_PAGINATE_CONFIG)
  @ApiPaginationQuery(NOTE_PAGINATE_CONFIG)
  async findAll(@Paginate() query: PaginateQuery) {
    return await this.notesService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.notesService.findOneById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateNoteDTO: UpdateNoteDTO) {
    return await this.notesService.update(id, updateNoteDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.notesService.deleteById(id);
  }
}
