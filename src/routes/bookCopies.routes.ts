import { Router } from "express";
import BookCopiesController from "../controllers/bookCopies.controller";

const bookCopiesRouter = Router()

bookCopiesRouter.post("/", BookCopiesController.createBookCopy)
bookCopiesRouter.get("/", BookCopiesController.getBookCopies)
bookCopiesRouter.put("/:id", BookCopiesController.updateBookCopy)


export { bookCopiesRouter }