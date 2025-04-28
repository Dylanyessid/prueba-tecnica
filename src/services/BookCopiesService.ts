import BookCopyModel from "../models/BookCopies";

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

    static async getBookCopies(bookId: number) {
        try {
            const bookCopies = await BookCopyModel.findAndCountAll({where:{bookId} })
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