import { IsNumber, IsPositive, IsString } from "class-validator";

export class CreateLoanDto {

    @IsNumber()
    @IsPositive()
    copyId: number;

    @IsNumber()
    @IsPositive()
    userId: number;

    @IsString()
    returnDate: string;
   

}