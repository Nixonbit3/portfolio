// ============================================================
//  Minijuego de fondo de la portada: un Brick Breaker en <canvas>
//  - Juega solo (piloto automatico) y cede la pala a quien mueva
//    el raton o arrastre el dedo en horizontal.
//  - Se detiene fuera de pantalla y con la pestana oculta.
//  - No arranca si el usuario prefiere menos movimiento.
//  - Es decoracion: el lienzo va detras del texto y no recibe clics.
// ============================================================

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Degradado de marca (morado -> fucsia -> cian), el mismo del titular
const STOPS = [
  [168, 85, 247],
  [232, 121, 249],
  [34, 211, 238],
];

function brand(t) {
  const s = clamp(t, 0, 1) * (STOPS.length - 1);
  const i = Math.min(STOPS.length - 2, Math.floor(s));
  const f = s - i;
  const a = STOPS[i];
  const b = STOPS[i + 1];
  const ch = (k) => Math.round(a[k] + (b[k] - a[k]) * f);
  return `rgb(${ch(0)},${ch(1)},${ch(2)})`;
}

// Limite de pixeles reales del lienzo: por encima no se gana nitidez
// visible y si coste por fotograma en pantallas grandes de alta densidad.
const MAX_PIXELS = 3.2e6;
const MAX_PARTICLES = 60;
const TRAIL = 10;

export function createHeroGame({ hero, canvas, first, hud, scoreEl }) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  let W = 0;
  let H = 0;
  let dpr = 1;
  let small = false;
  let wallTop = 0;
  let bricksBottom = 0;
  let cols = 0;
  let rows = 0;
  let bricks = [];
  let remaining = 0;

  const paddle = { x: 0, y: 0, w: 0, h: 0 };
  const ball = { x: 0, y: 0, vx: 0, vy: 0, r: 6 };
  let baseSpeed = 0;
  let speed = 0;
  let trail = [];
  let particles = [];
  let sprite = null;

  let score = 0;
  let level = 1;
  let held = 0.9; // segundos que la bola sigue pegada a la pala
  let rebuildIn = 0; // segundos hasta montar el siguiente nivel
  let aim = 0; // desvio con el que apunta el piloto automatico
  let pointerX = 0;
  let userUntil = 0;
  let played = false;

  // ---------- Medidas ----------
  function layout() {
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    if (!w || !h) return false;

    W = w;
    H = h;
    small = W < 768;

    dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (W * H * dpr * dpr > MAX_PIXELS) dpr = Math.sqrt(MAX_PIXELS / (W * H));
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);

    // Techo: justo debajo de la barra de navegacion cuando esta tapa la portada
    const bar = document.querySelector("#main-nav > div");
    const heroTop = hero.getBoundingClientRect().top + window.scrollY;
    wallTop = Math.max(0, (bar ? bar.offsetHeight : 0) - heroTop);

    // Los bloques ocupan la franja libre entre la barra y el primer elemento.
    // offsetTop ignora las transformaciones de la animacion de entrada.
    const parent = first.offsetParent;
    const firstTop =
      first.offsetTop + (parent && parent !== hero ? parent.offsetTop : 0);
    const bh = small ? 10 : 14;
    const gap = small ? 6 : 8;
    const side = small ? 12 : 24;
    const bandTop = wallTop + (small ? 8 : 10);
    const bandBottom = firstTop - (small ? 10 : 12);

    const newRows = clamp(
      Math.floor((bandBottom - bandTop + gap) / (bh + gap)),
      0,
      small ? 3 : 4,
    );
    const newCols = clamp(
      Math.round((W - side * 2 + gap) / ((small ? 46 : 78) + gap)),
      5,
      20,
    );
    const bw = (W - side * 2 - gap * (newCols - 1)) / newCols;
    const keep =
      newRows === rows && newCols === cols && bricks.length === rows * cols;

    const next = [];
    for (let r = 0; r < newRows; r++) {
      for (let c = 0; c < newCols; c++) {
        const old = keep ? bricks[r * newCols + c] : null;
        next.push({
          x: side + c * (bw + gap),
          y: bandTop + r * (bh + gap),
          w: bw,
          h: bh,
          color: brand(newCols > 1 ? c / (newCols - 1) : 0),
          alive: old ? old.alive : true,
          t: old ? old.t : 0, // 0..1, progreso de aparicion
          delay: old ? old.delay : c * 0.025 + r * 0.07,
        });
      }
    }
    bricks = next;
    rows = newRows;
    cols = newCols;
    remaining = bricks.reduce((n, b) => n + (b.alive ? 1 : 0), 0);
    bricksBottom = rows ? bandTop + rows * (bh + gap) : 0;

    const centre = paddle.w ? (paddle.x + paddle.w / 2) / (W || 1) : 0.5;
    paddle.w = clamp(W * 0.13, 64, 150);
    paddle.h = small ? 6 : 8;
    paddle.y = H - (small ? 14 : 24);
    paddle.x = clamp(clamp(centre, 0, 1) * W - paddle.w / 2, 0, W - paddle.w);

    ball.r = small ? 4.5 : 6;
    baseSpeed = clamp(H * 0.52, 300, 500);
    setSpeed();

    // Si el cambio de tamano deja la bola fuera, vuelve a la pala
    if (ball.x < 0 || ball.x > W || ball.y < wallTop || ball.y > H) hold(0.5);

    buildSprite();
    return rows > 0;
  }

  function setSpeed() {
    speed = baseSpeed * Math.min(1.25, 1 + 0.05 * (level - 1));
    const v = Math.hypot(ball.vx, ball.vy);
    if (v > 0) {
      ball.vx = (ball.vx / v) * speed;
      ball.vy = (ball.vy / v) * speed;
    }
  }

  // La bola con su halo se dibuja una vez y luego se copia (mas barato que shadowBlur)
  function buildSprite() {
    const size = Math.ceil(ball.r * 8 * dpr);
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const g = c.getContext("2d");
    if (!g) return;
    const half = size / 2;
    const grad = g.createRadialGradient(half, half, 0, half, half, half);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.22, "rgba(255,255,255,0.95)");
    grad.addColorStop(0.3, "rgba(216,180,254,0.3)");
    grad.addColorStop(1, "rgba(34,211,238,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
    sprite = c;
  }

  // ---------- Reglas ----------
  function hold(seconds) {
    held = seconds;
    ball.vx = 0;
    ball.vy = 0;
    trail = [];
  }

  function launch() {
    const angle = Math.random() * 0.8 - 0.4;
    ball.vx = speed * Math.sin(angle);
    ball.vy = -speed * Math.cos(angle);
  }

  function breakBrick(b) {
    b.alive = false;
    remaining--;

    if (played) {
      score++;
      if (scoreEl) scoreEl.textContent = String(score);
      if (hud) hud.classList.add("has-score");
    }

    for (let i = 0; i < 5 && particles.length < MAX_PARTICLES; i++) {
      const life = 0.35 + Math.random() * 0.3;
      particles.push({
        x: b.x + Math.random() * b.w,
        y: b.y + b.h / 2,
        vx: (Math.random() - 0.5) * 220,
        vy: -40 - Math.random() * 120,
        size: 2 + Math.random() * 2.5,
        life,
        max: life,
        color: b.color,
      });
    }

    if (remaining <= 0) rebuildIn = 0.9;
  }

  function nextLevel() {
    level++;
    setSpeed();
    bricks.forEach((b, i) => {
      b.alive = true;
      b.t = 0;
      b.delay = (i % cols) * 0.025 + Math.floor(i / cols) * 0.07;
    });
    remaining = bricks.length;
  }

  // Punto donde caera la bola, contando los rebotes en las paredes
  function landingX() {
    if (ball.vy <= 0) return ball.x * 0.5 + W * 0.25;
    const t = (paddle.y - ball.r - ball.y) / ball.vy;
    const span = W - ball.r * 2;
    if (span <= 0) return W / 2;
    let x = ball.x + ball.vx * t - ball.r;
    x = ((x % (span * 2)) + span * 2) % (span * 2);
    if (x > span) x = span * 2 - x;
    return x + ball.r + aim * paddle.w * 0.3;
  }

  // Un paso de fisica; devuelve false si la bola se ha perdido
  function step(dt) {
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;
    const r = ball.r;

    if (ball.x < r) {
      ball.x = r;
      ball.vx = Math.abs(ball.vx);
    } else if (ball.x > W - r) {
      ball.x = W - r;
      ball.vx = -Math.abs(ball.vx);
    }
    if (ball.y < wallTop + r) {
      ball.y = wallTop + r;
      ball.vy = Math.abs(ball.vy);
    }

    // Pala: el angulo de salida depende de donde golpea, como en el juego real
    if (
      ball.vy > 0 &&
      ball.y + r >= paddle.y &&
      ball.y - r <= paddle.y + paddle.h &&
      ball.x >= paddle.x - r &&
      ball.x <= paddle.x + paddle.w + r
    ) {
      const half = paddle.w / 2;
      const offset = clamp((ball.x - (paddle.x + half)) / half, -1, 1);
      ball.vx = speed * Math.sin(offset);
      ball.vy = -speed * Math.cos(offset);
      ball.y = paddle.y - r;
      aim = Math.random() * 2 - 1;
    }

    // Bloques: como mucho uno por paso
    if (ball.y - r < bricksBottom) {
      for (const b of bricks) {
        if (!b.alive || b.t < 0.3) continue;
        const nx = clamp(ball.x, b.x, b.x + b.w);
        const ny = clamp(ball.y, b.y, b.y + b.h);
        const dx = ball.x - nx;
        const dy = ball.y - ny;
        if (dx * dx + dy * dy > r * r) continue;

        if (Math.abs(dx) > Math.abs(dy)) {
          ball.vx = dx > 0 ? Math.abs(ball.vx) : -Math.abs(ball.vx);
        } else if (dy !== 0) {
          ball.vy = dy > 0 ? Math.abs(ball.vy) : -Math.abs(ball.vy);
        } else {
          ball.vy = -ball.vy;
        }
        breakBrick(b);
        break;
      }
    }

    if (ball.y - r > H + 24) {
      hold(0.8);
      return false;
    }
    return true;
  }

  function update(dt, now) {
    // Pala
    const half = paddle.w / 2;
    let centre = paddle.x + half;
    if (now < userUntil) {
      centre += (pointerX - centre) * Math.min(1, dt * 22);
    } else {
      const target = held > 0 ? W / 2 : landingX();
      const max = speed * 1.5 * dt;
      centre += clamp(target - centre, -max, max);
    }
    paddle.x = clamp(centre - half, 0, W - paddle.w);

    // Bola
    if (held > 0) {
      held -= dt;
      ball.x = paddle.x + half;
      ball.y = paddle.y - ball.r - 1;
      if (held <= 0) launch();
    } else {
      const steps = Math.max(1, Math.ceil((speed * dt) / 5));
      const sdt = dt / steps;
      for (let i = 0; i < steps; i++) if (!step(sdt)) break;
      trail.push(ball.x, ball.y);
      if (trail.length > TRAIL * 2) trail.splice(0, 2);
    }

    // Bloques: aparecen escalonados y se desvanecen al romperse
    for (const b of bricks) {
      if (b.alive) {
        if (b.delay > 0) b.delay -= dt;
        else if (b.t < 1) b.t = Math.min(1, b.t + dt / 0.35);
      } else if (b.t > 0) {
        b.t = Math.max(0, b.t - dt / 0.2);
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      p.vy += 620 * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }

    if (rebuildIn > 0) {
      rebuildIn -= dt;
      if (rebuildIn <= 0) nextLevel();
    }
  }

  // ---------- Dibujo ----------
  function roundRect(x, y, w, h, radius) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, radius);
    else ctx.rect(x, y, w, h);
  }

  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    for (const b of bricks) {
      if (b.t <= 0) continue;
      const k = b.alive ? 0.86 + 0.14 * b.t : 0.6 + 0.4 * b.t;
      const w = b.w * k;
      const h = b.h * k;
      const x = b.x + (b.w - w) / 2;
      const y = b.y + (b.h - h) / 2;
      ctx.globalAlpha = 0.55 * b.t;
      ctx.fillStyle = b.color;
      roundRect(x, y, w, h, 4);
      ctx.fill();
      ctx.globalAlpha = 0.3 * b.t;
      ctx.fillStyle = "#fff";
      ctx.fillRect(x + 3, y + 1.5, w - 6, 1);
    }

    for (const p of particles) {
      ctx.globalAlpha = (p.life / p.max) * 0.8;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }

    const grad = ctx.createLinearGradient(paddle.x, 0, paddle.x + paddle.w, 0);
    grad.addColorStop(0, "#a855f7");
    grad.addColorStop(1, "#22d3ee");
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = grad;
    roundRect(paddle.x, paddle.y, paddle.w, paddle.h, paddle.h / 2);
    ctx.fill();

    if (sprite) {
      const size = ball.r * 8;
      const n = trail.length / 2;
      for (let i = 0; i < n; i++) {
        const f = (i + 1) / n;
        const s = size * (0.35 + 0.45 * f);
        ctx.globalAlpha = 0.22 * f;
        ctx.drawImage(sprite, trail[i * 2] - s / 2, trail[i * 2 + 1] - s / 2, s, s);
      }
      ctx.globalAlpha = 1;
      ctx.drawImage(sprite, ball.x - size / 2, ball.y - size / 2, size, size);
    }

    ctx.globalAlpha = 1;
  }

  // ---------- Bucle ----------
  let raf = 0;
  let last = 0;
  let running = false;
  let enabled = false;
  let onScreen = true;

  // Guarda de rendimiento: si los primeros segundos van por debajo de ~35 fps,
  // el equipo no da para el fondo animado y se apaga (el texto no se toca).
  let sampled = 0;
  let sampledMs = 0;

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const gap = now - last;
    // Tope de 33 ms: tras un parón (cambio de pestaña) no hay saltos
    const dt = Math.min(0.033, Math.max(0, gap / 1000));
    last = now;

    if (sampled < 120 && gap < 250) {
      sampled++;
      sampledMs += gap;
      if (sampled === 120 && sampledMs / sampled > 28) {
        enabled = false;
        running = false;
        cancelAnimationFrame(raf);
        canvas.classList.remove("is-on");
        if (hud) hud.classList.remove("is-on");
        return;
      }
    }

    update(dt, now);
    draw();
  }

  function sync() {
    const should = enabled && onScreen && !document.hidden;
    if (should && !running) {
      running = true;
      last = performance.now();
      sampled = 0;
      sampledMs = 0;
      raf = requestAnimationFrame(frame);
    } else if (!should && running) {
      running = false;
      cancelAnimationFrame(raf);
    }
  }

  function relayout() {
    enabled = layout();
    canvas.classList.toggle("is-on", enabled);
    if (hud) hud.classList.toggle("is-on", enabled);
    if (enabled && !running) draw();
    sync();
  }

  // ---------- Entrada ----------
  function onMove(e) {
    if (!e.isPrimary) return;
    pointerX = e.clientX - hero.getBoundingClientRect().left;
    userUntil = performance.now() + (e.pointerType === "mouse" ? 2500 : 1200);
    played = true;
  }

  function onLeave(e) {
    if (e.pointerType === "mouse") userUntil = 0;
  }

  function start() {
    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerdown", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave, { passive: true });

    document.addEventListener("visibilitychange", sync);

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        onScreen = entries[entries.length - 1].isIntersecting;
        sync();
      }).observe(hero);
    }

    // Recalcula al cambiar el tamano o al recolocarse el texto (carga de fuentes)
    let timer = 0;
    const queue = () => {
      clearTimeout(timer);
      timer = setTimeout(relayout, 150);
    };
    if ("ResizeObserver" in window) {
      const ro = new ResizeObserver(queue);
      ro.observe(hero);
      if (first.parentElement) ro.observe(first.parentElement);
    } else {
      window.addEventListener("resize", queue);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(queue);

    relayout();
  }

  // Lectura del estado, para las pruebas
  const state = () => ({
    W,
    H,
    dpr,
    rows,
    cols,
    wallTop,
    bricksBottom,
    remaining,
    score,
    level,
    speed,
    held,
    running,
    enabled,
    ball: { ...ball },
    paddle: { ...paddle },
  });

  return { start, relayout, update, draw, state };
}

function boot() {
  const hero = document.getElementById("hero");
  const canvas = document.getElementById("hero-game");
  const first = hero ? hero.querySelector("[data-hero-first]") : null;
  if (!hero || !canvas || !first || !canvas.getContext) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // Solo con raton: en moviles y tablets la pala quedaba bajo la primera
  // pantalla (era un simple fondo) y la animacion continua gasta bateria
  // y puede dar tirones. Los estilos de .hero-stack usan esta misma consulta.
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const game = createHeroGame({
    hero,
    canvas,
    first,
    hud: document.getElementById("hero-hud"),
    scoreEl: document.getElementById("hero-score"),
  });
  if (game) game.start();
}

// Arranca cuando la pagina ya ha cargado y el texto de la portada ha entrado:
// asi no compite con la primera pintura.
if (typeof window !== "undefined") {
  const later = () => setTimeout(boot, 600);
  if (document.readyState === "complete") later();
  else window.addEventListener("load", later, { once: true });
}
