# Nixon Correa · Portfolio

Portfolio de Junior Unity Developer (gameplay y juegos móviles).
Web: https://nixondanielcorrea.netlify.app

## Cómo está hecha

- **Astro** (sitio estático, sin React ni Tailwind) y CSS propio con variables.
- **Una sola tipografía**, Archivo, autoalojada (`public/fonts`). Sin peticiones a terceros.
- **Tema claro y oscuro** automáticos según el sistema (`prefers-color-scheme`).
- **ES/EN**: el HTML se sirve en inglés y el español se aplica en el navegador con el
  diccionario de `src/scripts/i18n.js`. Al cambiar un texto de una página, hay que
  añadir o actualizar su clave en ese diccionario.
- **Correo protegido**: no aparece en el HTML, se reconstruye en el navegador
  (`src/components/MailLink.astro` + `src/scripts/mail.js`).
- **Currículum** en `/cv`, preparado para imprimirse en una sola hoja A4.
- Las rutas antiguas `/about`, `/proyectos` y `/contact` redirigen a su sección en la portada.

## Estructura

```
src/
  pages/        index (portada), cv, 404
  components/   Nav, Footer, MailLink
  layouts/      Layout (cabecera, SEO, Open Graph)
  styles/       global.css (tokens y componentes)
  scripts/      i18n.js, mail.js
  assets/       imágenes de los proyectos
public/         _headers (seguridad), fuentes, favicon, og.jpg
```

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Despliegue

Netlify construye `dist/` en cada push a `main`. Cada push cuenta como un despliegue:
conviene agrupar los cambios y subirlos de una vez.
