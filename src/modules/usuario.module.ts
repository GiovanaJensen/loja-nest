import { Module } from "@nestjs/common";
import { UsuarioController } from "src/controllers/usuario.controller";
import { UsuarioRepository } from "src/repositories/usuario.repository";
import { EmailEhUnicoValidator } from "src/validations/email-eh-unico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailEhUnicoValidator]
})
export class UsuarioModule {}