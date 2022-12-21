import { Sequelize } from 'sequelize-typescript';
import { UsersEntity } from 'src/users/users.entity'; 

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'khushboopal',
        password: 'hello123456',
        database: 'Nestjs_Crud',
      });
      sequelize.addModels([UsersEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];