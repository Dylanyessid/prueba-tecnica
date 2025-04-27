import BookCopyModel from "../models/BookCopies";

class BookCopiesService{

    static async insertBookCopy(bookId: number): Promise<any> {
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

    static async getAllBookCopies(bookId: number): Promise<any> {
        try {
            const bookCopies = await BookCopyModel.findAll({where:{bookId}})
            if(!bookCopies){
                return null
            }
            return bookCopies
        } catch (error) {
            return null
        }
    }
    static async updateBookCopy(id: number, data:any): Promise<any> {
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

}

export default BookCopiesService