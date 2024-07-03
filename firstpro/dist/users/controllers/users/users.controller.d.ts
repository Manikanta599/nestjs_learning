import { Request, Response } from 'express';
import { createuserdto } from 'src/users/dtos/createuserdto';
import { UserService } from 'src/users/services/userservice/userservice.service.spec';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): {
        username: string;
        email: string;
    };
    fusers(): {
        username: string;
        email: string;
    }[];
    createUser(request: Request, response: Response): void;
    createUserdto(userData: createuserdto): createuserdto;
    getuserbyId(id: number): {
        id: number;
        username: string;
        email: string;
    };
}
