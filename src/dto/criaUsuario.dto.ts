import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "src/validations/email-eh-unico.validator";

export class CriaUsuarioDto {

    @IsNotEmpty({ message: 'O nome não pode ser vazio'})
    nome: string;

    @IsEmail(undefined, { message: 'O email precisa ser válido'})
    @EmailEhUnico({message: "Já existe um usuário com este e-mail"})
    email: string;

    @MinLength(6, {message: 'A senha deve ter no mínimo 6 caracteres'})
    senha: string;
}