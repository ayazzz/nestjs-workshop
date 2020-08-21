import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private service: TasksService) { }
    //TODO: get all tasks, create task, get task by id

    @Get('')
    async  getAllTasks() {
        return await this.service.getAllTasks();
    }

    @Get('/:id')
    async getTaskById(@Param('id') taskId: number) {
        return await this.service.getTaskById(taskId);
    }

    @Post('')
    createTask(@Body() data: CreateTaskDto) {
        return this.service.createTask(data);
    }
}
