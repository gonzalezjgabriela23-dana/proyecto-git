/* ============================================
   PROYECTO SEMANA 05
   Dominio: Gestión de Proyectos de Construcción
   ============================================ */

// ============================================
// 1. DATOS DEL PROYECTO
// ============================================

const projectName = "Torre Empresarial Norte";
const budget = 2_000_000;
const workers = 40;
const category = "commercial"; // residential, commercial, industrial, infrastructure
const progress = 65; // porcentaje de avance
const isActive = true;

// Objeto con propiedades opcionales
const manager = {
  name: "Carlos Pérez",
  contact: {
    email: "carlos@empresa.com"
  }
};

// ============================================
// 2. CLASIFICACIÓN CON IF/ELSE
// ============================================
// Clasificar el proyecto según su avance

let projectStatus;

if (progress >= 80) {
  projectStatus = "Avanzado 🟢";
} else if (progress >= 40) {
  projectStatus = "En progreso 🟡";
} else {
  projectStatus = "Inicial 🔴";
}

// ============================================
// 3. OPERADOR TERNARIO
// ============================================

const executionStatus = isActive ? "En ejecución 🚧" : "Finalizado ✅";

// ============================================
// 4. SWITCH (TIPO DE PROYECTO)
// ============================================

let projectType;

switch (category) {
  case "residential":
    projectType = "Residencial 🏠";
    break;
  case "commercial":
    projectType = "Comercial 🏢";
    break;
  case "industrial":
    projectType = "Industrial 🏭";
    break;
  case "infrastructure":
    projectType = "Infraestructura 🛣️";
    break;
  default:
    projectType = "Otro 📌";
}

// ============================================
// 5. NULLISH COALESCING (??)
// ============================================

const projectDescription = null;
const finalDescription = projectDescription ?? "Sin descripción disponible";

// ============================================
// 6. OPTIONAL CHAINING (?.)
// ============================================

// Acceso seguro a propiedades del gerente
const managerEmail = manager?.contact?.email ?? "No disponible";

// ============================================
// 7. SALIDA (FICHA DEL PROYECTO)
// ============================================

const projectReport = `
========================================
🏗️ REPORTE DE PROYECTO DE CONSTRUCCIÓN
========================================

Nombre:        ${projectName}
Tipo:          ${projectType}
Presupuesto:   $${budget}
Trabajadores:  ${workers}
Avance:        ${progress}%

Estado:        ${executionStatus}
Clasificación: ${projectStatus}

Gerente:       ${manager.name}
Contacto:      ${managerEmail}

Descripción:   ${finalDescription}

========================================
`;

console.log(projectReport);

// ============================================
// FIN
// ============================================

console.log("✅ Clasificación completada correctamente");