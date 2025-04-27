import { Router } from "express";
import { bookCopiesRouter } from "./bookCopies.routes";
import { booksRouter } from "./books.routes";

const mainRouter = Router();

mainRouter.use("/books", booksRouter)
mainRouter.use("/book-copies", bookCopiesRouter)  

export {mainRouter}