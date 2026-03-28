/* ============================================
   PROYECTO SEMANA 07
   Dominio: Gestión de Proyectos de Construcción
   Uso: Set, Map, WeakMap, WeakSet
============================================ */

// ============================================
// 1. ESTRUCTURAS PRINCIPALES
// ============================================

// Map → almacenar proyectos por ID
const projects = new Map();

// Set → evitar IDs duplicados
const projectIds = new Set();

// WeakSet → proyectos activos (en ejecución)
const activeProjects = new WeakSet();

// WeakMap → datos privados (presupuesto calculado / caché)
const privateData = new WeakMap();

// ============================================
// 2. REGISTRO DE PROYECTOS
// ============================================

function createProject(id, name, manager) {
  if (projectIds.has(id)) {
    console.log("❌ ID duplicado");
    return null;
  }

  const project = {
    id,
    name,
    manager,
    categories: new Set()
  };

  projects.set(id, project);
  projectIds.add(id);

  // Guardar datos privados
  privateData.set(project, {
    budgetCache: null,
    createdAt: new Date()
  });

  console.log("✅ Proyecto creado:", project);
  return project;
}

// ============================================
// 3. GESTIÓN DE CATEGORÍAS (SET)
// ============================================

function addCategory(project, category) {
  project.categories.add(category);
}

function removeCategory(project, category) {
  project.categories.delete(category);
}

function hasCategory(project, category) {
  return project.categories.has(category);
}

// ============================================
// 4. OPERACIONES DE CONJUNTOS
// ============================================

// Proyectos con una categoría específica
function getProjectsByCategory(category) {
  return [...projects.values()].filter(p =>
    p.categories.has(category)
  );
}

// Intersección: proyectos que tengan ambas categorías
function getProjectsByTwoCategories(cat1, cat2) {
  return [...projects.values()].filter(p =>
    p.categories.has(cat1) && p.categories.has(cat2)
  );
}

// Unión: proyectos con cualquiera de las categorías
function getProjectsUnion(cat1, cat2) {
  return [...projects.values()].filter(p =>
    p.categories.has(cat1) || p.categories.has(cat2)
  );
}

// ============================================
// 5. ESTADOS ACTIVOS (WEAKSET)
// ============================================

function activateProject(project) {
  activeProjects.add(project);
  console.log("🟢 Proyecto activo:", project.name);
}

function deactivateProject(project) {
  activeProjects.delete(project);
  console.log("🔴 Proyecto inactivo:", project.name);
}

function isActive(project) {
  return activeProjects.has(project);
}

// ============================================
// 6. CACHÉ (WEAKMAP)
// ============================================

function calculateBudget(project) {
  const data = privateData.get(project);

  if (data.budgetCache) {
    console.log("⚡ Usando caché...");
    return data.budgetCache;
  }

  console.log("⏳ Calculando presupuesto...");

  // Simulación cálculo costoso
  const result = Math.floor(Math.random() * 1000000);

  data.budgetCache = result;

  return result;
}

// ============================================
// 7. PRUEBAS EN CONSOLA
// ============================================

// Crear proyectos
const p1 = createProject("P001", "Edificio Central", "Ana");
const p2 = createProject("P002", "Puente Norte", "Carlos");

// Categorías
addCategory(p1, "Residencial");
addCategory(p1, "Alta Complejidad");

addCategory(p2, "Infraestructura");
addCategory(p2, "Alta Complejidad");

// Activar proyectos
activateProject(p1);

// Consultas
console.log("📌 Residenciales:", getProjectsByCategory("Residencial"));
console.log("📌 Complejos:", getProjectsByCategory("Alta Complejidad"));
console.log("📌 Ambas:", getProjectsByTwoCategories("Residencial", "Alta Complejidad"));

// Caché
console.log("💰 Presupuesto:", calculateBudget(p1));
console.log("💰 Presupuesto (cache):", calculateBudget(p1));

// Estado
console.log("¿Activo?", isActive(p1));