

import { Router } from "express";
import BookController from "../controllers/book.controller";
import { validateDtoMiddelware } from "../middlewares/validateDTO";
import { CreateBookDto } from "../dto/books/createBook.dto";
import { UpdateLoanDto } from "../dto/loans/updateLoan.dto";

//Books endpoints
const booksRouter = Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     CreateBookDto:
 *       type: object
 *       required:
 *         - name
 *         - authors
 *         - publishedDate
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del libro
 *           example: "El Gran Libro"
 *         authors:
 *           type: array
 *           items:
 *             type: integer
 *           description: Lista de IDs de autores del libro
 *           example: [1, 2, 3]
 *         publishedDate:
 *           type: string
 *           format: date
 *           description: Fecha de publicación del libro
 *           example: '2025-05-01'
 *     UpdateBookDto:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nuevo nombre del libro
 *           example: "El Gran Libro Actualizado"
 *         authors:
 *           type: array
 *           items:
 *             type: integer
 *           description: Nuevos IDs de los autores del libro
 *           example: [4, 5]
 *         publishedDate:
 *           type: string
 *           format: date
 *           description: Nueva fecha de publicación
 *           example: '2026-01-01'
 */



/**
 * @swagger
 * /api/v1/books/:
 *   post:
 *     summary: Insertar un nuevo libro
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/components/schemas/CreateBookDto'
 * 
 *     responses:
 *       200:
 *         description: Préstamo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Book created successfully
 *                 status:
 *                  type: number
 *                  example: 201
 *                 data: 
 *                  type: object
 *                  properties:
 *                   id:
 *                     type: number
 *                     example: 5
 *                   name:
 *                     type: string
 *                   published_date:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-12-28T00:00:00.000Z"
 *                   deletedAt:
 *                      type: string
 *                      format: date-time
 *                      nullable: true
 *                      example: null
 *                   created_at:
 *                      type: string
 *                      format: date-time
 *                      example: "2025-04-28T11:28:34.000Z"
 *                   updated_at:
 *                      type: string
 *                      format: date-time
 *                      example: "2025-04-28T11:29:28.356Z"
 * 
 *                   
 */
booksRouter.post('/', validateDtoMiddelware('body',CreateBookDto) ,BookController.createBook)



/**
 * @swagger
 * /api/v1/books/{id}:
 *   patch:
 *     summary: Actualizar un libro
 *     parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: ID del libro a eliminar
 * 
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/components/schemas/UpdateBookDto'
 * 
 *     responses:
 *       200:
 *         description: Préstamo actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Book updated successfully
 *                 status:
 *                  type: number
 *                  example: 200
 *                 data: 
 *                  type: object
 *                  properties:
 *                   id:
 *                     type: number
 *                     example: 5
 *                   name:
 *                     type: string
 *                   published_date:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-12-28T00:00:00.000Z"
 *                   deletedAt:
 *                      type: string
 *                      format: date-time
 *                      nullable: true
 *                      example: null
 *                   created_at:
 *                      type: string
 *                      format: date-time
 *                      example: "2025-04-28T11:28:34.000Z"
 *                   updated_at:
 *                      type: string
 *                      format: date-time
 *                      example: "2025-04-28T11:29:28.356Z"
 * 
 */
booksRouter.patch('/:id', validateDtoMiddelware('body',UpdateLoanDto) ,BookController.updateBook)


/**
 * @swagger
 * /api/v1/books/{id}:
 *   delete:
 *     summary: Eliminar  libro
 *     parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: ID del libro a eliminar
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/components/schemas/UpdateBookDto'
 * 
 *     responses:
 *       200:
 *         description: Préstamo eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Book deleted successfully
 *                 status:
 *                  type: number
 *                  example: 200
 *                 data: 
 *                  type: object
 *                  properties:
 *                   id:
 *                     type: number
 *                     example: 5
 *                   name:
 *                     type: string
 *                   published_date:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-12-28T00:00:00.000Z"
 *                   deletedAt:
 *                      type: string
 *                      format: date-time
 *                      nullable: true
 *                      example: null
 *                   created_at:
 *                      type: string
 *                      format: date-time
 *                      example: "2025-04-28T11:28:34.000Z"
 *                   updated_at:
 *                      type: string
 *                      format: date-time
 *                      example: "2025-04-28T11:29:28.356Z"
 * 
 */
booksRouter.delete('/:id', BookController.deleteBook)

export { booksRouter }