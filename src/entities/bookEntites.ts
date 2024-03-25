import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { TagOfBook } from './tagOfBookEntities';

@Entity()
export class Book {
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

    @Column(
        {
            type: "varchar", 
            length: 255, 
            nullable: false
        }
    )
    public writer: string;

    @Column(
        {
            type: "numeric",
            default: 0,
        }
    )
    public point: number;

    @Column(
        {
            type: "varchar",
            length: 255,
            default: 0,
        }
    )
    public cover_image: string;

    @Column(
        {
            type: "numeric",
            nullable: false,
        }
    )
    public price: number;

    @OneToMany(() => TagOfBook, (tagOfBook: TagOfBook) => tagOfBook.book)
    public tags: TagOfBook[];
}