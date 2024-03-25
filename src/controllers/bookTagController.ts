import { Request, Response } from "express";
import { BookTagService } from "../services/bookTagService";

const bookTagService = new BookTagService();

export async function addNewBookTag(req: Request, res: Response) {
    try {
        const { title } = req.body;
        const bookTag = await bookTagService.createTag(title);

        res.status(201).json(bookTag);
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function findAllBookTag(req: Request, res: Response) {
    try {
        const bookTags = await bookTagService.findAllTag();
        res.status(201).json(bookTags);
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}