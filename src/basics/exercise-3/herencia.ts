//Solo se puede heredad de una unica clase
class Animal {
    //(!)evitar la verificacion de Null y Undefined
    color!: string;
    especie!: string;
    peso!: number;
    tamanio!: string;

    constructor(){
        console.log('Creando un animal')
    }

    alimentarse(): void {
        console.log('Alimentandome');
    }
}

//La herencia se da gracias a la palabra reservada extends
class Gato extends Animal{

    constructor() {
        super();//para llamar el constructor de Animal

        console.log('Creando un Gato apartir de animal');
        
    }


}
class Perro extends Animal{

    constructor() {
        super();//para llamar el constructor de Animal

        console.log('Creando un Perro apartir de animal');
        
    }


}