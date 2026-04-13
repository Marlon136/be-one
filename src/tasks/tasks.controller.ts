// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 2-C  ·  Complete the Tasks controller
// ─────────────────────────────────────────────────────────────────────────────
// The service is already written for you. Your job is to wire up the routes.
//
// Endpoints to implement:
//   GET    /tasks          → return all tasks
//   GET    /tasks/:id      → return one task (use ParseIntPipe on :id)
//   POST   /tasks          → create a task, respond with 201
//   PATCH  /tasks/:id      → update a task
//   DELETE /tasks/:id      → delete a task
//
// Hint: look at products.controller.ts for the full pattern.
// ─────────────────────────────────────────────────────────────────────────────

import { Body, Controller } from '@nestjs/common';
import { Get, Post, Patch, Delete, Param, 
          ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common'; //Param, Body, etc.
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get() // GET /tasks
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id') // GET /tasks/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Post() //POST /tasks  
  @HttpCode(HttpStatus.CREATED) // (status 201)
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id') //PATCH /tasks/:id
  update( @Param('id', ParseIntPipe) id: number,
          @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id') //DELETE /tasks/:id
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.remove(id);
  }
}
