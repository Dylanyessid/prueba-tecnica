
import { Router } from "express";
import LoansController from "../controllers/loans.controller";
import { validateDtoMiddelware } from "../middlewares/validateDTO";
import { CreateLoanDto } from "../dto/loans/createLoan.dto";
import { UpdateLoanDto } from "../dto/loans/updateLoan.dto";


//Loans endpoints
const loansRouter = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateLoanDto:
 *       type: object
 *       required:
 *         - copyId
 *         - userId
 *         - returnDate
 *       properties:
 *         copyId:
 *           type: integer
 *           description: ID de la copia del libro a prestar
 *           example: 123
 *         userId:
 *           type: integer
 *           description: ID del usuario que solicita el préstamo
 *           example: 456
 *         returnDate:
 *           type: string
 *           format: date
 *           description: Fecha de devolución esperada
 *           example: '2025-05-30'
 *     UpdateLoanDto:
 *       type: object
 *       properties:
 *         returnDate:
 *           type: string
 *           format: date
 *           description: Nueva fecha de devolución del préstamo
 *           example: '2025-06-15'
 *         isReturned:
 *           type: boolean
 *           description: Estado que indica si el préstamo fue devuelto
 *           example: true
 *   
 * 
 */


/**
 * @swagger
 * /api/v1/loans/:
 *   post:
 *     summary: Crear un nuevo préstamo de libros
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/components/schemas/CreateLoanDto'
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
 *                   example: Loan created successfully
 *                 status:
 *                  type: number
 *                  example: 201
 */
loansRouter.post("/", validateDtoMiddelware('body',CreateLoanDto),LoansController.createLoan )


/**
 * @swagger
 * /api/v1/loans/:
 *   patch:
 *     summary: Actualizar un préstamo existente
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/components/schemas/UpdateLoanDto'
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
 *                   example: ¡Hola mundo!
 */
loansRouter.patch("/:id", validateDtoMiddelware('body',UpdateLoanDto) ,LoansController.updateLoan )

export { loansRouter }