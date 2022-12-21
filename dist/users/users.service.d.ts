import { UsersEntity } from './users.entity';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: typeof UsersEntity, jwtService: JwtService);
    jwt(user: any): string;
    findAll(): Promise<UsersEntity[]>;
    create(data: UsersEntity): Promise<void>;
    delete(id: string): Promise<void>;
    update(id: string, data: UsersEntity): Promise<UsersEntity>;
}
