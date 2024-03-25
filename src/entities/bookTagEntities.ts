import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookTag {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column(
        {
            type: "varchar", 
            length: 255, 
            nullable: false
        }
    )
    public title: string;
}