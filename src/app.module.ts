import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {ConfigModule} from  '@nestjs/config'
import {JwtModule} from '@nestjs/jwt'
import { NestModule,MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { LoggerMiddleware } from './users/users.middleware';

@Module({
  imports: [
     UsersModule,JwtModule.register({
          secret:'key'
        })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
     .apply(LoggerMiddleware)
     .exclude({path: '/users/token' , method:RequestMethod.POST})
     .forRoutes(UsersController)
  }
}
