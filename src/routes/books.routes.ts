

import { Router } from "express";
import BookController from "../controllers/book.controller";
import { validateDtoMiddelware } from "../middlewares/validateDTO";
import { CreateBookDto } from "../dto/books/createBook.dto";
import { UpdateLoanDto } from "../dto/loans/updateLoan.dto";

//Books endpoints
const booksRouter = Router()

booksRouter.post('/', validateDtoMiddelware('body',CreateBookDto) ,BookController.createBook)
booksRouter.patch('/:id', validateDtoMiddelware('body',UpdateLoanDto) ,BookController.updateBook)
booksRouter.delete('/:id', BookController.deleteBook)

export { booksRouter }