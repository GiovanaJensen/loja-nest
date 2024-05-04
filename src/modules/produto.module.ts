import { Module } from "@nestjs/common";
import { ProdutoController } from "src/controllers/produto.controller";
import { ProdutoRepository } from "src/repositories/produto.repository";

@Module({
    controllers: [ProdutoController],
    providers: [ProdutoRepository]
})
export class ProdutoModule{}