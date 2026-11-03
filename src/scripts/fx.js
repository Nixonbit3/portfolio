// ============================================================
//  Efectos de la portada
//  - Barra de experiencia: lo que llevas leido de la pagina.
//  - Avisos de nivel al llegar a cada seccion (una vez por visita).
//  - Aparicion de los proyectos al entrar en pantalla.
//  Todo se desactiva con prefers-reduced-motion.
// ============================================================

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce) {
  document.documentElement.classList.add("fx");

  // ---------- Barra de experiencia ----------
  const fill = document.querySelector(".xp__fill");
  if (fill) {
    let queued = false;
    const update = () => {
      queued = false;
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const t = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      fill.style.transform = `scaleX(${t.toFixed(4)})`;
    };
    const request = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    request();
  }

  // ---------- Aparicion de los proyectos ----------
  if ("IntersectionObserver" in window) {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const row = e.target;
          reveal.unobserve(row);
          // Espera a que la imagen este lista: asi nunca se anima un hueco vacio
          const img = row.querySelector("img");
          const go = () => row.classList.add("in");
          if (img && !img.complete) {
            img.addEventListener("load", go, { once: true });
            img.addEventListener("error", go, { once: true });
          } else {
            go();
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".row").forEach((row) => reveal.observe(row));

    // Red de seguridad: si por lo que sea el observador no avisa, lo que ya
    // esta a la vista no se queda oculto.
    window.setTimeout(() => {
      document.querySelectorAll(".row:not(.in)").forEach((row) => {
        if (row.getBoundingClientRect().top < window.innerHeight * 1.2) row.classList.add("in");
      });
    }, 2500);

    // ---------- Avisos de nivel ----------
    const toast = document.querySelector(".toast");
    const lang = () => {
      try {
        const v = localStorage.getItem("lang");
        return v === "es" || v === "ca" ? v : "en";
      } catch {
        return "en";
      }
    };
    const LEVELS = {
      work: {
        en: ["Level 1", "Selected work"],
        es: ["Nivel 1", "Proyectos destacados"],
        ca: ["Nivell 1", "Projectes destacats"],
      },
      approach: {
        en: ["Level 2", "How I build"],
        es: ["Nivel 2", "Cómo trabajo"],
        ca: ["Nivell 2", "Com treballo"],
      },
      contact: {
        en: ["Final level", "Say hello"],
        es: ["Nivel final", "Di hola"],
        ca: ["Nivell final", "Digues hola"],
      },
    };
    const UNLOCKED = { en: "Level unlocked", es: "Nivel desbloqueado", ca: "Nivell desbloquejat" };

    let seen = [];
    try {
      seen = JSON.parse(sessionStorage.getItem("levels") || "[]");
    } catch {
      /* sin almacenamiento: los avisos se repetiran, no pasa nada */
    }

    let hideTimer = 0;
    const queue = [];
    let showing = false;

    const next = () => {
      if (showing || !queue.length || !toast) return;
      showing = true;
      const id = queue.shift();
      const [kicker, name] = LEVELS[id][lang()];
      toast.innerHTML = "";
      const a = document.createElement("span");
      a.className = "toast__kicker";
      a.textContent = `${UNLOCKED[lang()]} · ${kicker}`;
      const b = document.createElement("span");
      b.className = "toast__text";
      b.textContent = name;
      toast.append(a, b);
      toast.classList.add("is-on");
      hideTimer = window.setTimeout(() => {
        toast.classList.remove("is-on");
        window.setTimeout(() => {
          showing = false;
          next();
        }, 500);
      }, 2600);
    };

    const levels = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.id;
          if (e.isIntersecting && !seen.includes(id)) {
            seen.push(id);
            try {
              sessionStorage.setItem("levels", JSON.stringify(seen));
            } catch {
              /* ignore */
            }
            queue.push(id);
            next();
          }
        });
      },
      { threshold: 0.35 }
    );
    Object.keys(LEVELS).forEach((id) => {
      const el = document.getElementById(id);
      if (el) levels.observe(el);
    });

    window.addEventListener("pagehide", () => window.clearTimeout(hideTimer));
  }
}
