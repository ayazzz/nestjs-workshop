import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
