import { NextFunction, Request, Response } from "express";
import { validate } from "class-validator";
import { plainToClass, plainToInstance } from "class-transformer";


// Middleware to validate DTOs using class-validator and class-transformer
// If detects any validation error, it will return a 400 response with the errors
export const validateDtoMiddelware = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
     
      let data = req.body;

      const dtoInstance = plainToInstance(dto, data);
  
      const errors = await validate(dtoInstance as any);

      if (errors.length > 0) {
     
        res.status(400).json({ message: "Validation failed", errors });
        return;
      }

     
      next();
    } catch (error) {
      res.status(500).json({ message: "Server failed" });
      return;
    }
  };
};
