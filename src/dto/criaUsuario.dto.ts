import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriaUsuarioDto {

    @IsNotEmpty({ message: 'O nome não pode ser vazio'})
    nome: string;

    @IsEmail(undefined, { message: 'O email precisa ser válido'})
    email: string;

    @MinLength(6, {message: 'A senha deve ter no mínimo 6 caracteres'})
    senha: string;
}