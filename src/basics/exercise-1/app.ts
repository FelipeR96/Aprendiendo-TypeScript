const teacher = {
    name: 'Felipe',
    lastName: 'Reinales'
};

console.log('teacher:', teacher);

// Primitivos
//BOOLEANS

//Declaración implícita
const isTeacher = true; // toma el valor con el qu fue declarado
let isPlayer = true; // toma el tipo del valor que se le asigno
//Declaración explicita
const hasError: boolean = false;
let isChampion: boolean = false;

let result = hasError ? 'Tiene errores' : 'No tiene errores';
//------------------------------------------------------------------

//STRING
const firstName = 'Felipe';
const lastName = 'Reinales';

let fullName = `Su nombre es: ${firstName} ${lastName}, bienvenido`
console.log(fullName.toUpperCase());

//NUMBER
let countStudents: number = 29;
let average: number = 4.5;

console.log(average.toFixed())
//------------------------------------------------------------------

//Otros tipos
//ARRAY
let fruit = ['pera','manzana']//implícita
let sports: string[] = ['futbol', 'baloncesto'];//explícitos
let students: Array<string> = ['Felipe', 'Juan']

//Funciones
//function,nombre de la función(parámetro: tipoDato): tipoDatoQueRetornaLaFunción {}
function validateValue(value: unknown): boolean{
    //unknown que es un tipo de dato desconocido
    //para cualquier validación que deba hacer con el dato
    //debo primero saber o validar que tipo de dato es
    if(typeof value === "string") {
        console.log(value.trim().toUpperCase());
    } else if(typeof value === 'number') {
        console.log(value.toFixed());
    }

    if(value === '') {
        return false;
    } else {
        return true;
    }
}


enum Role {//permite crear diccionarios
    Admin,
    Client,
    Users,
    SuperAdmin
}

let users: Array< {name : string, role : Role} > = [
    {
        name: 'pepito',
        role: Role.Admin
    },
    {
        name: 'juanito',
        role: Role.Client
    },
    {
        name : 'fulanito',
        role : Role.Client
    }
]

console.log(users.filter((user) => user.role === Role.Client));