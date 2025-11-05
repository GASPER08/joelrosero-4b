import { Injectable, Inject } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { Repository } from 'typeorm';
import { Categoria } from  './entities/categoria.entity'; 

@Injectable()
export class CategoriaService {
  constructor(
    @Inject('CATEGORIA_REPOSITORY')
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const nuevaCategoria = this.categoriaRepository.create(createCategoriaDto);
    return await this.categoriaRepository.save(nuevaCategoria);
  }

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }
}
