import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AtualizaUsuarioDto } from "src/dto/atualizaUsuario.dto";
import { CriaUsuarioDto } from "src/dto/criaUsuario.dto";
import { ListaUsuarioDto } from "src/dto/listaUsuario.dto";
import { UsuarioEntity } from "src/entities/usuario.entity";
import { UsuarioRepository } from "src/repositories/usuario.repository";
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository){}
    
    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDto){
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = uuid();
        this.usuarioRepository.salvar(usuarioEntity);
        return {usuario: new ListaUsuarioDto(usuarioEntity.id, usuarioEntity.nome), message: "usuário criado com sucesso"};
    }

    @Get()
    async mostraUsuarios(){
        const usuarioSalvos = await this.usuarioRepository.listar();
        const usuarioLista = usuarioSalvos.map(
            usuario => new ListaUsuarioDto(
                usuario.id,
                usuario.nome
            )
        );
        return usuarioLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDto){
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return {
            usuario: usuarioAtualizado,
            message: "usuário atualizado com sucesso"
        }
    }

    @Delete('/:id')
    async deletaUsuario(@Param('id') id:string){
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return{
            usuario: usuarioRemovido,
            message: 'usuário removido com sucesso'
        }
    }
}