import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    jwt(user: string): string;
    findAll(): Promise<UsersEntity[]>;
    create(data: UsersEntity): Promise<void>;
    update(id: string, data: UsersEntity): Promise<string>;
    remove(id: string): Promise<void>;
}
