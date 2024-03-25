import { Request, Response } from "express";
import { BookService } from "../services/bookService";
import { TagOfBookService } from "../services/tagOfBookService";
import { BookTagService } from "../services/bookTagService";

const bookService = new BookService();
const bookTagService = new BookTagService();
const tagOfBookService = new TagOfBookService();

export async function findAllBook(req: Request, res: Response): Promise<void> {
    try {
        const books = await bookService.findAllBook();
        res.status(201).json(books)
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function addNewBook(req: Request, res: Response): Promise<void> {
    try {
        const { title, writer, point, price, tag } = req.body;
        const cover_image = 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg';

        const tagExists = await checkListTagExists(tag);

        if (tagExists) {
            const savedBook = await bookService.createBook(title, writer, cover_image, point, price);

            if (savedBook) {
                await tagOfBookService.createListTagOfBook(tag, savedBook.id);
                res.status(201).json(savedBook);
            }
        }
        res.status(404).json({ error: "Tags Not Found" });
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function checkListTagExists(tag: number[]) {
    const tagLen = tag.length;

    for (let i = 0; i < tagLen; i++) {
        try {
            await bookTagService.findBookTagById(tag[i]);
        }
        catch (error) {
            return false;
        }
    }
    return true;
}

export async function findRandomBook(req: Request, res: Response): Promise<void> {
    const { number_records, tag, search } = req.query as { number_records: string, tag: string, search: string};

    try {
        const books = await bookService.findRandomBook(parseInt(number_records), parseInt(tag), search);
        res.status(201).json(books);
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}