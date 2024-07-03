import { UserModel } from 'src/crud_model/model';
export declare class CrudService {
    private users;
    insertUser(name: string, age: number, email: string): UserModel[];
    getUsers(): UserModel[];
    getUser(id: number): [any, number];
    updateUser(uid: number, name: string, age: number, email: string): any;
    private getUserById;
    deleteUser(id: number): void;
}
