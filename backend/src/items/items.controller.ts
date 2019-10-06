import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, UseGuards } from '@nestjs/common';

@Controller('items')
export class ItemsController {

  @Get()
  async findAll(): Promise<any> {
    return []
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(): Promise<any> {
    return []
  }
}
