

import { Router } from "express";
import BookController from "../controllers/book.controller";

const booksRouter = Router()

booksRouter.post('/', BookController.createBook)
booksRouter.put('/:id', BookController.updateBook)
booksRouter.delete('/:id', BookController.deleteBook)
export { booksRouter }