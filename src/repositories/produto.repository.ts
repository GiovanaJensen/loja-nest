import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "src/entities/produto.entity";

@Injectable()
export class ProdutoRepository {
    private produtos: ProdutoEntity[] = [];

    async salvar(produto: ProdutoEntity){
        this.produtos.push(produto);
    }

    async listar(){
        return this.produtos;
    }

    private buscaPorId(id: string){
        const possivelProduto = this.produtos.find(
            produto => produto.id === id
        );

        if(!possivelProduto){
            throw new Error("Produto não existe")
        }

        return possivelProduto;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<ProdutoEntity>){
        const produto = this.buscaPorId(id);
        console.log(produto);

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if(chave === 'id'){
                return;
            }

            produto[chave] = valor;
        });

        return produto;
    }

    async remove(id: string){
        const produto = this.buscaPorId(id);
        this.produtos = this.produtos.filter(
            produtoSalvo => produtoSalvo.id !== id
        );
        return produto;
    }
}