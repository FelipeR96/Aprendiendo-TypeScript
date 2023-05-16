import { Construccion } from "./Construccion";

export class Comercial extends Construccion{
    private _catidad_ingresos!: number;

    public get catidad_ingresos(): number {
        return this._catidad_ingresos;
    }
    public set catidad_ingresos(catidad_ingresos: number) {
        this._catidad_ingresos = catidad_ingresos;
    }

    constructor(pisos: number, private _empleados: number){
        super(pisos);
        
    }

    public cantidad_empleados():number{
        return this._empleados;
    }
}