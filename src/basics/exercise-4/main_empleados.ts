import { EmpleadoPorHora } from './empleado_hora';
import { Empleado } from "./empleado";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";
import { TipoEmpleado } from './tipo_empleado.enum';

const empleadoTiempoCompleto: Empleado = new EmpleadoTiempoCompleto(
    'Felipe Reinales',
    123,
    1500000
);
empleadoTiempoCompleto.mostrarInformacion();
console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario()}`);
//cast
console.log(
    'Cast 1', (empleadoTiempoCompleto as  EmpleadoTiempoCompleto).salarioMensual
);

console.log(
    'Cast 2', (<EmpleadoTiempoCompleto>empleadoTiempoCompleto).salarioMensual
)

if (empleadoTiempoCompleto instanceof EmpleadoTiempoCompleto){
    console.log(empleadoTiempoCompleto.salarioMensual);
}

console.log('================================0')

const empleadoPorHora: Empleado = new EmpleadoPorHora(
    'Juanita Perez',
    456,
    TipoEmpleado.POR_HORA,
    2000000,
    5
)

empleadoPorHora.mostrarInformacion();
console.log(`Salario: ${empleadoPorHora.calcularSalario()}`);

