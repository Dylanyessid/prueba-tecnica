
import { Router } from "express";
import LoansController from "../controllers/loans.controller";
import { validateDtoMiddelware } from "../middlewares/validateDTO";
import { CreateLoanDto } from "../dto/loans/createLoan.dto";


const loansRouter = Router()

loansRouter.post("/", validateDtoMiddelware(CreateLoanDto),LoansController.createLoan )
loansRouter.patch("/:id", LoansController.updateLoan )
export { loansRouter }