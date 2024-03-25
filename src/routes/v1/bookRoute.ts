import { Router } from "express";
import { findAllBook, addNewBook, findRandomBook } from "../../controllers/bookController";

const router = Router();

router.get("/", findAllBook);
router.post("/", addNewBook);
router.get("/random", findRandomBook);

export default router;