import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {
    private produtos = [];

    async salvar(dadosProduto){
        this.produtos.push(dadosProduto);
        return dadosProduto;
    }

    async listar(){
        return this.produtos;
    }
}