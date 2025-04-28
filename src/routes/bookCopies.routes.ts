import { Router } from "express";
import BookCopiesController from "../controllers/bookCopies.controller";
import { validate } from "class-validator";
import { validateDtoMiddelware } from "../middlewares/validateDTO";
import { CreateBookCopyDto } from "../dto/bookCopies/createCopy.dto";
import { GetBookCopyDto } from "../dto/bookCopies/getCopy.dto";


// Book copies endpoints
const bookCopiesRouter = Router()

bookCopiesRouter.post("/", validateDtoMiddelware('query', CreateBookCopyDto), BookCopiesController.createBookCopy)
bookCopiesRouter.get("/", validateDtoMiddelware('query', GetBookCopyDto),BookCopiesController.getBookCopies)
bookCopiesRouter.put("/:id", BookCopiesController.updateBookCopy)


export { bookCopiesRouter }