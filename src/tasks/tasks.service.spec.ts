import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from '../entities/tasks.entity';

describe('TasksService', () => {
    let service: TasksService;
    let repo: Repository<Task>;

    beforeEach(async () => {
        const repoToken = getRepositoryToken(Task);
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TasksService,
                {
                    provide: repoToken,
                    useClass: Repository
                }
            ],
        }).compile();

        repo = module.get<Repository<Task>>(repoToken);
        service = module.get<TasksService>(TasksService);
    });

    it('should be defined', () => {
        expect(repo).toBeDefined();
        expect(service).toBeDefined();
    });

    it('should return all tasks', async () => {
        //arrange
        const date = new Date();
        const expected: Task[] = [
            {
                id: 123,
                title: 'test',
                description: 'teststs',
                creation: date
            } as Task
        ];

        jest.spyOn(repo, 'find').mockResolvedValueOnce(expected);

        //act
        const result = await service.getAllTasks();

        //assert / expect
        expect(result).toBeDefined();
        expect(Array.isArray(result)).toBeTruthy();
        expect(result.length).toEqual(expected.length);
        expect(result[0].creation).toEqual(date);
    })
});
