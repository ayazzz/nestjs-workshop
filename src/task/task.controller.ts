import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('')
export class TaskController {
    constructor(private service: TaskService) {
    }

    @Get('')
    async getTasks() {
        return await this.service.getTasks();
    }

    @Post('')
    async saveTask(@Body() data: CreateTaskDto) {
        return await this.service.saveTask(data.title, data.description);
    }
}
