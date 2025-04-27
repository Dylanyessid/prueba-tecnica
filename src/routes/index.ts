import { Router } from "express";
import { booksRouter } from "./bookCopies.routes";
import { bookCopiesRouter } from "./books.routes";

const mainRouter = Router();

mainRouter.use("/books", booksRouter)
mainRouter.use("/bookCopies", bookCopiesRouter)  

export {mainRouter}