import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  // ejemplo de método adicional
  @Post()
  create(@Body() data: any) {
    return this.categoriaService.create(data);
  }
}
