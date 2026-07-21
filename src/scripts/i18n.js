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
  "Buscando mi primer puesto · Barcelona o remoto":
    "Looking for my first role · Barcelona or remote",
  "Hola, soy": "Hi, I'm",
  "Junior Unity Developer centrado en gameplay y juegos móviles. Acabo de publicar mi primer juego para Android, hecho de principio a fin con Unity y C#.":
    "Junior Unity Developer focused on gameplay and mobile games. I just shipped my first Android game, built end-to-end with Unity and C#.",
  "¿Hablamos?": "Shall we talk?",
  "Contactar": "Contact",
  "Scroll para explorar": "Scroll to explore",

  // ---------- Slider tecnológico (home) ----------
  "Stack Tecnológico": "Tech Stack",
  "Tecnologías que domino": "Technologies I master",
  "Especializado en gameplay y juegos móviles con Unity y C#, con base sólida en 3D y programación":
    "Focused on gameplay and mobile games with Unity and C#, with a solid base in 3D and programming",

  // ---------- About Home ----------
  "Disponible": "Available",
  "Sobre mí": "About me",
  "Del prototipo": "From prototype",
  "al juego publicado": "to shipped game",
  "Soy": "I'm",
  ", Junior Unity Developer centrado en": ", a Junior Unity Developer focused on",
  "gameplay y juegos móviles": "gameplay and mobile games",
  ". Construyo juegos para aprender a construirlos mejor, y":
    ". I build games to learn how to build better ones, and",
  "acabo de publicar el primero de principio a fin.":
    "I just shipped my first one end-to-end.",
  "Trabajo con": "I work with",
  "Unity, C#, ScriptableObjects, DOTween y builds de Android":
    "Unity, C#, ScriptableObjects, DOTween and Android builds",
  ", cuidando la separación entre lógica y presentación y el diseño orientado a datos.":
    ", with care for separating logic from presentation and for data-driven design.",
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
  "Ver Currículum": "View Resume",
  "Abierto a ofertas · Junior Unity Developer":
    "Open to offers · Junior Unity Developer",

  // ---------- FAQ (home) ----------
  "y mi trabajo": "and my work",
  "Conoce más sobre mi experiencia, habilidades y forma de trabajo":
    "Learn more about my experience, skills and way of working",
  "¿Qué tecnologías uso?": "What technologies do I use?",
  "Mi Experiencia": "My Experience",
  "Mi formación": "My education",
  "¿Cómo trabajo en equipo?": "How do I work in a team?",
  "Metodologías Ágiles": "Agile Methodologies",
  "Unity y C# a diario, con ScriptableObjects, DOTween y builds de Android. También C++, Blender, Maya, Substance Painter, Figma y Unreal.":
    "Unity and C# every day, with ScriptableObjects, DOTween and Android builds. Also C++, Blender, Maya, Substance Painter, Figma and Unreal.",
  "He publicado Air Bomb, mi primer juego para Android hecho en solitario de principio a fin, además de mi TFG y otros proyectos de videojuegos y herramientas interactivas.":
    "I shipped Air Bomb, my first Android game, built solo from start to finish, plus my final degree project and other video game and interactive tool projects.",
  "Grado en Diseño y Desarrollo de Videojuegos – CITM (UPC).":
    "Degree in Video Game Design and Development – CITM (UPC).",
  "Soy introvertido, pero me adapto a equipos multidisciplinarios usando metodologías ágiles y comunicación clara para coordinar tareas.":
    "I'm introverted, but I adapt to multidisciplinary teams using agile methodologies and clear communication to coordinate tasks.",
  "Scrum y Kanban para gestionar proyectos, sprints de desarrollo y revisiones, asegurando eficiencia y organización.":
    "Scrum and Kanban to manage projects, development sprints and reviews, ensuring efficiency and organization.",

  // ---------- FAQ (about) ----------
  "Más sobre": "More about",
  "mi trabajo": "my work",
  "Unity y C# como base del día a día, con ScriptableObjects, DOTween, persistencia en JSON y builds de Android. Además C++, Blender, Maya, Substance Painter, Figma, Photoshop y Unreal.":
    "Unity and C# as my day-to-day base, with ScriptableObjects, DOTween, JSON persistence and Android builds. Plus C++, Blender, Maya, Substance Painter, Figma, Photoshop and Unreal.",
  "He publicado Air Bomb, mi primer juego para Android, desarrollado en solitario de principio a fin. A eso sumo mi TFG y varios proyectos de videojuegos y herramientas interactivas.":
    "I shipped Air Bomb, my first Android game, developed solo from start to finish. On top of that, my final degree project and several video game and interactive tool projects.",
  "Grado en Diseño y Desarrollo de Videojuegos – CITM (UPC). Complementado con cursos y práctica autodidacta en programación, diseño 3D y desarrollo de gameplay.":
    "Degree in Video Game Design and Development – CITM (UPC). Complemented with courses and self-taught practice in programming, 3D design and gameplay development.",
  "Soy introvertido, pero me adapto bien a equipos multidisciplinarios usando metodologías ágiles y comunicación clara para coordinar tareas y alcanzar objetivos comunes.":
    "I'm introverted, but I adapt well to multidisciplinary teams using agile methodologies and clear communication to coordinate tasks and reach common goals.",
  "He trabajado con Scrum y Kanban para gestionar proyectos, sprints de desarrollo y revisiones, asegurando eficiencia, organización y entrega de resultados.":
    "I've worked with Scrum and Kanban to manage projects, development sprints and reviews, ensuring efficiency, organization and delivery of results.",

  // ---------- Footer ----------
  "Junior Unity Developer centrado en gameplay y juegos móviles. Barcelona o remoto.":
    "Junior Unity Developer focused on gameplay and mobile games. Barcelona or remote.",
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
  "centrado en": "focused on",
  ", y": ", and",
  "y": "and",
  "e": "and",

  "Acabo de publicar": "I just shipped",
  ", mi primer juego para Android, hecho en solitario de principio a fin con":
    ", my first Android game, built solo from start to finish with",
  "Unity y C#": "Unity and C#",
  ": arquitectura View/Controller, niveles data-driven con ScriptableObjects, comunicación por eventos, DOTween, persistencia en JSON y audio entre escenas.":
    ": View/Controller architecture, data-driven levels with ScriptableObjects, event-based communication, DOTween, JSON persistence and cross-scene audio.",

  "Lo que aporto:": "What I bring:",
  "programación de gameplay, sistemas de UI y builds de Android":
    "gameplay programming, UI systems and Android builds",
  ", con hábitos de arquitectura que separan lógica y presentación. A eso sumo la base de mi carrera:":
    ", with architecture habits that separate logic from presentation. On top of that, the foundation from my degree:",
  "C++, motores propios, VR/AR, 3D (Blender, 3ds Max, Maya) y UI/UX":
    "C++, custom engines, VR/AR, 3D (Blender, 3ds Max, Maya) and UI/UX",

  "Destaco por mi": "I stand out for my",
  "capacidad de trabajo independiente": "ability to work independently",
  ", mi disciplina depurando (stack traces, referencias de prefabs y pruebas en dispositivo real) y mi rapidez aprendiendo. Busco mi":
    ", my debugging discipline (stack traces, prefab reference hunting and testing on real devices) and how fast I learn. I'm looking for my",
  "primer puesto como Junior Unity / Gameplay Developer":
    "first role as a Junior Unity / Gameplay Developer",
  "en un estudio o equipo móvil, en Barcelona o en remoto.":
    "at a studio or mobile team, in Barcelona or remote.",

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

  // ---------- Fortalezas (about) ----------
  "Fortalezas": "Strengths",
  "En qué": "What I'm",
  "soy fuerte": "good at",
  "Lo que aporto hoy a un equipo que desarrolla juegos con Unity":
    "What I bring today to a team building games with Unity",
  "Sistemas jugables y mecánicas en Unity y C#: control del jugador, oleadas de enemigos, puntuación y game feel.":
    "Playable systems and mechanics in Unity and C#: player control, enemy waves, scoring and game feel.",
  "Arquitectura y código limpio": "Architecture & clean code",
  "Separación entre lógica y presentación, diseño orientado a datos con ScriptableObjects y comunicación por eventos.":
    "Separation of logic and presentation, data-driven design with ScriptableObjects and event-based communication.",
  "Builds de Android, sistemas de UI y HUD, persistencia en JSON y pruebas en dispositivo real.":
    "Android builds, UI and HUD systems, JSON persistence and testing on real devices.",

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
  "Mi primer juego publicado: shooter arcade para Android estilo Space Invaders, hecho en solitario de principio a fin. Arquitectura View/Controller, niveles data-driven con ScriptableObjects, comunicación por eventos, DOTween para el game feel, persistencia en JSON y audio entre escenas.":
    "My first shipped game: a Space Invaders-style arcade shooter for Android, built solo from start to finish. View/Controller architecture, data-driven levels with ScriptableObjects, event-based communication, DOTween for game feel, JSON persistence and cross-scene audio.",

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
