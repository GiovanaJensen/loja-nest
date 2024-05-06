import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsPositive, IsUUID, MaxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicasProdutoDto } from "./caracteristicasProduto.dto";
import { ImagensProdutoDto } from "./imagensProduto.dto";
import { Type } from "class-transformer";

export class CriaProdutoDto{

    @IsUUID(undefined, {message: "ID de usuário é inválido"})
    usuarioId: string;

    @IsNotEmpty()
    nome: string;

    @IsPositive()
    @Min(1)
    valor: number;

    @IsInt()
    @Min(0)
    quantidadeDisponivel: number;

    @IsNotEmpty()
    @MaxLength(1000)
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicasProdutoDto)
    caracteristicas: CaracteristicasProdutoDto[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagensProdutoDto)
    imagens: ImagensProdutoDto[];

    @IsNotEmpty()
    categoria: string;

    @IsNotEmpty()
    dataCriacao: string;

    @IsNotEmpty()
    dataAtualizacao: string;
}