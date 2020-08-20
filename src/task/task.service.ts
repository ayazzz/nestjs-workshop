import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/tasks.entity';

@Injectable()
export class TaskService {
    private logger: Logger;

    constructor(@InjectRepository(Task) private service: Repository<Task>) {
        this.logger = new Logger('TaskService');
    }

    async getTasks() {
        return await this.service.find({});
    }

    async saveTask(name: string, desc?: string) {
        const obj = {
            id: new Date().getTime(),
            title: name,
            description: desc || 'desc for ' + name,
            creation: new Date()
        };
        const saved = await this.service.save(obj);

        this.logger.log(saved);

        return saved;
    }
}
