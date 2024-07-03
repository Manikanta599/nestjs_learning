import { CrudService } from 'src/crud_service/crud_service.service';
export declare class CrudControllerController {
    private crudservice;
    constructor(crudservice: CrudService);
    getUsers(): string;
    insertUser(name: string, age: number, email: string): {
        uid: import("../crud_model/model").UserModel[];
    };
    getAllUsers(): import("../crud_model/model").UserModel[];
    getUser(id: number): CrudService;
    updateUser(uid: number, name: string, age: number, email: string): any;
    deleteUser(id: number): void;
}
