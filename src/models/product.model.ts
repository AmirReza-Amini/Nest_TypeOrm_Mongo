import { Column, CreateDateColumn, DeleteDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @ObjectIdColumn()
    public id: ObjectID;

    @Column()
    public name: string;

    @Column()
    public description: string;

    @CreateDateColumn()
    public createDate: Date;

    @UpdateDateColumn()
    public updateDate: Date;
}