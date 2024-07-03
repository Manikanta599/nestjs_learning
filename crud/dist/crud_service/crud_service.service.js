"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const common_1 = require("@nestjs/common");
const model_1 = require("../crud_model/model");
let CrudService = class CrudService {
    constructor() {
        this.users = [];
    }
    insertUser(name, age, email) {
        const newUser = new model_1.UserModel(1, name, age, email);
        this.users.push(newUser);
        return this.users;
    }
    getUsers() {
        return [...this.users];
    }
    getUser(id) {
        return this.getUserById(id);
    }
    updateUser(uid, name, age, email) {
        const [targetUser, index] = this.getUserById(uid);
        if (targetUser) {
            const newUser = { ...targetUser, name, age, email };
            this.users[index] = newUser;
            return newUser;
        }
        else {
            throw new Error(`User with id ${uid} not found`);
        }
    }
    getUserById(id) {
        const index = this.users.findIndex((u) => u.id === id);
        if (index === -1) {
            return [null, -1];
        }
        return [this.users[index], index];
    }
    deleteUser(id) {
        const [target, index] = this.getUser(id);
        this.users.splice(index, 1);
    }
};
exports.CrudService = CrudService;
exports.CrudService = CrudService = __decorate([
    (0, common_1.Injectable)()
], CrudService);
//# sourceMappingURL=crud_service.service.js.map