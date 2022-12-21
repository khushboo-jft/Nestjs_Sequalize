import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof UsersEntity, private jwtService:JwtService) { }
  
  jwt(user:any){
    return this.jwtService.sign({user})
  }
  async findAll() {
    return await this.usersRepository.findAll<UsersEntity>();
  }

  async create(data: UsersEntity) {
    try {
      const user = new UsersEntity();
      user.name = data.name;
      user.job = data.job;
      user.salary = data.salary;
      const userData = await user.save()
    } catch (error) {

    }

  }
  async delete(id: string) {
    const user = await this.usersRepository.findByPk<UsersEntity>(id);
    await user.destroy();

  }


  async update(id: string, data: UsersEntity) {
    const edited = await this.usersRepository.findByPk<UsersEntity>(id);
    if (!edited) {
      throw new NotFoundException('not found')
    }
    edited.name = data.name || edited.name;
    edited.job = data.job || edited.job;
    edited.salary = data.salary || edited.salary;
    await edited.save();
    return edited;

  }

}