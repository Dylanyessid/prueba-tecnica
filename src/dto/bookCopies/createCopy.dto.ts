import { IsNumberString } from "class-validator";

export class CreateBookCopyDto {
    
    @IsNumberString()
    bookId: number;
}