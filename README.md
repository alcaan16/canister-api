# canister-api

API REST que sirve el catálogo de especies y categorías de la aplicación
[MundoAcuático](https://github.com/alcaan16/mundoacuatico).

## Qué resuelve

El frontend necesita consultar un catálogo con filtrado por categoría y por nivel de dificultad, y
paginar resultados sin descargar el conjunto completo. La API expone ese catálogo como recurso REST
y deja al cliente únicamente la presentación.

## Stack y arquitectura

- **Node.js + Express 5**, módulos ES.
- **Arquitectura MVC**: `routes/` define los endpoints, `controllers/` valida y responde,
  `models/` contiene el acceso a datos. Ninguna capa conoce a la de arriba.
- **Middleware de CORS propio** en `middlewares/`.
- **Configuración centralizada** en `config.js` (puerto, límites de paginación).
- **Persistencia:** ficheros JSON en `data/`. El modelo está aislado precisamente para poder
  sustituirlos por una base de datos sin tocar controladores ni rutas.
- **Despliegue:** Vercel (`vercel.json` con rewrite a `app.js`).

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/fish` | Listado. Query params: `limit`, `offset`, `category_slug`, `level` |
| `GET` | `/fish/:slug` | Detalle por slug. Devuelve 404 si no existe |
| `POST` | `/fish` | Alta |
| `PUT` | `/fish/:id` | Reemplazo completo |
| `PATCH` | `/fish/:id` | Actualización parcial |
| `DELETE` | `/fish/:id` | Baja |
| `GET` | `/fish-categories` | Categorías |
| `GET` | `/health` | Estado del servicio |

## Alcance: qué está y qué no

**Implementado:** CRUD completo sobre el recurso `fish`, filtrado combinado por categoría y nivel,
paginación con valores por defecto, respuesta 404 tipada, separación MVC estricta, CORS.

**No implementado:** autenticación y autorización, persistencia real en base de datos (los datos
viven en JSON y las escrituras no sobreviven a un reinicio), validación de esquema en el body y
tests automatizados.

## Ejecutar en local

```bash
git clone https://github.com/alcaan16/canister-api.git
cd canister-api
npm install
node --watch app.js
```

Servidor en `http://localhost:1234`. Comprobación rápida: `GET /health`.
