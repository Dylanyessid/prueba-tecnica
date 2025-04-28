import { Router } from "express";
import { bookCopiesRouter } from "./bookCopies.routes";
import { booksRouter } from "./books.routes";
import { loansRouter } from "./loan.routes";


// Main router to group all routes
const mainRouter = Router();

mainRouter.use("/books", booksRouter)
mainRouter.use("/book-copies", bookCopiesRouter)  
mainRouter.use("/loans", loansRouter)

export {mainRouter}