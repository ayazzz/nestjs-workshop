import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';

interface TaskDto {
    name: string,
    description?: string
}

@Controller('')
export class TaskController {
    constructor(private service: TaskService) {
    }

    @Get('')
    async getTasks() {
        return await this.service.getTasks();
    }

    @Post('')
    async saveTask(@Body() data: TaskDto) {
        return await this.service.saveTask(data.name, data.description);
    }
}
