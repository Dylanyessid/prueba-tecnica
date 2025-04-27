import { Request, Response } from "express";
import BookService from "../services/BookService";
import { CreateBookDto } from "../dto/createBook.dto";
import { generateSuscessResponse } from "../utils/httpResponseMaker";
import { UpdateBookDto } from "../dto/updateBook.dto";

class BookController {

    static async createBook(req:Request, res:Response) {
        try {
            const newBook = await BookService.insertBook(req.body as CreateBookDto)
            if(!newBook) {
                 res.status(400).json({ message: "Error inserting book" });
                 return
            }
            res.status(201).json(generateSuscessResponse(newBook, "Book created successfully", 201));
            return
            //res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: "Error creating books" });
        }
    }
    static async updateBook(req:Request, res:Response) {
        try {
            const { id } = req.params;
            const updatedBook = await BookService.updateBook(Number(id), req.body as UpdateBookDto)
            if(!updatedBook) {
                 res.status(400).json({ message: "Error updating book" });
                 return
            }
            res.status(200).json(generateSuscessResponse(updatedBook, "Book updated successfully", 200));
            return
        } catch (error) {
            res.status(500).json({ message: "Error updating books" });
        }
    }

}

export default BookController;