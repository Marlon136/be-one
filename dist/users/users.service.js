"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { id: 1, name: 'Ronaldo', email: 'ronaldo@gamil.com', age: 41, role: 'teacher' },
            { id: 2, name: 'Messi', email: 'messi@gamil.com', age: 37, role: 'student' },
        ];
        this.nextId = 3;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        const product = this.users.find((p) => p.id === id);
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return product;
    }
    create(dto) {
        const user = {
            id: this.nextId++,
            name: dto.name,
            email: dto.email,
            age: dto.age,
            role: dto.role ?? '',
        };
        this.users.push(user);
        return user;
    }
    update(id, dto) {
        const user = this.findOne(id);
        Object.assign(user, dto);
        return user;
    }
    remove(id) {
        const product = this.findOne(id);
        this.users = this.users.filter((p) => p.id !== id);
        return product;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map