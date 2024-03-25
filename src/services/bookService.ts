import { BookRepository } from "../repositories/bookRepository";
import { Book } from "../entities/bookEntites";

export class BookService {
    private bookRepository: BookRepository;

    constructor() {
        this.bookRepository = new BookRepository();
    }

    async findAllBook(): Promise<Book[] | undefined> {
        return this.bookRepository.findAll();
    }

    async createBook(title: string, writer: string, cover_image: string, point: number, price: number): Promise<Book | undefined> {
        const book = new Book();
        book.title = title;
        book.writer = writer;
        book.point = point;
        book.price = price;
        book.cover_image = cover_image;

        return this.bookRepository.create(book);
    }

    async findRandomBook(n: number, tag: number, search: string):  Promise<Book[] | undefined> {
        return this.bookRepository.findRandom(n, tag, search);
    }
}