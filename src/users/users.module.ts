import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
import { DatabaseModule } from 'src/providers/database.module';
import { usersProviders } from './users.providers';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule, JwtModule.register({
    secret:"key"
  })],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
})
export class UsersModule {}