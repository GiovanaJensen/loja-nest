import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "src/repositories/produto.repository";

@Controller('/produtos')
export class ProdutoController {
    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async criaProduto(@Body() dadosProduto){
        this.produtoRepository.salvar(dadosProduto);
        return dadosProduto;
    }

    @Get()
    async mostraProdutos(){
        return this.produtoRepository.listar();
    }
}