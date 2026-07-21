// ============================================================
//  i18n - Traduccion EN -> ES en el cliente
//  - El sitio se sirve en INGLES (idioma por defecto).
//  - Al activar espanol, se recorre el DOM y se traduce el texto.
//  - La preferencia se guarda en localStorage ("lang").
//  - Al volver a ingles simplemente recargamos (render nativo EN).
// ============================================================

// Diccionario: texto en ingles (normalizado: sin saltos de linea,
// espacios colapsados y sin espacios al inicio/fin) -> texto en espanol.
const DICT = {
  // ---------- CV (texto comprimido a una pagina) ----------
  "Junior Unity Developer focused on gameplay and mobile. Shipped Air Bomb, an arcade shooter for Android, built solo end-to-end with Unity and C#. Video Game Design and Development graduate (CITM – UPC). Looking for a first role as Junior Unity / Gameplay Developer, in Barcelona or remote.":
    "Junior Unity Developer centrado en gameplay y móvil. He publicado Air Bomb, un shooter arcade para Android, hecho en solitario de principio a fin con Unity y C#. Graduado en Diseño y Desarrollo de Videojuegos (CITM – UPC). Busco mi primer puesto como Junior Unity / Gameplay Developer, en Barcelona o en remoto.",
  "Designed gamified cybersecurity training for staff — applying game mechanics to real-world learning.":
    "Diseño de formación gamificada en ciberseguridad para el personal, aplicando mecánicas de juego a aprendizaje real.",
  "Built interactive PDF forms and edited institutional videos to the organisation's standards.":
    "Desarrollo de formularios PDF interactivos y edición de vídeos institucionales según los estándares de la organización.",
  "Space Invaders-style arcade shooter, built solo end-to-end with Unity and C#.":
    "Shooter arcade estilo Space Invaders, hecho en solitario de principio a fin con Unity y C#.",
  "View/Controller architecture, data-driven levels with ScriptableObjects, event-based communication, DOTween, JSON persistence and cross-scene audio.":
    "Arquitectura View/Controller, niveles data-driven con ScriptableObjects, comunicación por eventos, DOTween, persistencia en JSON y audio entre escenas.",
  "Real-time 3D fragmentation system as a Unity editor tool, written in C# with a focus on performance and usability.":
    "Sistema de fragmentación 3D en tiempo real como herramienta de editor para Unity, escrito en C# con foco en rendimiento y usabilidad.",
  "Photorealistic modelling and texturing in Blender and Substance Painter.":
    "Modelado y texturizado fotorrealista en Blender y Substance Painter.",
  "Art, 3D & tools": "Arte, 3D y herramientas",
  "Final degree project": "Trabajo de Fin de Grado",
  "Resume view · use the button to save it as a PDF":
    "Vista de currículum · usa el botón para guardarlo como PDF",

  "Home":
    "Inicio",
  "Projects":
    "Proyectos",
  "About Me":
    "Sobre Mí",
  "Contact":
    "Contacto",
  "Looking for my first role · Barcelona or remote":
    "Buscando mi primer puesto · Barcelona o remoto",
  "Hi, I'm":
    "Hola, soy",
  "Junior Unity Developer focused on gameplay and mobile games. I just shipped my first Android game, built end-to-end with Unity and C#.":
    "Junior Unity Developer centrado en gameplay y juegos móviles. Acabo de publicar mi primer juego para Android, hecho de principio a fin con Unity y C#.",
  "Shall we talk?":
    "¿Hablamos?",
  "Scroll to explore":
    "Scroll para explorar",
  "Tech Stack":
    "Stack Tecnológico",
  "Technologies I master":
    "Tecnologías que domino",
  "Focused on gameplay and mobile games with Unity and C#, with a solid base in 3D and programming":
    "Especializado en gameplay y juegos móviles con Unity y C#, con base sólida en 3D y programación",
  "Available":
    "Disponible",
  "About me":
    "Sobre mí",
  "From prototype":
    "Del prototipo",
  "to shipped game":
    "al juego publicado",
  "I'm":
    "Soy",
  ", a Junior Unity Developer focused on":
    ", Junior Unity Developer centrado en",
  "gameplay and mobile games":
    "gameplay y juegos móviles",
  ". I build games to learn how to build better ones, and":
    ". Construyo juegos para aprender a construirlos mejor, y",
  "I just shipped my first one end-to-end.":
    "acabo de publicar el primero de principio a fin.",
  "I work with":
    "Trabajo con",
  "Unity, C#, ScriptableObjects, DOTween and Android builds":
    "Unity, C#, ScriptableObjects, DOTween y builds de Android",
  ", with care for separating logic from presentation and for data-driven design.":
    ", cuidando la separación entre lógica y presentación y el diseño orientado a datos.",
  "Learn more about me":
    "Conocer más sobre mí",
  "Technologies":
    "Tecnologías",
  "Tools and languages I master to create digital experiences":
    "Herramientas y lenguajes que domino para crear experiencias digitales",
  "A selection of my most recent work in video game development and interactive experiences":
    "Una selección de mis trabajos más recientes en desarrollo de videojuegos y experiencias interactivas",
  "Want to see more of my work?":
    "¿Quieres ver más de mi trabajo?",
  "View all projects":
    "Ver todos los proyectos",
  "Completed projects":
    "Proyectos completados",
  "Shipped game":
    "Juego publicado",
  "Play Air Bomb":
    "Jugar Air Bomb",
  "Shall we work":
    "¿Trabajamos",
  "together?":
    "juntos?",
  "I'm available for new opportunities.":
    "Estoy disponible para nuevas oportunidades.",
  "Let's talk and create something amazing!":
    "¡Hablemos y creemos algo increíble!",
  "Contact me":
    "Contáctame",
  "View Resume":
    "Ver Currículum",
  "Open to offers · Junior Unity Developer":
    "Abierto a ofertas · Junior Unity Developer",
  "and my work":
    "y mi trabajo",
  "Learn more about my experience, skills and way of working":
    "Conoce más sobre mi experiencia, habilidades y forma de trabajo",
  "What technologies do I use?":
    "¿Qué tecnologías uso?",
  "My Experience":
    "Mi Experiencia",
  "My education":
    "Mi formación",
  "How do I work in a team?":
    "¿Cómo trabajo en equipo?",
  "Agile Methodologies":
    "Metodologías Ágiles",
  "Unity and C# every day, with ScriptableObjects, DOTween and Android builds. Also C++, Blender, Maya, Substance Painter, Figma and Unreal.":
    "Unity y C# a diario, con ScriptableObjects, DOTween y builds de Android. También C++, Blender, Maya, Substance Painter, Figma y Unreal.",
  "I shipped Air Bomb, my first Android game, built solo from start to finish, plus my final degree project and other video game and interactive tool projects.":
    "He publicado Air Bomb, mi primer juego para Android hecho en solitario de principio a fin, además de mi TFG y otros proyectos de videojuegos y herramientas interactivas.",
  "Degree in Video Game Design and Development – CITM (UPC).":
    "Grado en Diseño y Desarrollo de Videojuegos – CITM (UPC).",
  "I'm introverted, but I adapt to multidisciplinary teams using agile methodologies and clear communication to coordinate tasks.":
    "Soy introvertido, pero me adapto a equipos multidisciplinarios usando metodologías ágiles y comunicación clara para coordinar tareas.",
  "Scrum and Kanban to manage projects, development sprints and reviews, ensuring efficiency and organization.":
    "Scrum y Kanban para gestionar proyectos, sprints de desarrollo y revisiones, asegurando eficiencia y organización.",
  "More about":
    "Más sobre",
  "my work":
    "mi trabajo",
  "Unity and C# as my day-to-day base, with ScriptableObjects, DOTween, JSON persistence and Android builds. Plus C++, Blender, Maya, Substance Painter, Figma, Photoshop and Unreal.":
    "Unity y C# como base del día a día, con ScriptableObjects, DOTween, persistencia en JSON y builds de Android. Además C++, Blender, Maya, Substance Painter, Figma, Photoshop y Unreal.",
  "I shipped Air Bomb, my first Android game, developed solo from start to finish. On top of that, my final degree project and several video game and interactive tool projects.":
    "He publicado Air Bomb, mi primer juego para Android, desarrollado en solitario de principio a fin. A eso sumo mi TFG y varios proyectos de videojuegos y herramientas interactivas.",
  "Degree in Video Game Design and Development – CITM (UPC). Complemented with courses and self-taught practice in programming, 3D design and gameplay development.":
    "Grado en Diseño y Desarrollo de Videojuegos – CITM (UPC). Complementado con cursos y práctica autodidacta en programación, diseño 3D y desarrollo de gameplay.",
  "I'm introverted, but I adapt well to multidisciplinary teams using agile methodologies and clear communication to coordinate tasks and reach common goals.":
    "Soy introvertido, pero me adapto bien a equipos multidisciplinarios usando metodologías ágiles y comunicación clara para coordinar tareas y alcanzar objetivos comunes.",
  "I've worked with Scrum and Kanban to manage projects, development sprints and reviews, ensuring efficiency, organization and delivery of results.":
    "He trabajado con Scrum y Kanban para gestionar proyectos, sprints de desarrollo y revisiones, asegurando eficiencia, organización y entrega de resultados.",
  "Junior Unity Developer focused on gameplay and mobile games. Barcelona or remote.":
    "Junior Unity Developer centrado en gameplay y juegos móviles. Barcelona o remoto.",
  "Navigation":
    "Navegación",
  "Video Games":
    "Videojuegos",
  "3D Modeling":
    "Modelado 3D",
  "© 2025 Nixon. All rights reserved.":
    "© 2025 Nixon. Todos los derechos reservados.",
  "Privacy":
    "Privacidad",
  "Terms":
    "Términos",
  "Made with":
    "Hecho con",
  "using Astro":
    "usando Astro",
  "My name is":
    "Mi nombre es",
  "a graduate in Video Game Design and Development":
    "graduado en Diseño y Desarrollo de Videojuegos",
  "from":
    "por el",
  "focused on":
    "centrado en",
  ", and":
    ", y",
  "and":
    "y",
  "I just shipped":
    "Acabo de publicar",
  ", my first Android game, built solo from start to finish with":
    ", mi primer juego para Android, hecho en solitario de principio a fin con",
  "Unity and C#":
    "Unity y C#",
  ": View/Controller architecture, data-driven levels with ScriptableObjects, event-based communication, DOTween, JSON persistence and cross-scene audio.":
    ": arquitectura View/Controller, niveles data-driven con ScriptableObjects, comunicación por eventos, DOTween, persistencia en JSON y audio entre escenas.",
  "What I bring:":
    "Lo que aporto:",
  "gameplay programming, UI systems and Android builds":
    "programación de gameplay, sistemas de UI y builds de Android",
  ", with architecture habits that separate logic from presentation. On top of that, the foundation from my degree:":
    ", con hábitos de arquitectura que separan lógica y presentación. A eso sumo la base de mi carrera:",
  "C++, custom engines, VR/AR, 3D (Blender, 3ds Max, Maya) and UI/UX":
    "C++, motores propios, VR/AR, 3D (Blender, 3ds Max, Maya) y UI/UX",
  "I stand out for my":
    "Destaco por mi",
  "ability to work independently":
    "capacidad de trabajo independiente",
  ", my debugging discipline (stack traces, prefab reference hunting and testing on real devices) and how fast I learn. I'm looking for my":
    ", mi disciplina depurando (stack traces, referencias de prefabs y pruebas en dispositivo real) y mi rapidez aprendiendo. Busco mi",
  "first role as a Junior Unity / Gameplay Developer":
    "primer puesto como Junior Unity / Gameplay Developer",
  "at a studio or mobile team, in Barcelona or remote.":
    "en un estudio o equipo móvil, en Barcelona o en remoto.",
  "Experience":
    "Experiencia",
  "My":
    "Mi",
  "IT Technical Support":
    "Soporte Técnico IT",
  "Mar 2025 - Aug 2025":
    "Mar 2025 - Ago 2025",
  "Creation of interactive PDF forms, editing of institutional videos and development of gamified materials on cybersecurity at the COAC":
    "Creación de formularios PDF interactivos, edición de vídeos institucionales y desarrollo de materiales gamificados sobre ciberseguridad en el COAC",
  "Design and development of interactive PDF forms using advanced editing and automation tools.":
    "Diseño y desarrollo de formularios PDF interactivos utilizando herramientas avanzadas de edición y automatización.",
  "Editing and preparation of institutional videos following the COAC's graphic line and standards.":
    "Edición y preparación de vídeos institucionales siguiendo la línea gráfica y los estándares del COAC.",
  "Creation of gamified materials focused on cybersecurity awareness.":
    "Creación de materiales gamificados enfocados en la concienciación sobre ciberseguridad.",
  "Strengths":
    "Fortalezas",
  "What I'm":
    "En qué",
  "good at":
    "soy fuerte",
  "What I bring today to a team building games with Unity":
    "Lo que aporto hoy a un equipo que desarrolla juegos con Unity",
  "Playable systems and mechanics in Unity and C#: player control, enemy waves, scoring and game feel.":
    "Sistemas jugables y mecánicas en Unity y C#: control del jugador, oleadas de enemigos, puntuación y game feel.",
  "Architecture & clean code":
    "Arquitectura y código limpio",
  "Separation of logic and presentation, data-driven design with ScriptableObjects and event-based communication.":
    "Separación entre lógica y presentación, diseño orientado a datos con ScriptableObjects y comunicación por eventos.",
  "Android builds, UI and HUD systems, JSON persistence and testing on real devices.":
    "Builds de Android, sistemas de UI y HUD, persistencia en JSON y pruebas en dispositivo real.",
  "Visit my":
    "¡Visita mi",
  "Explore my projects, contributions and open source code.":
    "Explora mis proyectos, contribuciones y código abierto.",
  "Discover how I work and what I've created.":
    "Descubre cómo trabajo y qué he creado.",
  "Go to GitHub":
    "Ir a GitHub",
  "Public projects":
    "Proyectos públicos",
  "Quality code":
    "Código de calidad",
  "A collection of my work in video game development and interactive experiences":
    "Una colección de mis trabajos en desarrollo de videojuegos y experiencias interactivas",
  "All":
    "Todos",
  "Load more projects":
    "Ver más proyectos",
  "Code":
    "Código",
  "Real-Time 3D Fragmentation System":
    "Sistema de Fragmentación 3D en Tiempo Real",
  "Realistic 3D Mate Gourd":
    "Mate 3D realista",
  "Realistic yerba mate gourd modeled in Blender":
    "Mate realista hecho en blender",
  "Space Invaders-style arcade shooter for Android":
    "Shooter arcade para Android al estilo Space Invaders",
  "My first shipped game: a Space Invaders-style arcade shooter for Android, built solo from start to finish. View/Controller architecture, data-driven levels with ScriptableObjects, event-based communication, DOTween for game feel, JSON persistence and cross-scene audio.":
    "Mi primer juego publicado: shooter arcade para Android estilo Space Invaders, hecho en solitario de principio a fin. Arquitectura View/Controller, niveles data-driven con ScriptableObjects, comunicación por eventos, DOTween para el game feel, persistencia en JSON y audio entre escenas.",
  "★ HELLO! ★ OPEN TO WORK ★ LET'S CREATE MAGIC ★":
    "★ ¡HOLA! ★ OPEN TO WORK ★ LET'S CREATE MAGIC ★",
  "AVAILABLE":
    "DISPONIBLE",
  "Play Snake":
    "Jugar Snake",
  "🎮 Earn XP by interacting with the links ✨":
    "🎮 Gana XP interactuando con los links ✨",
  "Resume":
    "CV",
  "Resume view · use the button to save it as a PDF":
    "Vista de currículum · usa el botón para guardarlo como PDF",
  "Download PDF":
    "Descargar PDF",
  "Barcelona, Spain · Open to remote":
    "Barcelona, España · Disponible en remoto",
  "Profile":
    "Perfil",
  "Junior Unity Developer focused on gameplay and mobile games. I build games to learn how to build better ones, and I just shipped my first one end-to-end: Air Bomb, an arcade shooter for Android built solo with Unity and C#. Graduate in Video Game Design and Development from CITM (UPC). Looking for my first role as a Junior Unity / Gameplay Developer at a studio or mobile team, in Barcelona or remote.":
    "Junior Unity Developer centrado en gameplay y juegos móviles. Construyo juegos para aprender a construirlos mejor, y acabo de publicar el primero de principio a fin: Air Bomb, un shooter arcade para Android hecho en solitario con Unity y C#. Graduado en Diseño y Desarrollo de Videojuegos por el CITM (UPC). Busco mi primer puesto como Junior Unity / Gameplay Developer en un estudio o equipo móvil, en Barcelona o en remoto.",
  "Education":
    "Formación",
  "Skills":
    "Habilidades",
  "IT Support Technician":
    "Técnico de Soporte IT",
  "Designed gamified cybersecurity awareness materials for staff: first professional experience applying game mechanics to real-world training.":
    "Diseño de materiales gamificados de concienciación en ciberseguridad para el personal: primera experiencia profesional aplicando mecánicas de juego a formación real.",
  "Built interactive PDF forms using editing and automation tools.":
    "Desarrollo de formularios PDF interactivos con herramientas de edición y automatización.",
  "Edited institutional videos following the COAC's graphic line and standards.":
    "Edición de vídeos institucionales siguiendo la línea gráfica y los estándares del COAC.",
  "Day-to-day technical support for the organization.":
    "Soporte técnico diario a la organización.",
  "Shipped game · Android":
    "Juego publicado · Android",
  "Space Invaders-style arcade shooter built solo from start to finish with Unity and C#.":
    "Shooter arcade estilo Space Invaders desarrollado en solitario de principio a fin con Unity y C#.",
  "View/Controller architecture separating logic from presentation.":
    "Arquitectura View/Controller con separación entre lógica y presentación.",
  "Data-driven levels with ScriptableObjects and event communication via Action callbacks.":
    "Niveles data-driven con ScriptableObjects y comunicación por eventos mediante Action callbacks.",
  "DOTween for game feel, JSON persistence and a cross-scene audio system.":
    "DOTween para el game feel, persistencia en JSON y sistema de audio entre escenas.",
  "Final degree project · Tool":
    "Trabajo de Fin de Grado · Herramienta",
  "Real-time 3D fragmentation system built as a Unity editor tool.":
    "Sistema de fragmentación 3D en tiempo real como herramienta de editor para Unity.",
  "Written in C# with a focus on performance and usability for other developers.":
    "Desarrollado en C# con foco en rendimiento y usabilidad para otros desarrolladores.",
  "3D Art":
    "Arte 3D",
  "Photorealistic modeling and texturing in Blender and Substance Painter.":
    "Modelado y texturizado fotorrealista en Blender y Substance Painter.",
  "BSc in Video Game Design and Development":
    "Grado en Diseño y Desarrollo de Videojuegos",
  "Engines & languages":
    "Motores y lenguajes",
  "Gameplay & architecture":
    "Gameplay y arquitectura",
  "ScriptableObjects, DOTween, data-driven design, event-driven architecture, JSON persistence":
    "ScriptableObjects, DOTween, diseño orientado a datos, arquitectura por eventos, persistencia en JSON",
  "Mobile":
    "Móvil",
  "Android builds, UI and HUD systems, testing on real devices":
    "Builds de Android, sistemas de UI y HUD, pruebas en dispositivo real",
  "Art & 3D":
    "Arte y 3D",
  "Tools & methodology":
    "Herramientas y metodología",
  "email me":
    "escribir por correo",
  "Page not found":
    "Página no encontrada",
  "The link you tried to access doesn't exist or was moved.":
    "El enlace al que intentaste acceder no existe o fue movido.",
  "But don't worry, you can go back home and keep browsing.":
    "Pero tranquilo, podés volver al inicio y seguir navegando.",
  "Back to home":
    "Volver al inicio",
  "View projects":
    "Ver proyectos",
};

const STORAGE_KEY = "lang";

// El idioma por defecto es INGLES: es lo que se sirve en el HTML.
function getLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "es" ? "es" : "en";
  } catch {
    return "en";
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
// el efecto typewriter marcado como .notranslate, o bloques con data-es).
function shouldSkip(parent) {
  return (
    !parent ||
    parent.closest(
      'script, style, noscript, .notranslate, [data-es], #lang-toggle, #lang-toggle-mobile'
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

// Aplica los overrides declarados con data-es (titulos partidos, orden, etc.)
function applyDataOverrides(root) {
  const els = root.querySelectorAll ? root.querySelectorAll("[data-es]") : [];
  els.forEach((el) => {
    el.textContent = el.dataset.es;
  });
}

function translate(root) {
  applyDataOverrides(root);
  translateTextNodes(root);
}

// Observa contenido que aparece tarde (islas React con client:visible, etc.)
function startObserver() {
  const observer = new MutationObserver((mutations) => {
    if (getLang() !== "es") return;
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
  // Muestra el idioma al que se cambiaria si se pulsa
  const next = getLang() === "es" ? "EN" : "ES";
  document.querySelectorAll(".lang-toggle-label").forEach((el) => {
    el.textContent = next;
  });
}

function onToggleClick() {
  if (getLang() === "es") {
    // Volver a ingles: render nativo recargando.
    setLang("en");
    location.reload();
  } else {
    // Pasar a espanol: traducir en caliente, sin recargar.
    setLang("es");
    document.documentElement.lang = "es";
    translate(document.body);
    updateToggleLabels();
  }
}

function init() {
  document.documentElement.lang = getLang();
  if (getLang() === "es") translate(document.body);
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
