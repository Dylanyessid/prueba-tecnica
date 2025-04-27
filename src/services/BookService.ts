import { error } from "console";
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
                return null; // or throw an error
            }

            book.name = name;
            book.published_date = new Date(publishedDate); 
            
            const bookAuthors = authors.map((author) => {

            })
            await book.save();
            return book;
        } catch (error) {
            console.error("Error updating book:", error);
            return null
        }
    }

    static async deleteBook(id: number) {
        try {
            const book = await BookModel.findByPk(id);
            if (!book) {
                return null; // or throw an error
            }
            book.deletedAt = new Date(); // Set the deletedAt field to the current date
            await book.save(); // Save the changes to the database
            return book;
        } catch (error) {
            console.error("Error deleting book:", error);
            return null
        }
    }
}

export default BookService;