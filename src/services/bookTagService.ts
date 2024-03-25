import { BookTagRepository } from "../repositories/bookTagRepository";
import { BookTag } from "../entities/bookTagEntities";

export class BookTagService {
    private bookTagRepository: BookTagRepository;

    constructor() {
        this.bookTagRepository = new BookTagRepository();
    }

    async findBookTagById(id: number): Promise<BookTag | null> {
        return this.bookTagRepository.findById(id);
    }

    async createTag(title: string): Promise<BookTag | undefined> {
        const tag = new BookTag();
        tag.title = title;

        return this.bookTagRepository.create(tag);
    }

    async findAllTag(): Promise<BookTag[] | undefined> {
        return this.bookTagRepository.findAll();
    }
}