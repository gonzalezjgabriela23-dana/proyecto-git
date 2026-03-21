/*
===========================================
Sistema de Gestión de Proyectos de Construcción
===========================================
*/

// -----------------------------
// ENTRADA (Datos del proyecto)
// -----------------------------

// Datos tipo STRING
const nombreProyecto = "Construcción Edificio Horizonte";
const ubicacion = "Medellín";
const empresa = "Constructora Futuro";

// Datos tipo NUMBER
const presupuesto = 500000000;
const duracionMeses = 24;
const trabajadores = 60;

// Datos tipo BOOLEAN
const proyectoActivo = true;


// -----------------------------
// PROCESO
// -----------------------------

// Expresión para calcular el costo aproximado por trabajador
const costoPorTrabajador = presupuesto / trabajadores;


// -----------------------------
// SALIDA (Mostrar información)
// -----------------------------

console.log("======================================");
console.log(" SISTEMA DE GESTIÓN DE CONSTRUCCIÓN ");
console.log("======================================");

console.log("Proyecto:", nombreProyecto);
console.log("Ubicación:", ubicacion);
console.log("Empresa constructora:", empresa);

console.log("Presupuesto total:", presupuesto);
console.log("Duración del proyecto (meses):", duracionMeses);
console.log("Cantidad de trabajadores:", trabajadores);

console.log("¿El proyecto está activo?:", proyectoActivo);

console.log("--------------------------------------");
console.log("Costo estimado por trabajador:", costoPorTrabajador);
console.log("--------------------------------------");


// -----------------------------
// Verificación de tipos de datos
// -----------------------------

console.log("Tipo de nombreProyecto:", typeof nombreProyecto);
console.log("Tipo de presupuesto:", typeof presupuesto);
console.log("Tipo de proyectoActivo:", typeof proyectoActivo);

    