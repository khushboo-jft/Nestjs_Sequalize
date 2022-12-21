"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("@nestjs/common");
const users_controller_1 = require("./users/users.controller");
const users_middleware_1 = require("./users/users.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(users_middleware_1.LoggerMiddleware)
            .exclude({ path: '/users/token', method: common_2.RequestMethod.POST })
            .forRoutes(users_controller_1.UsersController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule, jwt_1.JwtModule.register({
                secret: 'key'
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map