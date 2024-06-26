import { IsNotEmpty } from "class-validator";

export class CaracteristicasProdutoDto {
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    nome: string;

    @IsNotEmpty({message: "Descrição não pode ser vazio"})
    descricao: string;
}