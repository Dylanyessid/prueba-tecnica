import { Request, Response } from "express";
import BookCopiesService from "../services/BookCopiesService";
import { generateErrorResponse, generateSuscessResponse } from "../utils/httpResponseMaker";

class BookCopiesController {

    static async createBookCopy(req:Request, res:Response) {
       const {bookId} = req.query
       const newCopy =  await BookCopiesService.insertBookCopy(Number(bookId))
       if(!newCopy){
            res.status(500).json(generateErrorResponse("Error creating book copy", 500 ))
            return
        }
        res.status(201).json(generateSuscessResponse(newCopy,"Book copy created successfully", 201 ))
        return
    }

    static async getBookCopies(req:Request, res:Response) {
        const {bookId} = req.query
        const bookCopies = await BookCopiesService.getBookCopies(Number(bookId))
        if(!bookCopies){
            res.status(500).json(generateErrorResponse("Error getting book copies", 500 ))
            return
        }
        res.status(200).json(generateSuscessResponse(bookCopies,"Book copies retrieved successfully", 200 ))
        return
    }

    static async updateBookCopy(req:Request, res:Response) {
        const {id} = req.params
        const updatedCopy = await BookCopiesService.updateBookCopy(Number(id), req.body)
        if(!updatedCopy){
            res.status(500).json(generateErrorResponse("Error updating book copy", 500 ))
            return
        }
        res.status(200).json(generateSuscessResponse(updatedCopy,"Book copy updated successfully", 200 ))
        return
    }



}

export default  BookCopiesController;