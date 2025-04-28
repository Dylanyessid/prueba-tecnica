
import { Router } from "express";
import LoansController from "../controllers/loans.controller";
import { validateDtoMiddelware } from "../middlewares/validateDTO";
import { CreateLoanDto } from "../dto/loans/createLoan.dto";
import { UpdateLoanDto } from "../dto/loans/updateLoan.dto";

//Loans endpoints
const loansRouter = Router()

loansRouter.post("/", validateDtoMiddelware(CreateLoanDto),LoansController.createLoan )
loansRouter.patch("/:id", validateDtoMiddelware(UpdateLoanDto) ,LoansController.updateLoan )

export { loansRouter }