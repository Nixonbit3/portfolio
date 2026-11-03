// ============================================================
//  i18n - Traduccion en el cliente: EN (por defecto), ES y CA
//  - El sitio se sirve en INGLES; ES y CA se aplican en el navegador.
//  - Los diccionarios van de texto en ingles -> texto traducido
//    (normalizado: sin saltos de linea, espacios colapsados y sin
//    espacios al inicio/fin). Hay que mantener ES y CA con las mismas claves.
//  - La preferencia se guarda en localStorage ("lang").
//  - Cambiar de idioma recarga la pagina: asi siempre se parte del HTML en
//    ingles y se puede pasar de un idioma a cualquier otro.
// ============================================================

const ES = {
  "Example in C#":
    "Ejemplo en C#",
  "Skip to content":
    "Saltar al contenido",
  "Junior developer":
    "Desarrollador junior",
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
  "Based in":
    "Ubicación",
  "Barcelona, open to remote work":
    "Barcelona, abierto a trabajo remoto",
  "Looking for":
    "Busco",
  "A first programming role, in games or in any other kind of software":
    "Mi primer puesto de programación, en videojuegos o en cualquier otro tipo de software",
  "Published":
    "Publicado",
  "Brick Breaker Mobile (Android and web)":
    "Brick Breaker Mobile (Android y web)",
  "Open to work":
    "Abierto a ofertas",
  "Yes":
    "Sí",
  "I'm a junior developer who learned to program by building games. I have shipped two mobile games and a published Unity tool, all written in C# and made alone from first prototype to release.":
    "Soy un desarrollador junior que aprendió a programar haciendo juegos. He publicado dos juegos para móvil y una herramienta de Unity, todo escrito en C# y hecho en solitario desde el primer prototipo hasta la publicación.",
  "Play Brick Breaker in your browser":
    "Juega a Brick Breaker en tu navegador",
  "Read the resume":
    "Ver el currículum",
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
  "Languages and engines":
    "Lenguajes y motores",
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
  "Looking for my first programming role.":
    "Busco mi primer puesto de programación.",
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
  "Junior Developer · C#, C++, Python":
    "Desarrollador Junior · C#, C++, Python",
  "Barcelona, Spain · Open to remote":
    "Barcelona, España · Disponible en remoto",
  "Profile":
    "Perfil",
  "Junior developer with a games background, open to any programming role. Shipped two mobile games and a Unity Asset Store tool, each built solo in C#: Air Bomb (Android), Brick Breaker Mobile (Android and web) and Fracture Tool (Free and Pro). Video Game Design and Development graduate (CITM – UPC). Looking for a first programming role in Barcelona or remote.":
    "Desarrollador junior con experiencia en videojuegos y abierto a cualquier puesto de programación. He publicado dos juegos para móvil y una herramienta de la Unity Asset Store, cada uno hecho en solitario en C#: Air Bomb (Android), Brick Breaker Mobile (Android y web) y Fracture Tool (Free y Pro). Graduado en Diseño y Desarrollo de Videojuegos (CITM – UPC). Busco mi primer puesto de programación en Barcelona o en remoto.",
  "Experience":
    "Experiencia",
  "Mar 2025 — Aug 2025":
    "Mar 2025 — Ago 2025",
  "Designed gamified cybersecurity training for staff — applying game mechanics to real-world learning.":
    "Diseño de formación gamificada en ciberseguridad para el personal, aplicando mecánicas de juego al aprendizaje real.",
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
  "Languages & engines":
    "Lenguajes y motores",
  "Gameplay & architecture":
    "Gameplay y arquitectura",
  "Art, 3D & tools":
    "Arte, 3D y herramientas",
  "Page not found":
    "Página no encontrada",
  "The link you tried to access doesn't exist or was moved.":
    "El enlace al que intentaste acceder no existe o fue movido.",
  "But don't worry, you can go back home and keep browsing.":
    "Pero tranquilo, puedes volver al inicio y seguir navegando.",
  "Back to home":
    "Volver al inicio",
  "View projects":
    "Ver proyectos",
};

const CA = {
  "Example in C#":
    "Exemple en C#",
  "Skip to content":
    "Salta al contingut",
  "Junior developer":
    "Desenvolupador júnior",
  "Work":
    "Projectes",
  "Approach":
    "Mètode",
  "Background":
    "Trajectòria",
  "Resume":
    "CV",
  "Contact":
    "Contacte",
  "Based in":
    "Ubicació",
  "Barcelona, open to remote work":
    "Barcelona, obert al treball en remot",
  "Looking for":
    "Busco",
  "A first programming role, in games or in any other kind of software":
    "El meu primer lloc de programació, en videojocs o en qualsevol altre tipus de programari",
  "Published":
    "Publicat",
  "Brick Breaker Mobile (Android and web)":
    "Brick Breaker Mobile (Android i web)",
  "Open to work":
    "Obert a ofertes",
  "Yes":
    "Sí",
  "I'm a junior developer who learned to program by building games. I have shipped two mobile games and a published Unity tool, all written in C# and made alone from first prototype to release.":
    "Sóc un desenvolupador júnior que va aprendre a programar fent jocs. He publicat dos jocs per a mòbil i una eina d'Unity, tot escrit en C# i fet en solitari des del primer prototip fins a la publicació.",
  "Play Brick Breaker in your browser":
    "Juga a Brick Breaker al navegador",
  "Read the resume":
    "Mira el currículum",
  "Selected work":
    "Projectes destacats",
  "Two shipped games, one published Unity tool and one 3D piece.":
    "Dos jocs publicats, una eina d'Unity publicada i una peça 3D.",
  "A brick breaker for phones that also runs in the browser. It has five generated levels, lives, a high score, pause, audio settings, analytics and rewarded ads on Android.":
    "Un joc de trencar maons per a mòbil que també funciona al navegador. Té cinc nivells generats, vides, puntuació màxima, pausa, ajustos d'àudio, analítiques i anuncis amb recompensa a Android.",
  "Android and WebGL. Unity, C#, DOTween.":
    "Android i WebGL. Unity, C#, DOTween.",
  "Play in the browser":
    "Juga al navegador",
  "A Space Invaders-style arcade shooter for Android. Levels are ScriptableObjects, systems talk through events, progress is saved as JSON and the audio carries across scenes.":
    "Un shooter d'arcade a l'estil Space Invaders per a Android. Els nivells són ScriptableObjects, els sistemes es comuniquen amb esdeveniments, el progrés es desa en JSON i l'àudio passa d'una escena a una altra.",
  "Play on itch.io":
    "Juga a itch.io",
  "A Unity Asset Store tool that breaks any mesh into physics fragments. It started as my final degree project and is now published as a Free and a Pro edition under my brand, Naxo Studios. Cuts can be baked in the editor, so a 4,000-triangle column breaks in about 3 ms instead of 490 ms.":
    "Una eina de la Unity Asset Store que trenca qualsevol malla en fragments físics. Va començar com el meu treball de final de grau i ara està publicada en una edició Free i una de Pro sota la meva marca, Naxo Studios. Els talls es poden precalcular a l'editor, així que una columna de 4.000 triangles es trenca en uns 3 ms en lloc de 490 ms.",
  "Editor tooling. Unity, C#, PhysX.":
    "Eines d'editor. Unity, C#, PhysX.",
  "Get Free":
    "Aconsegueix Free",
  "Get Pro":
    "Aconsegueix Pro",
  "Realistic 3D Mate Gourd":
    "Mate 3D realista",
  "A yerba mate gourd modeled in Blender and textured in Substance Painter.":
    "Un mate de yerba modelat a Blender i texturitzat a Substance Painter.",
  "3D art. Blender, Substance Painter.":
    "Art 3D. Blender, Substance Painter.",
  "View on ArtStation":
    "Mira-ho a ArtStation",
  "How I build":
    "Com treballo",
  "The habits behind both games, written down.":
    "Els hàbits darrere dels dos jocs, per escrit.",
  "Logic and presentation stay apart":
    "Lògica i presentació, per separat",
  "I use a View and Controller split. Viewers animate and report what happened, controllers decide what it means. Services such as audio, analytics and ads sit outside both.":
    "Faig servir una separació View i Controller. Els viewers animen i avisen del que ha passat, els controllers decideixen què significa. Els serveis, com l'àudio, les analítiques i els anuncis, queden fora dels dos.",
  "Levels are data":
    "Els nivells són dades",
  "Level definitions live in ScriptableObjects, so a designer can change a level without touching code and a new level never needs a new script.":
    "Les definicions de nivell viuen en ScriptableObjects, així que un dissenyador pot canviar un nivell sense tocar codi i un nivell nou mai necessita un script nou.",
  "Systems talk through events":
    "Els sistemes es comuniquen amb esdeveniments",
  "Classes announce what happened with C# events and subscribe and unsubscribe in OnDestroy, so nothing holds a reference it no longer needs.":
    "Les classes avisen del que ha passat amb esdeveniments de C# i se subscriuen i es desubscriuen a OnDestroy, així que res conserva una referència que ja no necessita.",
  "Everything runs on a real phone":
    "Tot es prova en un mòbil real",
  "I test builds on real devices and chase bugs with stack traces and prefab reference checks before I call a build done.":
    "Provo les builds en dispositius reals i persegueixo els errors amb stack traces i revisió de referències de prefabs abans de donar una build per acabada.",
  "Experience and education":
    "Experiència i formació",
  "IT Support Technician":
    "Tècnic de suport IT",
  "Col·legi d'Arquitectes de Catalunya (COAC), Barcelona. March to August 2025.":
    "Col·legi d'Arquitectes de Catalunya (COAC), Barcelona. De març a agost de 2025.",
  "Designed gamified cybersecurity training for staff, applying game mechanics to real learning.":
    "Vaig dissenyar formació de ciberseguretat gamificada per al personal, aplicant mecàniques de joc a l'aprenentatge real.",
  "Built interactive PDF forms and edited institutional videos to the organisation's standards.":
    "Vaig crear formularis PDF interactius i vaig editar vídeos institucionals segons els estàndards de l'organització.",
  "BSc in Video Game Design and Development":
    "Grau en Disseny i Desenvolupament de Videojocs",
  "CITM, Universitat Politècnica de Catalunya, Barcelona. September 2021 to July 2025.":
    "CITM, Universitat Politècnica de Catalunya, Barcelona. De setembre de 2021 a juliol de 2025.",
  "Tools":
    "Eines",
  "Languages and engines":
    "Llenguatges i motors",
  "Gameplay and architecture":
    "Gameplay i arquitectura",
  "ScriptableObjects, DOTween, data-driven design, event-driven architecture, JSON persistence":
    "ScriptableObjects, DOTween, disseny orientat a dades, arquitectura per esdeveniments, persistència en JSON",
  "Mobile":
    "Mòbil",
  "Android builds, UI and HUD systems, testing on real devices":
    "Builds d'Android, sistemes d'UI i HUD, proves en dispositiu real",
  "Art, 3D and process":
    "Art, 3D i procés",
  "Blender, Maya, 3ds Max, Substance Painter, Photoshop, Figma, Git, Scrum and Kanban":
    "Blender, Maya, 3ds Max, Substance Painter, Photoshop, Figma, Git, Scrum i Kanban",
  "Looking for my first programming role.":
    "Busco el meu primer lloc de programació.",
  "Write to me on LinkedIn or by email.":
    "Escriu-me per LinkedIn o per correu.",
  "Message me on LinkedIn":
    "Escriu-me per LinkedIn",
  "email me":
    "escriu-me per correu",
  "All rights reserved.":
    "Tots els drets reservats.",
  "Resume view. Use the button to save it as a PDF.":
    "Vista del currículum. Fes servir el botó per desar-lo com a PDF.",
  "Download PDF":
    "Descarrega el PDF",
  "Junior Developer · C#, C++, Python":
    "Desenvolupador Júnior · C#, C++, Python",
  "Barcelona, Spain · Open to remote":
    "Barcelona, Espanya · Disponible en remot",
  "Profile":
    "Perfil",
  "Junior developer with a games background, open to any programming role. Shipped two mobile games and a Unity Asset Store tool, each built solo in C#: Air Bomb (Android), Brick Breaker Mobile (Android and web) and Fracture Tool (Free and Pro). Video Game Design and Development graduate (CITM – UPC). Looking for a first programming role in Barcelona or remote.":
    "Desenvolupador júnior amb experiència en videojocs i obert a qualsevol lloc de programació. He publicat dos jocs per a mòbil i una eina de la Unity Asset Store, cadascun fet en solitari en C#: Air Bomb (Android), Brick Breaker Mobile (Android i web) i Fracture Tool (Free i Pro). Graduat en Disseny i Desenvolupament de Videojocs (CITM – UPC). Busco el meu primer lloc de programació a Barcelona o en remot.",
  "Experience":
    "Experiència",
  "Mar 2025 — Aug 2025":
    "Març 2025 — Agost 2025",
  "Designed gamified cybersecurity training for staff — applying game mechanics to real-world learning.":
    "Disseny de formació gamificada en ciberseguretat per al personal, aplicant mecàniques de joc a l'aprenentatge real.",
  "Projects":
    "Projectes",
  "Shipped game · Android & Web":
    "Joc publicat · Android i Web",
  "Arkanoid-style brick breaker for mobile, playable in the browser: 5 procedurally generated levels, high score, pause and audio settings.":
    "Joc de trencar maons a l'estil Arkanoid per a mòbil, jugable al navegador: 5 nivells generats proceduralment, puntuació màxima, pausa i ajustos d'àudio.",
  "Rewarded ads and analytics on Android; View/Controller architecture, event-driven gameplay and ScriptableObject levels.":
    "Anuncis amb recompensa i analítiques a Android; arquitectura View/Controller, gameplay orientat a esdeveniments i nivells amb ScriptableObjects.",
  "Shipped game · Android":
    "Joc publicat · Android",
  "Space Invaders-style arcade shooter, built solo end-to-end with Unity and C#.":
    "Shooter d'arcade a l'estil Space Invaders, fet en solitari de principi a fi amb Unity i C#.",
  "View/Controller architecture, data-driven levels with ScriptableObjects, event-based communication, DOTween, JSON persistence and cross-scene audio.":
    "Arquitectura View/Controller, nivells orientats a dades amb ScriptableObjects, comunicació per esdeveniments, DOTween, persistència en JSON i àudio entre escenes.",
  "Unity Asset Store · Free & Pro · Naxo Studios":
    "Unity Asset Store · Free i Pro · Naxo Studios",
  "Editor and runtime tool that breaks any mesh into physics fragments: 5 fracture modes, baked fractures (~3 ms vs ~490 ms) and a custom inspector. Started as my final degree project; passed Asset Store validation.":
    "Eina d'editor i de runtime que trenca qualsevol malla en fragments físics: 5 modes de fractura, fractures precalculades (~3 ms davant de ~490 ms) i inspector personalitzat. Va començar com el meu TFG; va superar la validació de l'Asset Store.",
  "Education":
    "Formació",
  "Skills":
    "Habilitats",
  "Languages & engines":
    "Llenguatges i motors",
  "Gameplay & architecture":
    "Gameplay i arquitectura",
  "Art, 3D & tools":
    "Art, 3D i eines",
  "Page not found":
    "Pàgina no trobada",
  "The link you tried to access doesn't exist or was moved.":
    "L'enllaç al qual has intentat accedir no existeix o s'ha mogut.",
  "But don't worry, you can go back home and keep browsing.":
    "Però tranquil, pots tornar a l'inici i seguir navegant.",
  "Back to home":
    "Tornar a l'inici",
  "View projects":
    "Veure projectes",
};

const DICTS = { es: ES, ca: CA };
const LANGS = ["en", "es", "ca"];
const STORAGE_KEY = "lang";

function getLang() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return LANGS.includes(v) ? v : "en";
  } catch {
    return "en";
  }
}

function setLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* sin almacenamiento: el cambio dura hasta recargar */
  }
}

// ¿Debe ignorarse este nodo de texto? (scripts, estilos y lo marcado .notranslate)
function shouldSkip(parent) {
  return !parent || parent.closest("script, style, noscript, .notranslate");
}

function translate(root, dict) {
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
    const m = node.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!m) continue;
    const [, lead, core, trail] = m;
    const translation = dict[core.replace(/\s+/g, " ")];
    if (translation) node.nodeValue = lead + translation + trail;
  }
}

function init() {
  const lang = getLang();
  document.documentElement.lang = lang;
  if (lang !== "en") translate(document.body, DICTS[lang]);

  // El Layout oculta la pagina mientras se traduce (evita el parpadeo del ingles)
  document.documentElement.classList.remove("i18n-pending");

  const select = document.getElementById("lang-select");
  if (select) {
    select.value = lang;
    select.addEventListener("change", () => {
      setLang(select.value);
      location.reload();
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
