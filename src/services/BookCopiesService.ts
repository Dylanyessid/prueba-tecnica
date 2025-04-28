import { Where } from "sequelize/types/utils";
import BookCopyModel from "../models/BookCopies";
import { WhereOptions } from "sequelize";
import { removeFalsyValues } from "../utils/objects";
import { GetBookCopyDto } from "../dto/bookCopies/getCopy.dto";

class BookCopiesService{

    static async insertBookCopy(bookId: number) {
        try {
            const newCopy = new BookCopyModel()
            newCopy.bookId = bookId;
            newCopy.isAvailable = true;
            await newCopy.save()
            return newCopy
        } catch (error) {
            return null
        }
    }

    static async getBookCopies(data: GetBookCopyDto) {
        const where = {
           
            bookId: data.bookId
        } as Record<string, any>;
        if(data.isAvailable!==null && data.isAvailable!==undefined){
            where.isAvailable = data.isAvailable
        }

       
     
        try {
            const bookCopies = await BookCopyModel.findAndCountAll({where})
            if(!bookCopies){
                return null
            }
            return bookCopies
        } catch (error) {
            return null
        }
    }
    static async updateBookCopy(id: number, data:any) {
        try {
            const bookCopy = await BookCopyModel.findOne({where:{id}})
            if(!bookCopy){
                return null
            }
            const updatedCopy= await BookCopyModel.update(data, {where:{id}})
            return updatedCopy
        } catch (error) {
            return null
        }
    }

    static async getBookCopyById(id: number){
        try {
            const copy = await BookCopyModel.findOne({where:{id}})
            if(!copy){
                return null
            }
            return copy
        } catch (error) {
            return null
        }
        
    }

}

export default BookCopiesService