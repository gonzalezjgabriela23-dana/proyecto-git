// ============================================
// 1. GENERADOR INFINITO (LAZY REAL)
// ============================================

function* infiniteProjects() {
  let id = 1;
  const types = ["Residencial", "Infraestructura", "Comercial"];

  while (true) {
    yield {
      id: id,
      name: `Proyecto ${id}`,
      type: types[id % 3],
      location: `Zona ${Math.ceil(id / 10)}`,
      budget: Math.floor(Math.random() * 90000) + 10000
    };
    id++;
  }
}

// ============================================
// 2. FUNCIONES AUXILIARES
// ============================================

// Saltar elementos
function skip(generator, n) {
  for (let i = 0; i < n; i++) {
    generator.next();
  }
}

// Tomar elementos
function take(generator, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const { value } = generator.next();
    result.push(value);
  }
  return result;
}

// ============================================
// 3. PAGINADOR AVANZADO
// ============================================

class AdvancedPaginator {
  constructor(totalItems = 100, perPage = 5) {
    this.totalItems = totalItems;
    this.perPage = perPage;
    this.currentPage = 1;
    this.filterType = "all";
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.perPage);
  }

  getPageData() {
    const generator = infiniteProjects();

    // Saltar hasta la página
    skip(generator, (this.currentPage - 1) * this.perPage);

    let items = take(generator, this.perPage);

    // Aplicar filtro
    if (this.filterType !== "all") {
      items = items.filter(p => p.type === this.filterType);
    }

    return items;
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prev() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goTo(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  setPerPage(n) {
    this.perPage = n;
    this.currentPage = 1;
  }

  setFilter(type) {
    this.filterType = type;
    this.currentPage = 1;
  }
}

// ============================================
// 4. INSTANCIA
// ============================================

const paginator = new AdvancedPaginator(90, 6);

// ============================================
// 5. DOM
// ============================================

const container = document.getElementById("item-list");
const info = document.getElementById("page-info");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const perPage = document.getElementById("items-per-page");
const filter = document.getElementById("filter-type");
const goToInput = document.getElementById("go-to-page");

// ============================================
// 6. RENDER
// ============================================

function render() {
  container.innerHTML = "";

  const data = paginator.getPageData();

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>🏗️ ${item.type}</p>
      <p>📍 ${item.location}</p>
      <p>💰 $${item.budget}</p>
    `;

    container.appendChild(card);
  });

  info.textContent = `Página ${paginator.currentPage} de ${paginator.totalPages}`;
}

// ============================================
// 7. EVENTOS
// ============================================

nextBtn.addEventListener("click", () => {
  paginator.next();
  render();
});

prevBtn.addEventListener("click", () => {
  paginator.prev();
  render();
});

perPage.addEventListener("change", (e) => {
  paginator.setPerPage(parseInt(e.target.value));
  render();
});

filter.addEventListener("change", (e) => {
  paginator.setFilter(e.target.value);
  render();
});

goToInput.addEventListener("change", (e) => {
  paginator.goTo(parseInt(e.target.value));
  render();
});

// ============================================
// 8. INIT
// ============================================

render();