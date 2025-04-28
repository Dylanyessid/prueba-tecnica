import { NextFunction, Request, Response } from "express";
import { validate } from "class-validator";
import { plainToClass, plainToInstance } from "class-transformer";

export const validateDtoMiddelware = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Determinar de qué fuente tomar los datos
      let data = req.body;

      // Convertir el objeto plano en una instancia de la clase DTO
      const dtoInstance = plainToInstance(dto, data);
      // Validar la instancia
      const errors = await validate(dtoInstance as any);

      if (errors.length > 0) {
        // Si hay errores de validación, respondemos con los detalles
        res.status(400).json({ message: "Validation failed", errors });
        return;
      }

      // Si todo es válido, pasamos al siguiente middleware
      next();
    } catch (error) {
      res.status(500).json({ message: "Server failed" });
      return;
    }
  };
};
