/* ============================================
   PROYECTO SEMANA 06
   Dominio: Gestión de Proyectos de Construcción
   ============================================ */

// ============================================
// 1. PATRONES REGEXP
// ============================================

const patterns = {
  name: /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
  budget: /^\d{4,}$/, // mínimo 4 cifras
  projectCode: /^PROJ-\d{3}$/,
  date: /^\d{4}-\d{2}-\d{2}$/
};

// ============================================
// 2. SANITIZACIÓN (SEGURIDAD)
// ============================================

function sanitizeInput(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================
// 3. VALIDADORES
// ============================================

const validators = {

  validateName(value) {
    const clean = sanitizeInput(value.trim());
    const isValid = patterns.name.test(clean);

    return {
      isValid,
      message: isValid ? "Nombre válido" : "Solo letras (2-50 caracteres)",
      formatted: clean
    };
  },

  validateEmail(value) {
    const clean = sanitizeInput(value.trim());
    const isValid = patterns.email.test(clean);

    return {
      isValid,
      message: isValid ? "Email válido" : "Correo inválido",
      formatted: clean
    };
  },

  validatePhone(value) {
    const clean = value.replace(/[^\d+]/g, "");

    let formatted = clean;

    if (clean.length >= 12) {
      formatted = clean.replace(
        /^(\+\d{2})(\d{3})(\d{3})(\d{3})$/,
        "$1 $2 $3 $4"
      );
    }

    const isValid = patterns.phone.test(formatted);

    return {
      isValid,
      message: isValid ? "Teléfono válido" : "Formato: +57 300 123 456",
      formatted
    };
  },

  validatePassword(value) {
    const isValid = patterns.password.test(value);

    return {
      isValid,
      message: isValid
        ? "Contraseña segura"
        : "Mín 8 chars, mayúscula, número y símbolo",
      formatted: value
    };
  },

  validateBudget(value) {
    const isValid = patterns.budget.test(value);

    return {
      isValid,
      message: isValid ? "Presupuesto válido" : "Debe ser un número mayor a 1000",
      formatted: value
    };
  },

  validateProjectCode(value) {
    const clean = value.toUpperCase();
    const isValid = patterns.projectCode.test(clean);

    return {
      isValid,
      message: isValid ? "Código válido" : "Formato: PROJ-001",
      formatted: clean
    };
  },

  validateDate(value) {
    const isValid = patterns.date.test(value);

    return {
      isValid,
      message: isValid ? "Fecha válida" : "Formato YYYY-MM-DD",
      formatted: value
    };
  }
};

// ============================================
// 4. FORTALEZA DE CONTRASEÑA
// ============================================

function getPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  return score;
}

// ============================================
// 5. MANEJO DEL DOM
// ============================================

const form = document.getElementById("item-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("item-name").value;
  const email = document.getElementById("item-email").value;
  const phone = document.getElementById("item-phone").value;
  const password = document.getElementById("item-password").value;
  const budget = document.getElementById("item-budget").value;
  const code = document.getElementById("item-code").value;
  const date = document.getElementById("item-date").value;

  const results = [
    validators.validateName(name),
    validators.validateEmail(email),
    validators.validatePhone(phone),
    validators.validatePassword(password),
    validators.validateBudget(budget),
    validators.validateProjectCode(code),
    validators.validateDate(date)
  ];

  const hasError = results.some(r => !r.isValid);

  if (hasError) {
    alert("❌ Hay errores en el formulario");
  } else {
    alert("✅ Proyecto registrado correctamente");
  }
});

// ============================================
// 6. VALIDACIÓN EN TIEMPO REAL
// ============================================

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    const value = input.value;

    let result;

    switch (input.id) {
      case "item-name":
        result = validators.validateName(value);
        break;
      case "item-email":
        result = validators.validateEmail(value);
        break;
      case "item-phone":
        result = validators.validatePhone(value);
        input.value = result.formatted;
        break;
      case "item-password":
        result = validators.validatePassword(value);
        break;
      case "item-budget":
        result = validators.validateBudget(value);
        break;
      case "item-code":
        result = validators.validateProjectCode(value);
        input.value = result.formatted;
        break;
      case "item-date":
        result = validators.validateDate(value);
        break;
    }

    if (result) {
      input.style.borderColor = result.isValid ? "green" : "red";
    }
  });
});