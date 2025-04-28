import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateLoanDto {



    @IsString()
    @IsOptional()
    returnDate: string;
   
    @IsBoolean()
    @IsOptional()
    isReturned: boolean;

}