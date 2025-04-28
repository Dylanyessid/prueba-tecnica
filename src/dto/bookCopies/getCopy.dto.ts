import { IsBoolean, IsBooleanString, IsNumberString, IsOptional } from "class-validator";
import { IsNull } from "sequelize-typescript";

export class GetBookCopyDto {
    
    @IsNumberString()
    bookId: number;

    @IsBooleanString()
    @IsOptional()
    
    isAvailable?: boolean | null;   
}