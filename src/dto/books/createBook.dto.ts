import { ArrayNotEmpty, IsArray, isArray, IsNumber, IsString } from "class-validator";


export class CreateBookDto {

    @IsString()
    name: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsNumber({}, { each: true })
    authors:number[];

    @IsString()
    publishedDate: string;

}