import { CreateUserType } from 'src/users/utils/types';
export declare class UserService {
    private users;
    fetchusers(): {
        username: string;
        email: string;
    }[];
    createUser(userDetails: CreateUserType): void;
    fetchUserById(id: number): {
        id: number;
        username: string;
        email: string;
    };
}
