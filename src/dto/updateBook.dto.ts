import { ArrayNotEmpty, IsArray, isArray, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateBookDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsArray()
    @IsNumber({}, { each: true })
    @IsOptional()
    authors:number[];

    @IsString()
    @IsOptional()
    publishedDate: string;

}