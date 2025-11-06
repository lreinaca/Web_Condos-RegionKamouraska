# Despliegue a Cloudflare Pages (Next.js)

Este proyecto está hecho con Next.js. Aquí tienes instrucciones para desplegarlo en Cloudflare Pages en dos escenarios: export estático (simple) o usar Pages con soporte Next (más avanzado).

## 1) Export estático (recomendado si no usas SSR ni API dinámicas)

- Paso 1: Instalar dependencias (si no lo has hecho)

```bash
npm install
```

 - Paso 2: Construir (con `output: 'export'` en `next.config.js`) — Next generará los archivos estáticos en la carpeta `out/` durante `next build`.

```bash
npm run build
```

Esto generará la carpeta `out/` con los archivos estáticos (Next 14 usa `output: 'export'` en `next.config.js`, por eso ya no hay `next export`).

- Paso 3: Desplegar a Cloudflare Pages usando wrangler

```bash
npx wrangler pages deploy ./out --project-name condos-region-kamouraska
```

He actualizado el script `deploy:pages` para usar el nombre de proyecto `condos-region-kamouraska`. Puedes ejecutar el despliegue con:

```bash
npm run deploy:pages
```

## 2) Next en Pages (SSR/ISR/funcionalidades avanzadas)

Si tu app usa SSR o funciones avanzadas (server components, middleware, API routes), debes usar la integración oficial "Next on Pages" o el adapter recomendado por Cloudflare. Esto requiere pasos adicionales (instalar el paquete `@cloudflare/next-on-pages` o usar la integración desde la UI de Pages) y algunas configuraciones extra. Dime si quieres que prepare esa configuración y los pasos detallados.

## Notas adicionales
- El comando `wrangler pages deploy` requiere que tengas instalado `wrangler` (se usa vía `npx` si no lo tienes globalmente).
- Asegúrate de conectar el repositorio en Cloudflare Pages si quieres despliegues automáticos desde Git.
- Si tu app no puede ser exportada estáticamente (usa rutas dinámicas con data fetching en el servidor), dime y preparo la opción de "Next on Pages".

Si quieres que ejecute alguno de estos pasos aquí (crear archivo Worker de prueba, cambiar nombre del proyecto en el script, o preparar la integración Next-on-Pages), dime cuál y lo hago ahora.
