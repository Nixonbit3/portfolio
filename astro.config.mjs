// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nixondanielcorrea.netlify.app",

  // Las paginas de la version anterior ahora son secciones de la portada.
  // Se generan como redireccion estatica para que los enlaces viejos
  // (LinkedIn, CV, correos) sigan funcionando.
  redirects: {
    "/about": "/#background",
    "/proyectos": "/#work",
    "/contact": "/#contact",
  },
});
