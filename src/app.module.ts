import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/tasks.entity';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            name: 'default',
            type: 'sqljs',
            entities: [Task],
            location: './db.json',
            logging: true,
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Task])
    ],
    controllers: [TaskController],
    providers: [TaskService],
})
export class AppModule { }
