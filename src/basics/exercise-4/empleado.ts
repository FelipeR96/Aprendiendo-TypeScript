/**
 * Una clase abstracta en typesrcript es una clase que de la que no se puede crear instancias y que 
 * puede contener miembros o metodos abstractos que deben ser implementados en la subclase. Tambien puede tener 
 * propiedades o metodos que tengan ya una implementacion y los cuales seran eredados por la subclase (Herencia).
 * Tambien se puede sobreescribir los metodos y se puede marcar con la palabra reservada override. Permite el uso
 * de modificadores de acceso 
 */

export abstract class Empleado {

    abstract tipoEmpleado: string;

    constructor (public nommbre: string, public id: number){   
    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.nommbre}, ID ${this.id}`);
    }

    //Firma de un metodo - quien use la clase base debe implementar
    public abstract calcularSalario(): number;
}