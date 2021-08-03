import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @ObjectIdColumn()
    public id: ObjectID;

    @Column()
    public type: logType;

    @Column()
    public description: string;

    @CreateDateColumn()
    public createDate: Date;

    @UpdateDateColumn()
    public updateDate: Date;
}

export enum logType{
    info,
    error,
    warning
}