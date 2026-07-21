// Reconstruye en el navegador los enlaces de correo protegidos.
//
// El HTML servido no contiene ninguna direccion ni "mailto:", solo una
// cadena codificada en un atributo data. Los recolectores de spam buscan
// patrones "algo@algo.com" en el HTML crudo y no ejecutan JavaScript,
// asi que no encuentran nada que robar.
function revealMailLinks() {
  document.querySelectorAll("a.mail-link[data-mail]").forEach((el) => {
    const encoded = el.dataset.mail;
    if (!encoded) return;

    try {
      const address = [...atob(encoded)].reverse().join("");
      el.href = `mailto:${address}`;

      // Si hay un hueco reservado, se rellena con la propia direccion
      const placeholder = el.querySelector(".mail-text");
      if (placeholder) placeholder.textContent = address;

      el.removeAttribute("data-mail");
    } catch {
      /* si algo falla, el enlace simplemente queda inactivo */
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", revealMailLinks);
} else {
  revealMailLinks();
}

document.addEventListener("astro:after-swap", revealMailLinks);
