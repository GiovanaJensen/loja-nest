import { CaracteristicasProdutoDto } from "src/dto/caracteristicasProduto.dto";
import { ImagensProdutoDto } from "src/dto/imagensProduto.dto";

export class ProdutoEntity {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    caracteristicas:CaracteristicasProdutoDto[];
    imagens: ImagensProdutoDto[];
    categoria: string;
    dataCriacao: string;
    dataAtualizacao: string;
}