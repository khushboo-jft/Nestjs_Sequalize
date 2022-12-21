import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Param,
  Request
} from '@nestjs/common';
// import { Request } from 'express';
import { UsersService } from './users.service';
import { ParseIntPipe } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { request } from 'http';


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }
  @Post('token')
  jwt(@Body ('user')user:string){
    return this.usersService.jwt(user)
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Post()
  async create(@Body() data: UsersEntity) {
    return this.usersService.create(data);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data:UsersEntity){
    await this.usersService.update(id, data);
    return 'User updated successfully'
  }
  @Delete(':id')
  async remove(@Param('id') id: string){
    return await this.usersService.delete(id)
    
  }
}