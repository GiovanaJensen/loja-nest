import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailEhUnico } from "src/validations/email-eh-unico.validator";

export class AtualizaUsuarioDto {

    @IsNotEmpty({ message: 'O nome não pode ser vazio'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: 'O email precisa ser válido'})
    @EmailEhUnico({message: "Já existe um usuário com este e-mail"})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'A senha deve ter no mínimo 6 caracteres'})
    @IsOptional()
    senha: string;
}