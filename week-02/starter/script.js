/*
=========================================
Sistema de Gestión de Proyectos de Construcción
Semana 2 - Variables y Tipos de Datos
=========================================
*/

// ----------------------------
// VARIABLES CON CONST Y LET
// ----------------------------

// const se usa cuando el valor no cambiará
const nombreProyecto = "Edificio Inteligente";
const empresaConstructora = "Constructora Futuro";
const ciudadProyecto = "Medellín";

// number con numeric separator
const presupuestoTotal = 1_500_000_000;

// let se usa cuando el valor puede cambiar
let trabajadores = 50;
let proyectoActivo = true;

// null (valor intencionalmente vacío)
let fechaFinalizacion = null;

// undefined (variable declarada pero sin valor)
let supervisorProyecto;


// ----------------------------
// MOSTRAR INFORMACIÓN
// ----------------------------

console.log("=================================");
console.log(" SISTEMA DE GESTIÓN DE CONSTRUCCIÓN ");
console.log("=================================");

console.log("Proyecto:", nombreProyecto);
console.log("Empresa:", empresaConstructora);
console.log("Ciudad:", ciudadProyecto);
console.log("Presupuesto:", presupuestoTotal);
console.log("Trabajadores:", trabajadores);
console.log("Proyecto activo:", proyectoActivo);
console.log("Fecha de finalización:", fechaFinalizacion);
console.log("Supervisor:", supervisorProyecto);


// ----------------------------
// TYPEOF PARA IDENTIFICAR TIPOS
// ----------------------------

console.log("\nTIPOS DE DATOS");

console.log("nombreProyecto:", typeof nombreProyecto);
console.log("presupuestoTotal:", typeof presupuestoTotal);
console.log("proyectoActivo:", typeof proyectoActivo);
console.log("fechaFinalizacion:", typeof fechaFinalizacion);
console.log("supervisorProyecto:", typeof supervisorProyecto);


// ----------------------------
// CONVERSIÓN DE TIPOS
// ----------------------------

// convertir string a number
const trabajadoresTexto = "75";
const trabajadoresNumero = Number(trabajadoresTexto);

// convertir number a string
const presupuestoTexto = String(presupuestoTotal);

// convertir number a boolean
const proyectoBoolean = Boolean(trabajadores);

console.log("\nCONVERSIONES DE TIPOS");

console.log("Trabajadores (string):", trabajadoresTexto);
console.log("Trabajadores (number):", trabajadoresNumero);

console.log("Presupuesto convertido a string:", presupuestoTexto);

console.log("Boolean desde número:", proyectoBoolean);