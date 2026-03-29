const biomes = [
  {
    id: 1,
    title: "Tropical Rainforest",
    category: "forest",
    desc: "A dense, warm, and wet forest teeming with life. These biomes are home to more than half of the world's plant and animal species, featuring a complex canopy structure and high biodiversity.",
    img: "https://images.unsplash.com/photo-1602298674761-700e96568f5f?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Hot Desert",
    category: "arid",
    desc: "Characterized by extreme heat and very little rainfall. Despite the harsh conditions, deserts are full of specialized life forms adapted to conserve water and withstand high temperatures.",
    img: "https://images.unsplash.com/photo-1593139874844-851548500348?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Tundra",
    category: "cold",
    desc: "A vast, treeless plain found in the Arctic or on high mountains. The ground is often permanently frozen (permafrost), supporting only low-growing vegetation like mosses and lichens.",
    img: "https://plus.unsplash.com/premium_photo-1667119168145-a98fb5d9a275?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Savanna",
    category: "forest",
    desc: "A rolling grassland scattered with shrubs and isolated trees. It serves as a transition zone between a tropical forest and a desert, famous for its large herds of grazing animals.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  },
  {
    id: 5,
    title: "Marine Ocean",
    category: "water",
    desc: "The largest biome on Earth, covering over 70% of the planet's surface. It ranges from the sunlit surface waters to the dark, high-pressure depths of the abyss.",
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
  },
  {
    id: 6,
    title: "Alpine Mountain",
    category: "cold",
    desc: "High altitude environments where the climate is cold and windy. Vegetation is stunted due to the harsh conditions, creating unique ecosystems distinct from the valleys below.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
  {
    id: 7,
    title: "Temperate Forest",
    category: "forest",
    desc: "Found in regions with distinct seasons including warm summers and cold winters. These forests have a rich diversity of trees, shrubs, and wildlife adapted to seasonal changes.",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  },
  {
    id: 8,
    title: "Freshwater Lake",
    category: "water",
    desc: "Bodies of standing freshwater surrounded by land. Lakes support diverse ecosystems including fish, amphibians, and various plant species adapted to freshwater environments.",
    img: "https://images.unsplash.com/photo-1597711489398-9a422b31802e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "Mangrove Swamp",
    category: "water",
    desc: "Coastal wetlands found in tropical and subtropical regions. Mangroves have specialized roots that allow them to survive in saltwater and provide crucial habitat for marine life.",
    img: "https://images.unsplash.com/photo-1578142880638-9fc9aba285c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Boreal Forest",
    category: "cold",
    desc: "Also known as taiga, these forests are found in northern regions with long, cold winters. Dominated by coniferous trees, they store massive amounts of carbon.",
    img: "https://plus.unsplash.com/premium_photo-1670052605901-33b5340e8ad4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    title: "Coastal Desert",
    category: "arid",
    desc: "Deserts located along coastlines where cold ocean currents create fog but little rain. Despite the aridity, these deserts often have unique fog-dependent ecosystems.",
    img: "https://images.unsplash.com/photo-1773437686459-6a014664bbe1?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Coral Reef",
    category: "water",
    desc: "Underwater ecosystems built by colonies of tiny animals. Coral reefs are among the most diverse ecosystems on Earth, often called the rainforests of the sea.",
    img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
  },
];

let currentPage = 0;
let cardsPerPage = 6;
let filteredBiomes = [...biomes];

const gallery = document.getElementById("gallery");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTag = document.getElementById("modalTag");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const pageIndicator = document.getElementById("pageIndicator");

function getTotalPages() {
  return Math.ceil(filteredBiomes.length / cardsPerPage);
}

function renderBiomes() {
  gallery.innerHTML = "";
  const totalPages = getTotalPages();

  if (currentPage >= totalPages) {
    currentPage = Math.max(0, totalPages - 1);
  }

  const startIdx = currentPage * cardsPerPage;
  const endIdx = Math.min(startIdx + cardsPerPage, filteredBiomes.length);
  const pageBiomes = filteredBiomes.slice(startIdx, endIdx);

  pageBiomes.forEach((biome, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${biome.img}" alt="${biome.title}" class="card-img" loading="lazy">
            </div>
            <div class="card-content">
                <span class="card-tag">${biome.category}</span>
                <h3 class="card-title">${biome.title}</h3>
                <p class="card-desc">${biome.desc.substring(0, 80)}...</p>
            </div>
        `;

    card.addEventListener("click", () => openModal(biome));
    gallery.appendChild(card);
  });

  updateArrows();
  updatePageIndicator();
}

function updateArrows() {
  const totalPages = getTotalPages();

  if (currentPage === 0) {
    arrowLeft.classList.add("disabled");
  } else {
    arrowLeft.classList.remove("disabled");
  }

  if (currentPage >= totalPages - 1 || totalPages === 0) {
    arrowRight.classList.add("disabled");
  } else {
    arrowRight.classList.remove("disabled");
  }
}

function updatePageIndicator() {
  const totalPages = getTotalPages();
  pageIndicator.innerHTML = "";

  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("div");
    dot.className = `page-dot ${i === currentPage ? "active" : ""}`;
    dot.addEventListener("click", () => {
      currentPage = i;
      renderBiomes();
    });
    pageIndicator.appendChild(dot);
  }
}

function goToPreviousPage() {
  if (currentPage > 0) {
    currentPage--;
    renderBiomes();
  }
}

function goToNextPage() {
  const totalPages = getTotalPages();
  if (currentPage < totalPages - 1) {
    currentPage++;
    renderBiomes();
  }
}

arrowLeft.addEventListener("click", goToPreviousPage);
arrowRight.addEventListener("click", goToNextPage);

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("active")) return;

  if (e.key === "ArrowLeft") {
    goToPreviousPage();
  } else if (e.key === "ArrowRight") {
    goToNextPage();
  }
});

function openModal(biome) {
  modalImg.src = biome.img;
  modalTitle.textContent = biome.title;
  modalDesc.textContent = biome.desc;
  modalTag.textContent = biome.category;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModalFunc() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeModal.addEventListener("click", closeModalFunc);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModalFunc();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModalFunc();
  }
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    filteredBiomes =
      filter === "all"
        ? [...biomes]
        : biomes.filter((b) => b.category === filter);

    currentPage = 0;
    renderBiomes();
  });
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const width = window.innerWidth;
    if (width < 600) {
      cardsPerPage = 2;
    } else if (width < 900) {
      cardsPerPage = 4;
    } else {
      cardsPerPage = 6;
    }
    currentPage = 0;
    renderBiomes();
  }, 250);
});

document.addEventListener("mousemove", (e) => {
  const blobs = document.querySelectorAll(".blob");

  blobs.forEach((blob, index) => {
    const speed = (index + 1) * 20;
    const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
    const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

    blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });
});

// Initialize - Set initial cards per page
const initialWidth = window.innerWidth;
if (initialWidth < 600) {
  cardsPerPage = 2;
} else if (initialWidth < 900) {
  cardsPerPage = 4;
} else {
  cardsPerPage = 6;
}

renderBiomes();
