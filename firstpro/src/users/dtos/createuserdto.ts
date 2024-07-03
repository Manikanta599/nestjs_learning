import { IsEmail, IsNotEmpty } from "class-validator";

export class createuserdto {

    @IsNotEmpty()

    username:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;
}