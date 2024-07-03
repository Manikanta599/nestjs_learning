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
exports.CrudControllerController = void 0;
const common_1 = require("@nestjs/common");
const crud_service_service_1 = require("../crud_service/crud_service.service");
let CrudControllerController = class CrudControllerController {
    constructor(crudservice) {
        this.crudservice = crudservice;
    }
    getUsers() {
        return 'users';
    }
    insertUser(name, age, email) {
        const id = this.crudservice.insertUser(name, age, email);
        return {
            uid: id,
        };
    }
    getAllUsers() {
        return this.crudservice.getUsers();
    }
    getUser(id) {
        return this.crudservice;
    }
    updateUser(uid, name, age, email) {
        return this.crudservice.updateUser(uid, name, age, email);
    }
    deleteUser(id) {
        this.crudservice.deleteUser(id);
    }
};
exports.CrudControllerController = CrudControllerController;
__decorate([
    (0, common_1.Get)('get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrudControllerController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('post'),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('age')),
    __param(2, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", void 0)
], CrudControllerController.prototype, "insertUser", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrudControllerController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CrudControllerController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)(':uid'),
    __param(0, (0, common_1.Param)('uid', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('age')),
    __param(3, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, String]),
    __metadata("design:returntype", void 0)
], CrudControllerController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CrudControllerController.prototype, "deleteUser", null);
exports.CrudControllerController = CrudControllerController = __decorate([
    (0, common_1.Controller)('crud'),
    __metadata("design:paramtypes", [crud_service_service_1.CrudService])
], CrudControllerController);
//# sourceMappingURL=crud_controller.controller.js.map