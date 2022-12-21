"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const users_entity_1 = require("./users.entity");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    jwt(user) {
        return this.jwtService.sign({ user });
    }
    async findAll() {
        return await this.usersRepository.findAll();
    }
    async create(data) {
        try {
            const user = new users_entity_1.UsersEntity();
            user.name = data.name;
            user.job = data.job;
            user.salary = data.salary;
            const userData = await user.save();
        }
        catch (error) {
        }
    }
    async delete(id) {
        const user = await this.usersRepository.findByPk(id);
        await user.destroy();
    }
    async update(id, data) {
        const edited = await this.usersRepository.findByPk(id);
        if (!edited) {
            throw new common_1.NotFoundException('not found');
        }
        edited.name = data.name || edited.name;
        edited.job = data.job || edited.job;
        edited.salary = data.salary || edited.salary;
        await edited.save();
        return edited;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_2.Inject)('USERS_REPOSITORY')),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map