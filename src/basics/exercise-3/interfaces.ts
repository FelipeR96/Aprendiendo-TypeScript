//Interface: me sirve para crear la estructura de un objeto o definir un contrato para una clase.(interface todo es publico)
enum Rol {
    Junior,
    Middle,
    Senior
}

enum TipoContrato{
    Indefinido,
    TerminoFijo
}

//definir un contrato para una clase
interface IContrato {
    //propiedades opcionales -No es obligatorio que quien implemente escriba estas propiedades
    salario?:number;
    fechaInicio?: Date;
    //Propiedades obligatorias -Deben escribirse en la implementación
    rol: Rol;
    
    //Solo se crea la firma de los métodos, quien implemente debe definir
    //su funcionalidad
    //Métodos opcionales
    cancelar?(): void;

    //Métodos obligatorios
    pagar(): number;
    suspender(cantidad: number): void;

}



class ContratoUltraCredit implements IContrato {
    //atributos que debo tener de la interface ContratoJunior
    rol: Rol;
    salario?: number;
    //Atributos propios
    tipoContrato: TipoContrato;

    constructor() {
        this.tipoContrato = TipoContrato.Indefinido;
        this.rol = Rol.Junior;
    }

    pagar(): number {
        return 1000000;
    }
    suspender(cantidad: number): void {
        console.log(`Estas suspendido ${cantidad} dias.`);
        console.log('Información del contrato')
        // ?? Nullish coalescing operator - valida que la expresión de la izquierda sea diferente}
        //de null o undefined. Si es null o undefined devolvera la expresión de la derecha,
        //de lo contrario retorna el valor de la expresión de la izquierda
        console.log(`Tu salario es: ${this.salario ?? 1000}`)
        //Validando null, undefined, 0, false, '', NaN
        console.log(`Tu salario es: ${this.salario ? this.salario : 1000}`)
    }

}
class ContratoGlobal implements IContrato {
    salario?: number;
    fechaInicio?: Date;
    rol: Rol;

    constructor() {
        this.rol = Rol.Middle
    }
    cancelar?(): void {
        console.log(`Contrato Cancelado`);
    }
    pagar(): number {
        return 2000000;
    }
    suspender(cantidad: number): void {
        console.log(`Estas suspendido por: ${cantidad} meses`);
    }

}

//Son dos objetos de diferentes clases (implementaciones) pero de la misma interface
//Polimorfismo por Interface
const contratoJuan: IContrato = new ContratoGlobal();
const contratoJuana: IContrato = new ContratoUltraCredit();

const listaContartos = [contratoJuan, contratoJuana];

listaContartos.forEach((contrato: IContrato) => {

    console.log('==========================');
    contrato.suspender(3);
    console.log(typeof contrato );

    if(contrato instanceof ContratoUltraCredit){
        console.log(contrato.tipoContrato);
    } else if (contrato instanceof ContratoGlobal) {
        contrato.cancelar!()
    }
    console.log('==========================');

    

});
