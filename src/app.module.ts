import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/tasks.entity';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            name: 'default',
            type: 'sqljs',
            entities: [Task],
            location: './db.json',
            synchronize: true, //not recommended for prod
            logging: true,
        }),
        TypeOrmModule.forFeature([Task])
    ],
    controllers: [TasksController],
    providers: [TasksService],
})
export class AppModule { }
