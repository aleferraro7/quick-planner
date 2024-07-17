import { Injectable } from '@nestjs/common';
import { BaseAbstractRepository } from 'src/config/base.abstract.repository';
import { Note, NOTE_PAGINATE_CONFIG } from './entities/note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotesRepository extends BaseAbstractRepository<Note> {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
  ) {
    super(notesRepository, NOTE_PAGINATE_CONFIG);
  }
}
