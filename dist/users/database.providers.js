"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "khushboopal",
                password: "hello123456",
                database: "Nestjs_Crud",
                synchronize: true,
                entities: ["src/users.entity.ts", "dist/users.entity.ts"]
            });
            return dataSource.initialize();
        }
    }
];
//# sourceMappingURL=database.providers.js.map