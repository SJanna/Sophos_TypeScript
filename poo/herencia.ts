class Figura2{
    private perimetro!: number; // El signo ! indica que el campo no puede ser nulo
    private area!: number;
    protected volumen!: number;

    public getarea():number{
        return this.area;
    }
    public getperimetro():number{
        return this.perimetro;
    }
}

class Cuadrado extends Figura2{
    private lado!:number;
    constructor(lado:number){
        super();
        this.lado=lado;
        this.volumen = 8;
    }
}

let cuadrado1:Cuadrado = new Cuadrado(5);
