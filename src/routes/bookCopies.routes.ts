import { Router } from "express";
import BookCopiesController from "../controllers/bookCopies.controller";
import { validate } from "class-validator";
import { validateDtoMiddelware } from "../middlewares/validateDTO";
import { CreateBookCopyDto } from "../dto/bookCopies/createCopy.dto";
import { GetBookCopyDto } from "../dto/bookCopies/getCopy.dto";


// Book copies endpoints
const bookCopiesRouter = Router()



/**
 * @swagger
 * /api/v1/book-copies/:
 *   post:
 *     summary: Insertar un nuevo libro
 *     parameters:
 *       - in: query
 *         name: bookId
 *         required: true
 *         description: ID del libro a insertar copia
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
 *                   type: number
 *                   example: 201
 *                 data: 
 *                  type: object
 *                  properties:
 *                   id:
 *                     type: number
 *                     example: 5
 *                   bookId:
 *                     type: number
 *                     example: 1
 *                  
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
 *                 */
bookCopiesRouter.post("/", validateDtoMiddelware('query', CreateBookCopyDto), BookCopiesController.createBookCopy)


/**
 * @swagger
 * /api/v1/book-copies/:
 *   get:
 *     summary: Ver copias de un libro
 *      parameters:
 *          - in: query
 *            name: bookId
 *            required: true
 *            description: ID del libro a insertar copia
 * 
 *          - in: query
 *            name: isAvailable
 *            required: true
 *            description: Filtro para ver copias disponibles o no disponibles. Si no se pasa, se verán todas las copias
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
 *                   type: object
 *                   properties:
 *                     count:
 *                       type: number
 *                       example: 1
 *                     rows:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: number
 *                             example: 5
 *                           bookId:
 *                             type: number
 *                             example: 1
 *                           deletedAt:
 *                             type: string
 *                             format: date-time
 *                             nullable: true
 *                             example: null
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *                             example: "2025-04-28T11:28:34.000Z"
 *                           updated_at:
 *                             type: string
 *                             format: date-time
 *                             example: "2025-04-28T11:29:28.356Z"
 */
 
bookCopiesRouter.get("/", validateDtoMiddelware('query', GetBookCopyDto),BookCopiesController.getBookCopies)





export { bookCopiesRouter }