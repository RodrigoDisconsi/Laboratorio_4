export class Usuario {
    public id:number;
    public sexo:string;
    public email:string;
    public nombre:string;
    public apellido:string;
    public fechaNac:Date;
    public fotoPerfil:string;

    public hola(): string{
        return "hola";
    }
}
