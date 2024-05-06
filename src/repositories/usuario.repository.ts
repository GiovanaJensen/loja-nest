import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
    private usuarios = [];

    async salvar(usuario){
        this.usuarios.push(usuario);
        console.log(this.usuarios);
    }

    async listar(){
        return this.usuarios;
    }

    async existeEmail(email: string){
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }
}