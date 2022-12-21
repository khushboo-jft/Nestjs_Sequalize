"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_entity_1 = require("../users/users.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'khushboopal',
                password: 'hello123456',
                database: 'Nestjs_Crud',
            });
            sequelize.addModels([users_entity_1.UsersEntity]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map