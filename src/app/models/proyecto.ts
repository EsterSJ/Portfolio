export class Proyecto{
    public nombre: string;
    public foto: string;
    public explicacion: string;
    public url: string;
    public github: string;

    constructor(nombre: string, foto: string, explicacion: string, url: string, github: string){
        this.nombre = nombre;
        this.foto = foto;
        this.explicacion = explicacion;
        this.url = url;
        this.github = github;
    }
}