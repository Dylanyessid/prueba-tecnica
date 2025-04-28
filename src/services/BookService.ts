import { error } from "console";
import { CreateBookDto } from "../dto/books/createBook.dto";
import { UpdateBookDto } from "../dto/books/updateBook.dto";
import BookModel from "../models/Book";
import BookAuthorsModel from "../models/BookAuthors";
import BookAuthorService from "./BookAuthorService";
import { Sequelize } from "sequelize";
import { sequelizeConnection } from "../config/database";


class BookService {

    static async insertBook(createBookDto:CreateBookDto) {
        const transaction = await sequelizeConnection.transaction();
        try {
       
            const { name, publishedDate, authors } = createBookDto;
            const book = new BookModel();
            book.name = name;
            book.published_date = new Date(publishedDate); 
            const newBook = await book.save();
            await BookAuthorService.addAuthorsToBook(authors, newBook.id);
           
            await transaction.commit()
            return book;
        } catch (error) {
            console.error("Error inserting book:", error);
            await transaction.rollback(); 
        }
    }

    static async updateBook(id: number, createBookDto: UpdateBookDto) {
        const transaction = await sequelizeConnection.transaction();
        try {
            const { name, publishedDate, authors } = createBookDto;
            const book = await BookModel.findByPk(id);
            if (!book) {
                return null;  
            }
            book.name = name;
            book.published_date = new Date(publishedDate); 
            if(authors.length > 0) {
                await BookAuthorService.updateAuthorsToBook(authors, id)
            }
            await book.save();
            await transaction.commit()
           
           
            return book;
        } catch (error) {
            await transaction.rollback();
            console.error("Error updating book:", error);
            return null
        }
    }

    static async deleteBook(id: number) {
        try {
            const book = await BookModel.findByPk(id);
            if (!book) {
                return null;
            }
           
            book.deletedAt = new Date(); 
            await book.save(); 
            return book;
        } catch (error) {
            console.error("Error deleting book:", error);
            return null
        }
    }
}

export default BookService;