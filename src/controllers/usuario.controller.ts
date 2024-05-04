import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "src/repositories/usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository){}
    
    @Post()
    async criaUsuario(@Body() dadosDoUsuario){
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    async mostraUsuarios(){
        return this.usuarioRepository.listar(); 
    }
}