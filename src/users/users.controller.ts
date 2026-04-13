import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// @Controller sets the base path for all routes in this class
@Controller('users')
export class UsersController {
  // NestJS injects the service automatically via the constructor
  constructor(private readonly usersService: UsersService) {}

  // GET /users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // GET /users/:id
  // ParseIntPipe converts the string param to a number and throws 400 if invalid
  @Get(':id') 
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // POST /users
  // @Body() extracts the request body; ValidationPipe validates it against CreateProductDto
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // PATCH /users/:id 
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // DELETE /users/:id
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
