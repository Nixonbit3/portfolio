// ============================================================
//  Inclinacion 3D de las tarjetas de proyecto al pasar el raton
//  - [data-tilt] escucha el raton; .tilt-card es lo que gira
//    (puede ser el mismo elemento o uno interior).
//  - Solo con raton: en tactil no hay "hover" y gastaria bateria.
//  - Los estilos estan en global.css.
// ============================================================

const MAX_DEG = 6;

function bind(el) {
  if (el.dataset.tiltReady) return;
  el.dataset.tiltReady = "1";

  // Posicion de la tarjeta en la pagina, tomada al entrar (antes de girar):
  // medirla mientras gira daria valores que cambian con el propio giro.
  let box = null;
  let raf = 0;
  let px = 0;
  let py = 0;

  const apply = () => {
    raf = 0;
    if (!box) return;
    const x = Math.min(1, Math.max(0, (px - box.left) / box.width));
    const y = Math.min(1, Math.max(0, (py - box.top) / box.height));
    el.style.setProperty("--tilt-x", `${((0.5 - y) * MAX_DEG * 2).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${((x - 0.5) * MAX_DEG * 2).toFixed(2)}deg`);
    el.style.setProperty("--shine-x", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--shine-y", `${(y * 100).toFixed(1)}%`);
  };

  const track = (e) => {
    px = e.pageX;
    py = e.pageY;
    if (!raf) raf = requestAnimationFrame(apply);
  };

  el.addEventListener("pointerenter", (e) => {
    if (e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    box = {
      left: r.left + window.scrollX,
      top: r.top + window.scrollY,
      width: r.width,
      height: r.height,
    };
    el.classList.add("is-tilting");
    track(e);
  });

  el.addEventListener("pointermove", (e) => {
    if (box) track(e);
  });

  el.addEventListener("pointerleave", () => {
    box = null;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    el.classList.remove("is-tilting");
  });
}

function init() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("[data-tilt]").forEach(bind);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
