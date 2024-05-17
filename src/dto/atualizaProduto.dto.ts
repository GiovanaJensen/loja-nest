import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsOptional, IsPositive, IsUUID, MaxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicasProdutoDto } from "./caracteristicasProduto.dto";
import { ImagensProdutoDto } from "./imagensProduto.dto";
import { Type } from "class-transformer";

export class AtualizaProdutoDto{

    @IsNotEmpty()
    @IsOptional()
    nome: string;

    @IsPositive()
    @Min(1)
    @IsOptional()
    valor: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    quantidadeDisponivel: number;

    @IsNotEmpty()
    @MaxLength(1000)
    @IsOptional()
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicasProdutoDto)
    @IsOptional()
    caracteristicas: CaracteristicasProdutoDto[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagensProdutoDto)
    @IsOptional()
    imagens: ImagensProdutoDto[];

    @IsNotEmpty()
    @IsOptional()
    categoria: string;

    @IsNotEmpty()
    @IsOptional()
    dataCriacao: string;

    @IsNotEmpty()
    @IsOptional()
    dataAtualizacao: string;
}