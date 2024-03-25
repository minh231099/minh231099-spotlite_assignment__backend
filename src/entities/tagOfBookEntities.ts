import { Entity, Column, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BookTag } from './bookTagEntities';
import { Book } from './bookEntites';

@Entity()
export class TagOfBook {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => Book, (book: Book) => book.id)
    public book: number;

    @ManyToOne(() => BookTag, (bookTag: BookTag) => bookTag.id)
    public tag: number;
}