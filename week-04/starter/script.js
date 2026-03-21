/* ============================================
   PROYECTO SEMANA 04
   Dominio: Gestión de Proyectos de Construcción
   ============================================ */

// ============================================
// 1. DATOS DEL PROYECTO (STRINGS)
// ============================================

const projectName = "   Edificio Central Plaza   ";
const category = "Construcción Comercial";
const description = "Proyecto de construcción de un edificio moderno con oficinas y locales comerciales.";
const projectCode = "PROJ-001";
const status = "En ejecución";

// ============================================
// 2. USO DE MÉTODOS DE STRING
// ============================================

// trim() → eliminar espacios innecesarios
const cleanName = projectName.trim();

// toUpperCase()
const nameUpper = cleanName.toUpperCase();

// toLowerCase()
const categoryLower = category.toLowerCase();

// includes() → validar contenido
const hasCommercial = category.includes("Comercial");

// startsWith()
const startsWithPROJ = projectCode.startsWith("PROJ");

// endsWith()
const endsWith001 = projectCode.endsWith("001");

// slice()
const shortDescription = description.slice(0, 50);

// replace()
const newDescription = description.replace("moderno", "innovador");

// repeat()
const separator = "=".repeat(45);

// ============================================
// 3. TARJETA / FICHA MULTILÍNEA
// ============================================

const projectCard = `
${separator}
🏗️  GESTIÓN DE PROYECTOS — FICHA
${separator}

Nombre:       ${nameUpper}
Categoría:    ${categoryLower}
Código:       ${projectCode}
Estado:       ${status}

Descripción:
${newDescription}

--- Validaciones ---
¿Es comercial?: ${hasCommercial}
¿Código inicia con PROJ?: ${startsWithPROJ}
¿Código termina en 001?: ${endsWith001}

--- Información adicional ---
Resumen: ${shortDescription}...
${separator}
`;

console.log(projectCard);

// ============================================
// 4. MENSAJE CORTO (NOTIFICACIÓN)
// ============================================

const notification = `
📢 Nuevo proyecto registrado: ${cleanName} (${projectCode})
`;

console.log(notification);

// ============================================
// FIN
// ============================================

console.log("✅ Generador de mensajes ejecutado correctamente");