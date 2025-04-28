import { CreateLoanDto } from "../dto/loans/createLoan.dto";
import { UpdateLoanDto } from "../dto/loans/updateLoan.dto";
import LoanModel from "../models/Loan";
import { removeFalsyValues } from "../utils/objects";

class LoanService {

    static async createLoan(data: CreateLoanDto): Promise<any> {
        const { copyId, userId, returnDate,  } = data;
        try {
           const newLoan = new LoanModel()
           newLoan.copyId = copyId;
           newLoan.userId = userId;
           newLoan.loanDate = new Date();
           newLoan.returnDate = new Date(returnDate);
           newLoan.isReturned = false;
           await newLoan.save()
           return newLoan
        } catch (error) {
            return null
        }
    }

    static async getLoanById(id: number): Promise<any> {
        try {
            const loan = await LoanModel.findOne({where:{id}})
            if(!loan){
                return null
            }
            return loan
        } catch (error) {
            return null
        }
    }

    static async updateLoan(id: number, data: {returnDate?: Date | null, isReturned?: boolean}): Promise<any> {
        try {
            let newData = removeFalsyValues(data)
            const updatedLoan = await LoanModel.update(newData,{where:{id}} );
            if(!updatedLoan){
                return null
            }
            return updatedLoan

        } catch (error) {
            return null
        }
    }

}

export default LoanService;