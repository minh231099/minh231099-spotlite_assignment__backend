import { Book } from "../entities/bookEntites";
import { TagOfBook } from "../entities/tagOfBookEntities";
import connectDB from "../typeorm";

export class BookRepository {
    private bookRepository;

    constructor() {
        const connection = connectDB;
        this.bookRepository = connection.getRepository(Book);;
    }

    async findAll(): Promise<Book[] | undefined> {
        return this.bookRepository.createQueryBuilder("book")
            .leftJoinAndSelect("book.tags", "tagOfBook")
            .leftJoinAndSelect("tagOfBook.tag", "bookTag")
            .getMany();
    }

    async create(newBook: Book): Promise<Book | undefined> {
        return this.bookRepository.save(newBook);
    }

    async findRandom(n: number, tag: number, search: string): Promise<Book[] | undefined> {
        const query = this.bookRepository.createQueryBuilder("book")
            .leftJoinAndSelect("book.tags", "tags")
            .leftJoinAndSelect("tags.tag", "tagTitle")
            .orderBy("RANDOM()")
            .limit(n);
        if (!isNaN(tag)) {
            query
                .innerJoin(TagOfBook, 'tagOfBook', 'book.id = tagOfBook.book')
                .where('tagOfBook.tag = :tagId', { tagId: tag })
        }
        if (search) {
            query.andWhere('book.title LIKE :searchValue', { searchValue: `%${search}%` });
        }
        return query.getMany();
    }
}