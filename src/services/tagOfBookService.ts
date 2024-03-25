import { TagOfBookRepository } from "../repositories/tagOfBookRepository";
import { TagOfBook } from "../entities/tagOfBookEntities";

export class TagOfBookService {
    private tagOfBookRepository: TagOfBookRepository;

    constructor() {
        this.tagOfBookRepository = new TagOfBookRepository();
    }

    async findTagOfBookById(id: number): Promise<TagOfBook | null> {
        return this.tagOfBookRepository.findById(id);
    }

    async createListTagOfBook(tags: number[], bookId: number): Promise<any> {
        const data = tags.map((tag: number) => ({
            book: bookId,
            tag: tag,
        }));
        return this.tagOfBookRepository.saveList(data);
    }
}