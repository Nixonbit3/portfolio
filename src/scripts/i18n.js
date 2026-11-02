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
  "Skip to content":
    "Saltar al contenido",
  "Junior Unity developer":
    "Desarrollador Unity junior",
  "Work":
    "Proyectos",
  "Approach":
    "Método",
  "Background":
    "Trayectoria",
  "Resume":
    "CV",
  "Contact":
    "Contacto",
  "I build gameplay and mobile games in Unity and C#. I have shipped two of them, each made alone from first prototype to published build.":
    "Programo gameplay y juegos móviles en Unity y C#. He publicado dos de ellos, cada uno hecho en solitario desde el primer prototipo hasta la versión publicada.",
  "Play Brick Breaker in your browser":
    "Juega a Brick Breaker en tu navegador",
  "Read the resume":
    "Ver el currículum",
  "Based in":
    "Ubicación",
  "Barcelona, open to remote work":
    "Barcelona, abierto a trabajo remoto",
  "Looking for":
    "Busco",
  "A first role as Junior Unity or Gameplay developer":
    "Mi primer puesto como desarrollador Unity o Gameplay junior",
  "Published":
    "Publicado",
  "Air Bomb (Android), Brick Breaker Mobile (Android and web), Fracture Tool (Unity Asset Store)":
    "Air Bomb (Android), Brick Breaker Mobile (Android y web), Fracture Tool (Unity Asset Store)",
  "Selected work":
    "Proyectos destacados",
  "Two shipped games, one published Unity tool and one 3D piece.":
    "Dos juegos publicados, una herramienta de Unity publicada y una pieza 3D.",
  "A brick breaker for phones that also runs in the browser. It has five generated levels, lives, a high score, pause, audio settings, analytics and rewarded ads on Android.":
    "Un rompeladrillos para móvil que también funciona en el navegador. Tiene cinco niveles generados, vidas, récord, pausa, ajustes de audio, analíticas y anuncios con recompensa en Android.",
  "Android and WebGL. Unity, C#, DOTween.":
    "Android y WebGL. Unity, C#, DOTween.",
  "Play in the browser":
    "Jugar en el navegador",
  "A Space Invaders-style arcade shooter for Android. Levels are ScriptableObjects, systems talk through events, progress is saved as JSON and the audio carries across scenes.":
    "Un shooter arcade estilo Space Invaders para Android. Los niveles son ScriptableObjects, los sistemas se comunican con eventos, el progreso se guarda en JSON y el audio pasa de una escena a otra.",
  "Play on itch.io":
    "Jugar en itch.io",
  "A Unity Asset Store tool that breaks any mesh into physics fragments. It started as my final degree project and is now published as a Free and a Pro edition under my brand, Naxo Studios. Cuts can be baked in the editor, so a 4,000-triangle column breaks in about 3 ms instead of 490 ms.":
    "Una herramienta de la Unity Asset Store que rompe cualquier malla en fragmentos físicos. Empezó como mi trabajo de fin de grado y ahora está publicada en una edición Free y otra Pro bajo mi marca, Naxo Studios. Los cortes se pueden precalcular en el editor, así que una columna de 4.000 triángulos se rompe en unos 3 ms en lugar de 490 ms.",
  "Editor tooling. Unity, C#, PhysX.":
    "Herramientas de editor. Unity, C#, PhysX.",
  "Get Free":
    "Conseguir Free",
  "Get Pro":
    "Conseguir Pro",
  "Realistic 3D Mate Gourd":
    "Mate 3D realista",
  "A yerba mate gourd modeled in Blender and textured in Substance Painter.":
    "Un mate de yerba modelado en Blender y texturizado en Substance Painter.",
  "3D art. Blender, Substance Painter.":
    "Arte 3D. Blender, Substance Painter.",
  "View on ArtStation":
    "Ver en ArtStation",
  "How I build":
    "Cómo trabajo",
  "The habits behind both games, written down.":
    "Los hábitos detrás de ambos juegos, por escrito.",
  "Logic and presentation stay apart":
    "Lógica y presentación, por separado",
  "I use a View and Controller split. Viewers animate and report what happened, controllers decide what it means. Services such as audio, analytics and ads sit outside both.":
    "Uso una separación View y Controller. Los viewers animan y avisan de lo ocurrido, los controllers deciden qué significa. Los servicios, como audio, analíticas y anuncios, quedan fuera de ambos.",
  "Levels are data":
    "Los niveles son datos",
  "Level definitions live in ScriptableObjects, so a designer can change a level without touching code and a new level never needs a new script.":
    "Las definiciones de nivel viven en ScriptableObjects, así que un diseñador puede cambiar un nivel sin tocar código y un nivel nuevo nunca necesita un script nuevo.",
  "Systems talk through events":
    "Los sistemas se comunican con eventos",
  "Classes announce what happened with C# events and subscribe and unsubscribe in OnDestroy, so nothing holds a reference it no longer needs.":
    "Las clases avisan de lo ocurrido con eventos de C# y se suscriben y desuscriben en OnDestroy, así que nada conserva una referencia que ya no necesita.",
  "Everything runs on a real phone":
    "Todo se prueba en un móvil real",
  "I test builds on real devices and chase bugs with stack traces and prefab reference checks before I call a build done.":
    "Pruebo las builds en dispositivos reales y persigo los fallos con stack traces y revisión de referencias de prefabs antes de dar una build por terminada.",
  "Experience and education":
    "Experiencia y formación",
  "IT Support Technician":
    "Técnico de soporte IT",
  "Col·legi d'Arquitectes de Catalunya (COAC), Barcelona. March to August 2025.":
    "Col·legi d'Arquitectes de Catalunya (COAC), Barcelona. De marzo a agosto de 2025.",
  "Designed gamified cybersecurity training for staff, applying game mechanics to real learning.":
    "Diseñé formación de ciberseguridad gamificada para el personal, aplicando mecánicas de juego al aprendizaje real.",
  "Built interactive PDF forms and edited institutional videos to the organisation's standards.":
    "Creé formularios PDF interactivos y edité vídeos institucionales según los estándares de la organización.",
  "BSc in Video Game Design and Development":
    "Grado en Diseño y Desarrollo de Videojuegos",
  "CITM, Universitat Politècnica de Catalunya, Barcelona. September 2021 to July 2025.":
    "CITM, Universitat Politècnica de Catalunya, Barcelona. De septiembre de 2021 a julio de 2025.",
  "Tools":
    "Herramientas",
  "Engines and languages":
    "Motores y lenguajes",
  "Gameplay and architecture":
    "Gameplay y arquitectura",
  "ScriptableObjects, DOTween, data-driven design, event-driven architecture, JSON persistence":
    "ScriptableObjects, DOTween, diseño orientado a datos, arquitectura por eventos, persistencia en JSON",
  "Mobile":
    "Móvil",
  "Android builds, UI and HUD systems, testing on real devices":
    "Builds de Android, sistemas de UI y HUD, pruebas en dispositivo real",
  "Art, 3D and process":
    "Arte, 3D y proceso",
  "Blender, Maya, 3ds Max, Substance Painter, Photoshop, Figma, Git, Scrum and Kanban":
    "Blender, Maya, 3ds Max, Substance Painter, Photoshop, Figma, Git, Scrum y Kanban",
  "Looking for my first role in a games studio.":
    "Busco mi primer puesto en un estudio de videojuegos.",
  "Write to me on LinkedIn or by email.":
    "Escríbeme por LinkedIn o por correo.",
  "Message me on LinkedIn":
    "Escríbeme por LinkedIn",
  "email me":
    "escribir por correo",
  "All rights reserved.":
    "Todos los derechos reservados.",
  "Resume view. Use the button to save it as a PDF.":
    "Vista del currículum. Usa el botón para guardarlo como PDF.",
  "Download PDF":
    "Descargar PDF",
  "Barcelona, Spain · Open to remote":
    "Barcelona, España · Disponible en remoto",
  "Profile":
    "Perfil",
  "Junior Unity Developer focused on gameplay and mobile. Shipped two mobile games built solo end-to-end with Unity and C#: Air Bomb (Android) and Brick Breaker Mobile (Android and web). Video Game Design and Development graduate (CITM – UPC). Looking for a first role as Junior Unity / Gameplay Developer, in Barcelona or remote.":
    "Junior Unity Developer centrado en gameplay y móvil. He publicado dos juegos para móvil hechos en solitario de principio a fin con Unity y C#: Air Bomb (Android) y Brick Breaker Mobile (Android y web). Graduado en Diseño y Desarrollo de Videojuegos (CITM – UPC). Busco mi primer puesto como Junior Unity / Gameplay Developer, en Barcelona o en remoto.",
  "Experience":
    "Experiencia",
  "Mar 2025 — Aug 2025":
    "Mar 2025 — Ago 2025",
  "Designed gamified cybersecurity training for staff — applying game mechanics to real-world learning.":
    "Diseño de formación gamificada en ciberseguridad para el personal, aplicando mecánicas de juego a aprendizaje real.",
  "Projects":
    "Proyectos",
  "Shipped game · Android & Web":
    "Juego publicado · Android y Web",
  "Arkanoid-style brick breaker for mobile, playable in the browser: 5 procedurally generated levels, high score, pause and audio settings.":
    "Rompeladrillos estilo Arkanoid para móvil, jugable en el navegador: 5 niveles generados proceduralmente, récord, pausa y ajustes de audio.",
  "Rewarded ads and analytics on Android; View/Controller architecture, event-driven gameplay and ScriptableObject levels.":
    "Anuncios con recompensa y analíticas en Android; arquitectura View/Controller, gameplay orientado a eventos y niveles con ScriptableObjects.",
  "Shipped game · Android":
    "Juego publicado · Android",
  "Space Invaders-style arcade shooter, built solo end-to-end with Unity and C#.":
    "Shooter arcade estilo Space Invaders, hecho en solitario de principio a fin con Unity y C#.",
  "View/Controller architecture, data-driven levels with ScriptableObjects, event-based communication, DOTween, JSON persistence and cross-scene audio.":
    "Arquitectura View/Controller, niveles data-driven con ScriptableObjects, comunicación por eventos, DOTween, persistencia en JSON y audio entre escenas.",
  "Unity Asset Store · Free & Pro · Naxo Studios":
    "Unity Asset Store · Free y Pro · Naxo Studios",
  "Editor and runtime tool that breaks any mesh into physics fragments: 5 fracture modes, baked fractures (~3 ms vs ~490 ms) and a custom inspector. Started as my final degree project; passed Asset Store validation.":
    "Herramienta de editor y runtime que rompe cualquier malla en fragmentos físicos: 5 modos de fractura, fracturas precalculadas (~3 ms frente a ~490 ms) e inspector personalizado. Empezó como mi TFG; superó la validación de la Asset Store.",
  "Education":
    "Formación",
  "Skills":
    "Habilidades",
  "Engines & languages":
    "Motores y lenguajes",
  "Gameplay & architecture":
    "Gameplay y arquitectura",
  "Art, 3D & tools":
    "Arte, 3D y herramientas",
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
      'script, style, noscript, .notranslate, [data-es], #lang-toggle'
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

// Observa contenido que aparece tarde
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
    .querySelectorAll("#lang-toggle")
    .forEach((btn) => btn.addEventListener("click", onToggleClick));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
