// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-C  ·  Implement UsersService
// ─────────────────────────────────────────────────────────────────────────────
// Create an in-memory service following the same pattern as ProductsService.
//
// Requirements:
//   - Store users in a private array
//   - Pre-populate with at least 2 seed users
//   - Implement: findAll, findOne(id), create(dto), update(id, dto), remove(id)
//   - findOne must throw NotFoundException when user is not found
//
// Interface to use:
//   export interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
//     role: string;
//   }
// ─────────────────────────────────────────────────────────────────────────────

import { Injectable,  NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
      { id: 1, name: 'Ronaldo', email: 'ronaldo@gamil.com',age: 41, role: 'teacher' },
      { id: 2, name: 'Messi', email: 'messi@gamil.com',age: 37, role: 'student' },
    ];
    private nextId = 3;
  
    findAll(): User[] {
      return this.users;
    }
  
    findOne(id: number): User {
      const product = this.users.find((p) => p.id === id);
      if (!product) {
        throw new NotFoundException(`Product #${id} not found`);
      }
      return product;
    }
  
    create(dto: CreateUserDto): User {
      const user: User = {
        id: this.nextId++,
        name: dto.name,
        email: dto.email,
        age: dto.age,
        role: dto.role ?? '',
      };
      this.users.push(user);
      return user;
    }
  
    update(id: number, dto: UpdateUserDto): User {
      const user = this.findOne(id); // reuses findOne – throws if not found
      Object.assign(user, dto);
      return user;
    }
  
    remove(id: number): User {
      const product = this.findOne(id);
      this.users = this.users.filter((p) => p.id !== id);
      return product;
    }
}
