/* ============================================
   PROYECTO SEMANA 03
   Dominio: Gestión de Proyectos de Construcción
   ============================================ */

// ============================================
// DATOS DEL PROYECTO
// ============================================

const project = {
  name: "Edificio Central Plaza",
  budget: 1_500_000, // separador numérico
  workers: 25,
  days: 120,
  costPerWorker: 80, // costo diario por trabajador
  materialsCost: 300_000,
  completed: false
};

// ============================================
// 1. OPERACIONES ARITMÉTICAS
// ============================================

// Costo total de mano de obra
const laborCost = project.workers * project.days * project.costPerWorker;

// Costo total del proyecto
const totalCost = laborCost + project.materialsCost;

// Promedio diario de gasto
const dailyAverage = totalCost / project.days;

// Resto del presupuesto
const remainingBudget = project.budget - totalCost;

// Uso de módulo (%)
const extraWorkers = project.workers % 4;

// ============================================
// MOSTRAR RESULTADOS
// ============================================

console.log("📊 === CÁLCULOS DEL PROYECTO ===");
console.log(`Proyecto: ${project.name}`);
console.log(`Costo de mano de obra: $${laborCost}`);
console.log(`Costo total: $${totalCost}`);
console.log(`Promedio diario: $${dailyAverage}`);
console.log(`Presupuesto restante: $${remainingBudget}`);
console.log(`Trabajadores sobrantes (módulo): ${extraWorkers}`);

// ============================================
// 2. OPERADORES DE ASIGNACIÓN COMPUESTA
// ============================================

let updatedBudget = project.budget;

// Se agregan costos adicionales
updatedBudget -= 50_000; // gasto extra
updatedBudget += 20_000; // ingreso adicional
updatedBudget *= 1.05;   // aumento por inflación
updatedBudget /= 1.02;   // ajuste financiero

console.log("\n💰 === PRESUPUESTO ACTUALIZADO ===");
console.log(`Nuevo presupuesto: $${updatedBudget}`);

// ============================================
// 3. COMPARACIÓN ESTRICTA
// ============================================

// Validar si el proyecto está terminado
if (project.completed === true) {
  console.log("\n✅ El proyecto está finalizado");
} else {
  console.log("\n🚧 El proyecto sigue en ejecución");
}

// Comparar presupuesto
if (totalCost > project.budget) {
  console.log("❌ El proyecto excede el presupuesto");
} else {
  console.log("✔️ El proyecto está dentro del presupuesto");
}

// ============================================
// 4. OPERADORES LÓGICOS
// ============================================

// Condición para aplicar descuento
const applyDiscount =
  totalCost > 1_000_000 && project.workers >= 20;

if (applyDiscount) {
  console.log("\n💸 Se aplica descuento por proyecto grande");
} else {
  console.log("\n⚠️ No aplica descuento");
}

// Condición OR
const highRisk =
  totalCost > project.budget || project.days > 150;

if (highRisk) {
  console.log("🚨 Proyecto en riesgo");
} else {
  console.log("✅ Proyecto bajo control");
}

// Operador NOT
const isNotCompleted = !project.completed;

console.log(`\nEstado invertido (NOT): ${isNotCompleted}`);

// ============================================
// FIN DEL PROYECTO
// ============================================

console.log("\n🎉 Sistema de cálculo finalizado correctamente");