import { IsNotEmpty, IsUrl } from "class-validator";

export class ImagensProdutoDto {
    @IsUrl()
    url: string;

    @IsNotEmpty()
    descricao: string;
}