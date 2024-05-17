import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AtualizaProdutoDto } from "src/dto/atualizaProduto.dto";
import { CriaProdutoDto } from "src/dto/criaProduto.dto";
import { ListaProdutoDto } from "src/dto/listaProduto.dto";
import { ProdutoEntity } from "src/entities/produto.entity";
import { ProdutoRepository } from "src/repositories/produto.repository";
import { v4 as uuid } from 'uuid';

@Controller('/produtos')

export class ProdutoController {
    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async criaProduto(@Body() dadosProduto: CriaProdutoDto){
        const produtoEntity = new ProdutoEntity();
        produtoEntity.id = uuid();
        produtoEntity.nome = dadosProduto.nome;
        produtoEntity.descricao = dadosProduto.descricao;
        produtoEntity.caracteristicas = dadosProduto.caracteristicas;
        produtoEntity.categoria = dadosProduto.categoria;
        produtoEntity.dataAtualizacao = dadosProduto.dataAtualizacao;
        produtoEntity.dataCriacao = dadosProduto.dataCriacao;
        produtoEntity.descricao = dadosProduto.descricao;
        produtoEntity.imagens = dadosProduto.imagens;
        produtoEntity.quantidadeDisponivel = dadosProduto.quantidadeDisponivel;
        produtoEntity.valor = dadosProduto.valor;
        this.produtoRepository.salvar(produtoEntity);
        return {
            produto: new ListaProdutoDto(produtoEntity.id, produtoEntity.nome),
            message: "produto criado com sucesso"
        }
    }

    @Get()
    async mostraProdutos(){
        const produtosSalvo = await this.produtoRepository.listar();
        const produtoLista = produtosSalvo.map(
            produto => new ListaProdutoDto(
                produto.id,
                produto.nome
            )
        );
        return produtoLista;
    }

    @Put("/:id")
    async atualizaProduto(@Param('id') id:string, @Body() novosDados: AtualizaProdutoDto){
        const produtoAtualizado = await this.produtoRepository.atualiza(id, novosDados);

        return {
            produto: produtoAtualizado,
            message: "produto atualizado com sucesso"
        }
    }

    @Delete('/:id')
    async deletaProduto(@Param('id') id:string){
        const produtoRemovido = await this.produtoRepository.remove(id);

        return{
            produto: produtoRemovido,
            message: "produto removido com sucesso"
        }
    }
}
