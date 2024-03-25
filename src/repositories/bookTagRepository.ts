import { BookTag } from "../entities/bookTagEntities";
import connectDB from "../typeorm";

export class BookTagRepository {
    private bookTagRepository;

    constructor() {
        const connection = connectDB;
        this.bookTagRepository = connection.getRepository(BookTag);;
    }

    async findById(id: number): Promise<BookTag | null> {
        return this.bookTagRepository.createQueryBuilder('bookTag').where("bookTag.id = :id", { id: id }).getOneOrFail();
    }

    async create(newTag: BookTag): Promise<BookTag | undefined> {
        return this.bookTagRepository.save(newTag);
    }

    async findAll(): Promise<BookTag[] | undefined> {
        return this.bookTagRepository.find();
    }
}