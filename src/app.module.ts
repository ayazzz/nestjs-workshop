import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/tasks.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            name: 'default',
            type: 'sqljs',
            entities: [Task],
            location: './db.json',
            synchronize: true, //not recommended for prod
            logging: true,
        })
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
