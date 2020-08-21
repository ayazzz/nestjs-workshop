import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/entities/tasks.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly repo: Repository<Task>
    ) { }

    async getAllTasks(): Promise<Task[]> {
        return await this.repo.find();
    }

    async getTaskById(id: number): Promise<Task> {
        return await this.repo.findOne({ id });
    }

    async createTask(data: CreateTaskDto): Promise<Task> {
        if (!data.date) {
            data.date = new Date();
        }

        return this.repo.save({
            description: data.desc,
            creation: data.date,
            id: new Date().getTime(),
            title: data.title
        })
    }
}
