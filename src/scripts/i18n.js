// ============================================================
//  i18n - Traducción ES -> EN en el cliente
//  - El sitio se renderiza en español (idioma por defecto).
//  - Al activar inglés, se recorre el DOM y se traduce el texto.
//  - La preferencia se guarda en localStorage ("lang").
//  - Al volver a español simplemente recargamos (render nativo ES).
// ============================================================

// Diccionario: texto en español (normalizado: sin saltos de línea,
// espacios colapsados y sin espacios al inicio/fin) -> texto en inglés.
const DICT = {
  // ---------- Navbar ----------
  "Inicio": "Home",
  "Proyectos": "Projects",
  "Sobre Mí": "About Me",
  "Contacto": "Contact",

  // ---------- Header (home) ----------
  "Disponible para proyectos": "Available for projects",
  "Hola, soy": "Hi, I'm",
  "Explora mis proyectos, conoce un poco más sobre mí y, si deseas ponerte en contacto,":
    "Explore my projects, learn a little more about me and, if you'd like to get in touch,",
  "¡estoy a solo un mensaje de distancia!": "I'm just one message away!",
  "Contactar": "Contact",
  "Scroll para explorar": "Scroll to explore",

  // ---------- Slider tecnológico (home) ----------
  "Stack Tecnológico": "Tech Stack",
  "Tecnologías que domino": "Technologies I master",
  "Especializado en desarrollo de videojuegos con Unity, modelado 3D y programación":
    "Specialized in video game development with Unity, 3D modeling and programming",

  // ---------- About Home ----------
  "Disponible": "Available",
  "Sobre mí": "About me",
  "Creando experiencias": "Creating unique",
  "digitales únicas": "digital experiences",
  "Soy": "I'm",
  ", desarrollador y diseñador de videojuegos y experiencias digitales. Me apasiona crear interfaces, herramientas y juegos que":
    ", a video game and digital experience developer and designer. I love creating interfaces, tools and games that",
  "conectan visualmente con el usuario.": "connect visually with the user.",
  "Trabajo con": "I work with",
  "y más. Me gusta convertir ideas en experiencias reales que impactan y entretienen.":
    "and more. I like turning ideas into real experiences that impact and entertain.",
  "Conocer más sobre mí": "Learn more about me",

  // ---------- Skills (about) ----------
  "Tecnologías": "Technologies",
  "Herramientas y lenguajes que domino para crear experiencias digitales":
    "Tools and languages I master to create digital experiences",

  // ---------- Proyectos destacados (home) ----------
  "Una selección de mis trabajos más recientes en desarrollo de videojuegos y experiencias interactivas":
    "A selection of my most recent work in video game development and interactive experiences",
  "¿Quieres ver más de mi trabajo?": "Want to see more of my work?",
  "Ver todos los proyectos": "View all projects",
  "Proyectos completados": "Completed projects",
  "Pasión": "Passion",

  // ---------- Banner CTA ----------
  "¿Trabajamos": "Shall we work",
  "juntos?": "together?",
  "Estoy disponible para nuevas oportunidades.": "I'm available for new opportunities.",
  "¡Hablemos y creemos algo increíble!": "Let's talk and create something amazing!",
  "Contáctame": "Contact me",
  "Ver Curriculum": "View Resume",

  // ---------- FAQ (home) ----------
  "y mi trabajo": "and my work",
  "Conoce más sobre mi experiencia, habilidades y forma de trabajo":
    "Learn more about my experience, skills and way of working",
  "¿Qué tecnologías uso?": "What technologies do I use?",
  "Mi Experiencia": "My Experience",
  "Mi formación": "My education",
  "¿Cómo trabajo en equipo?": "How do I work in a team?",
  "Metodologías Ágiles": "Agile Methodologies",
  "Unity, C++, Blender, Maya, Substance Painter, Figma, 3Dmax, C#, Photoshop, Unreal...":
    "Unity, C++, Blender, Maya, Substance Painter, Figma, 3Dmax, C#, Photoshop, Unreal...",
  "He trabajado en mi TFG y en varios proyectos de videojuegos y herramientas interactivas, creando sistemas jugables y diseños funcionales.":
    "I've worked on my final degree project and on several video game and interactive tool projects, creating playable systems and functional designs.",
  "Grado en Diseño y Desarrollo de Videojuegos – CITM (UPC).":
    "Degree in Video Game Design and Development – CITM (UPC).",
  "Soy introvertido, pero me adapto a equipos multidisciplinarios usando metodologías ágiles y comunicación clara para coordinar tareas.":
    "I'm introverted, but I adapt to multidisciplinary teams using agile methodologies and clear communication to coordinate tasks.",
  "Scrum y Kanban para gestionar proyectos, sprints de desarrollo y revisiones, asegurando eficiencia y organización.":
    "Scrum and Kanban to manage projects, development sprints and reviews, ensuring efficiency and organization.",

  // ---------- FAQ (about) ----------
  "Más sobre": "More about",
  "mi trabajo": "my work",
  "Actualmente trabajo con Unity, C#, C++, Blender, Maya, Substance Painter, Figma, 3Dmax, Astro, Photoshop y Unreal, entre otras herramientas para desarrollo de videojuegos y experiencias digitales.":
    "I currently work with Unity, C#, C++, Blender, Maya, Substance Painter, Figma, 3Dmax, Astro, Photoshop and Unreal, among other tools for video game and digital experience development.",
  "He trabajado en mi TFG y en varios proyectos de videojuegos y herramientas interactivas, creando sistemas jugables, diseños funcionales y experiencias de usuario inmersivas.":
    "I've worked on my final degree project and on several video game and interactive tool projects, creating playable systems, functional designs and immersive user experiences.",
  "Grado en Diseño y Desarrollo de Videojuegos – CITM (UPC). Complementado con cursos y práctica autodidacta en programación, diseño 3D y desarrollo de gameplay.":
    "Degree in Video Game Design and Development – CITM (UPC). Complemented with courses and self-taught practice in programming, 3D design and gameplay development.",
  "Soy introvertido, pero me adapto bien a equipos multidisciplinarios usando metodologías ágiles y comunicación clara para coordinar tareas y alcanzar objetivos comunes.":
    "I'm introverted, but I adapt well to multidisciplinary teams using agile methodologies and clear communication to coordinate tasks and reach common goals.",
  "He trabajado con Scrum y Kanban para gestionar proyectos, sprints de desarrollo y revisiones, asegurando eficiencia, organización y entrega de resultados.":
    "I've worked with Scrum and Kanban to manage projects, development sprints and reviews, ensuring efficiency, organization and delivery of results.",

  // ---------- Footer ----------
  "Desarrollador y diseñador de videojuegos, creando experiencias digitales únicas e innovadoras.":
    "Video game developer and designer, creating unique and innovative digital experiences.",
  "Navegación": "Navigation",
  "Videojuegos": "Video Games",
  "Modelado 3D": "3D Modeling",
  "© 2025 Nixon. Todos los derechos reservados.": "© 2025 Nixon. All rights reserved.",
  "Privacidad": "Privacy",
  "Términos": "Terms",
  "Hecho con": "Made with",
  "usando Astro": "using Astro",

  // ---------- Hero genérico (about / títulos de página) ----------
  "Sobre Mi": "About Me",

  // ---------- About Me (página) ----------
  "Mi nombre es": "My name is",
  "graduado en Diseño y Desarrollo de Videojuegos": "a graduate in Video Game Design and Development",
  "por el": "from",
  ", con un enfoque equilibrado entre": ", with a balanced focus between",
  "programación": "programming",
  "y": "and",
  "e": "and",
  "diseño": "design",
  "Manejo lenguajes como": "I work with languages such as",
  ", además de herramientas especializadas en arte y 3D como":
    ", as well as specialized art and 3D tools such as",
  ". También cuento con experiencia en motores y tecnologías como":
    ". I also have experience with engines and technologies such as",
  "Unity, VR/AR y desarrollo de herramientas": "Unity, VR/AR and tool development",
  "Me apasiona crear": "I'm passionate about creating",
  "experiencias interactivas": "interactive experiences",
  ", ya sea en": ", whether in",
  "realidad virtual": "virtual reality",
  "o en aplicaciones y videojuegos tradicionales. Disfruto convertir ideas en mecánicas, sistemas y entornos que se sientan vivos.":
    "or in traditional apps and video games. I enjoy turning ideas into mechanics, systems and environments that feel alive.",
  "Destaco por mi": "I stand out for my",
  "capacidad de trabajo independiente": "ability to work independently",
  ", mi facilidad para aprender nuevas tecnologías y mi rápida adaptación a":
    ", my ease in learning new technologies and my quick adaptation to",
  "entornos modernos de desarrollo": "modern development environments",
  ". Estoy en una búsqueda constante de": ". I'm in a constant search for",
  "crecimiento profesional": "professional growth",
  "y de mejorar mis habilidades para aportar valor en cada proyecto que realizo.":
    "and improving my skills to add value to every project I work on.",

  // ---------- Experiencia (about) ----------
  "Experiencia": "Experience",
  "Mi": "My",
  "Soporte Técnico IT": "IT Technical Support",
  "Mar 2025 - Ago 2025": "Mar 2025 - Aug 2025",
  "Creación de formularios PDF interactivos, edición de vídeos institucionales y desarrollo de materiales gamificados sobre ciberseguridad en el COAC":
    "Creation of interactive PDF forms, editing of institutional videos and development of gamified materials on cybersecurity at the COAC",
  "Diseño y desarrollo de formularios PDF interactivos utilizando herramientas avanzadas de edición y automatización.":
    "Design and development of interactive PDF forms using advanced editing and automation tools.",
  "Edición y preparación de vídeos institucionales siguiendo la línea gráfica y los estándares del COAC.":
    "Editing and preparation of institutional videos following the COAC's graphic line and standards.",
  "Creación de materiales gamificados enfocados en la concienciación sobre ciberseguridad.":
    "Creation of gamified materials focused on cybersecurity awareness.",

  // ---------- Features / Servicios (about) ----------
  "Servicios": "Services",
  "Lo que puedo": "What I can",
  "hacer por ti": "do for you",
  "Especializado en desarrollo de videojuegos y experiencias interactivas de alta calidad":
    "Specialized in high-quality video game and interactive experience development",
  "Desarrollo de sistemas jugables, mecánicas innovadoras y experiencias de usuario fluidas en Unity y C#.":
    "Development of playable systems, innovative mechanics and smooth user experiences in Unity and C#.",
  "Diseño de niveles, balanceo de mecánicas y creación de experiencias inmersivas que enganchan al jugador.":
    "Level design, mechanics balancing and creation of immersive experiences that hook the player.",
  "UI/UX para Juegos": "UI/UX for Games",
  "Interfaces intuitivas, menús optimizados y HUD que mejoran la experiencia del jugador.":
    "Intuitive interfaces, optimized menus and HUDs that improve the player's experience.",

  // ---------- Banner GitHub (about) ----------
  "¡Visita mi": "Visit my",
  "Explora mis proyectos, contribuciones y código abierto.":
    "Explore my projects, contributions and open source code.",
  "Descubre cómo trabajo y qué he creado.": "Discover how I work and what I've created.",
  "Ir a GitHub": "Go to GitHub",
  "Proyectos públicos": "Public projects",
  "Código de calidad": "Quality code",

  // ---------- Página Proyectos ----------
  "Mis": "My",
  "Una colección de mis trabajos en desarrollo de videojuegos y experiencias interactivas":
    "A collection of my work in video game development and interactive experiences",
  "Todos": "All",
  "Ver más proyectos": "Load more projects",
  "Código": "Code",
  "Sistema de Fragmentación 3D en Tiempo Real": "Real-Time 3D Fragmentation System",
  "Mate realista hecho en blender": "Realistic mate made in Blender",
  "Shooter arcade para Android al estilo Space Invaders":
    "Space Invaders-style arcade shooter for Android",
  "Shooter arcade para Android al estilo Space Invaders: defiende la galaxia superando oleadas y persigue la puntuación máxima.":
    "Space Invaders-style arcade shooter for Android: defend the galaxy through escalating waves and chase the high score.",

  // ---------- Página Contacto ----------
  "★ ¡HOLA! ★ OPEN TO WORK ★ LET'S CREATE MAGIC ★":
    "★ HELLO! ★ OPEN TO WORK ★ LET'S CREATE MAGIC ★",
  "DISPONIBLE": "AVAILABLE",
  "Jugar Snake": "Play Snake",
  "🎮 Gana XP interactuando con los links ✨":
    "🎮 Earn XP by interacting with the links ✨",

  // ---------- Página 404 ----------
  "Página no encontrada": "Page not found",
  "El enlace al que intentaste acceder no existe o fue movido.":
    "The link you tried to access doesn't exist or was moved.",
  "Pero tranquilo, podés volver al inicio y seguir navegando.":
    "But don't worry, you can go back home and keep browsing.",
  "Volver al inicio": "Back to home",
  "Ver proyectos": "View projects",
};

const STORAGE_KEY = "lang";

function getLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function setLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

// ¿Debe ignorarse este nodo de texto? (scripts, estilos, el propio botón,
// el efecto typewriter marcado como .notranslate, o bloques con data-en).
function shouldSkip(parent) {
  return (
    !parent ||
    parent.closest(
      'script, style, noscript, .notranslate, [data-en], #lang-toggle, #lang-toggle-mobile'
    )
  );
}

// Traduce todos los nodos de texto dentro de root usando el diccionario.
function translateTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (shouldSkip(node.parentElement)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  for (const node of nodes) {
    const raw = node.nodeValue;
    const m = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!m) continue;
    const [, lead, core, trail] = m;
    const key = core.replace(/\s+/g, " "); // normaliza espacios internos
    const translation = DICT[key];
    if (translation) node.nodeValue = lead + translation + trail;
  }
}

// Aplica los overrides declarados con data-en (titulos partidos, orden, etc.)
function applyDataOverrides(root) {
  const els = root.querySelectorAll ? root.querySelectorAll("[data-en]") : [];
  els.forEach((el) => {
    if (el.dataset.es === undefined) el.dataset.es = el.textContent;
    el.textContent = el.dataset.en;
  });
}

function translate(root) {
  applyDataOverrides(root);
  translateTextNodes(root);
}

// Observa contenido que aparece tarde (islas React con client:visible, etc.)
function startObserver() {
  const observer = new MutationObserver((mutations) => {
    if (getLang() !== "en") return;
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          translate(node);
        } else if (node.nodeType === Node.TEXT_NODE && !shouldSkip(node.parentElement)) {
          translateTextNodes(node.parentElement || document.body);
        }
      });
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function updateToggleLabels() {
  const next = getLang() === "en" ? "ES" : "EN";
  document.querySelectorAll(".lang-toggle-label").forEach((el) => {
    el.textContent = next;
  });
}

function onToggleClick() {
  if (getLang() === "en") {
    // Volver a español: render nativo recargando.
    setLang("es");
    location.reload();
  } else {
    // Pasar a inglés: traducir en caliente, sin recargar.
    setLang("en");
    document.documentElement.lang = "en";
    translate(document.body);
    updateToggleLabels();
  }
}

function init() {
  document.documentElement.lang = getLang();
  if (getLang() === "en") translate(document.body);
  updateToggleLabels();
  startObserver();

  document
    .querySelectorAll("#lang-toggle, #lang-toggle-mobile")
    .forEach((btn) => btn.addEventListener("click", onToggleClick));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
