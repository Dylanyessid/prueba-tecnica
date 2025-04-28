import { Request, Response } from "express";
import { CreateLoanDto } from "../dto/loans/createLoan.dto";
import BookCopiesService from "../services/BookCopiesService";
import LoanService from "../services/LoanService";
import { generateErrorResponse, generateSuscessResponse } from "../utils/httpResponseMaker";
import { UpdateLoanDto } from "../dto/loans/updateLoan.dto";
import { sequelizeConnection } from "../config/database";

class LoansController {
 

  static async createLoan(req: Request, res: Response) {
    try {

      const { copyId } = req.body as CreateLoanDto;
      const copy = await BookCopiesService.getBookCopyById(copyId)
      if(!copy|| !copy.isAvailable){
         res.status(404).json(generateErrorResponse("Book copy not found or not available", 404 ));
         return
      }
      const newLoan = await LoanService.createLoan(req.body);
      if (!newLoan) {
         res.status(400).json(generateErrorResponse("Error creating loan", 400 ));
         return
      }

      await BookCopiesService.updateBookCopy(copyId, {isAvailable: false})
      res.status(201).json(generateSuscessResponse({}, 'Loan created successfully', 201));
      return
    } catch (error) {
      res.status(500).json(generateErrorResponse("Error creating loan", 500 ));
    }
  }

  static async updateLoan(req: Request, res: Response){
      const transaction = await sequelizeConnection.transaction()
      const {id} = req.params   
      
      const loan = await LoanService.getLoanById(Number(id))
      if(!loan){
        await transaction.rollback()
         res.status(404).json(generateErrorResponse("Loan not found", 404 ));
         return
      }
      if(req.body.isReturned){
          const copy = await BookCopiesService.getBookCopyById(loan.copyId)
          if(!copy){
              res.status(404).json(generateErrorResponse("Book copy not found", 404 ));
              return
          }
          await BookCopiesService.updateBookCopy(loan.copyId, {isAvailable: true})
      }
      const updated = await LoanService.updateLoan(Number(id), {isReturned:req.body.isReturned, returnDate: req.body.returnDate ? new Date(req.body.returnDate) : null} )
      if(!updated){
        await transaction.rollback()
         res.status(400).json(generateErrorResponse("Error updating loan", 400 ));
         return
      }
      transaction.commit()
      res.status(200).json(generateSuscessResponse({}, 'Loan updated successfully', 200));
    
  }
}

export default LoansController;