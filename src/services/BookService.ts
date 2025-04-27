import { CreateBookDto } from "../dto/createBook.dto";
import { UpdateBookDto } from "../dto/updateBook.dto";
import BookModel from "../models/Book";


class BookService {

    static async insertBook(createBookDto:CreateBookDto) {
        try {
            //BookService.insertBook(createBookDto);
            const { name, publishedDate, authors } = createBookDto;
            const book = new BookModel();
            book.name = name;
            book.published_date = new Date(publishedDate); 
            await book.save();
            return book;
        } catch (error) {
            console.error("Error inserting book:", error);
        }
    }

    static async updateBook(id: number, createBookDto: UpdateBookDto) {
        try {
            const { name, publishedDate, authors } = createBookDto;
            const book = await BookModel.findByPk(id);
            if (!book) {
                throw new Error("Book not found");
            }
            book.name = name;
            book.published_date = new Date(publishedDate); 
            await book.save();
            return book;
        } catch (error) {
            console.error("Error updating book:", error);
        }
    }
}

export default BookService;