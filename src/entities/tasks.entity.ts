import { Entity, BaseEntity, Column } from "typeorm";

@Entity('tasks')
export class Task extends BaseEntity {
    @Column({ primary: true })
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    creation: Date
}