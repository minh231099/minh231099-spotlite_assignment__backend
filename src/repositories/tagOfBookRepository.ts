import { TagOfBook } from "../entities/tagOfBookEntities";
import { ListDataType } from "../interfaces/tagOfBookInterface";
import connectDB from "../typeorm";

export class TagOfBookRepository {
    private tagOfBookRepository;

    constructor() {
        const connection = connectDB;
        this.tagOfBookRepository = connection.getRepository(TagOfBook);;
    }

    async findById(id: number): Promise<TagOfBook | null> {
        return this.tagOfBookRepository.findOneBy({id: id});
    }

    async saveList(data: ListDataType[]): Promise <any> {
        return this.tagOfBookRepository.createQueryBuilder().insert().values(data).execute();
    }
}