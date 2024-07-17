import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/config/base.service';
import { Note } from './entities/note.entity';
import { NotesRepository } from './notes.repository';

@Injectable()
export class NotesService extends BaseService<Note> {
  constructor(private readonly notesRepository: NotesRepository) {
    super(notesRepository);
  }
}
