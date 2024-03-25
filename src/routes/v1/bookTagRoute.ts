import { Router } from "express";
import { addNewBookTag, findAllBookTag } from "../../controllers/bookTagController";

const router = Router();

router.get("/", findAllBookTag);
router.post("/", addNewBookTag);

export default router;