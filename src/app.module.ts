import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/tasks.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            name: 'default',
            type: 'sqljs',
            entities: [Task],
            location: path.join(__dirname, 'db.json')
        })
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
