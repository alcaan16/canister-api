# 🟢 Canister API

> "El corazón que filtra y distribuye los datos del ecosistema MundoAcuático."

**Canister API** es un servicio RESTful construido con Node.js y Express que alimenta la plataforma [MundoAcuático](https://github.com/alcaan16/mundoacuatico). Su función es servir información detallada sobre especies amazónicas, parámetros del agua y configuraciones de biotopos.

## 🛠️ Tecnologías

- **Runtime:** Node.js
- **Framework:** Express.js
- **Arquitectura:** MVC (Modelo-Vista-Controlador)
- **Datos:** JSON local (Simulación de BBDD NoSQL)
- **Despliegue:** Vercel

## 🚀 Instalación y Uso Local

Si quieres clonar este "filtro" en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/alcaan16/canister-api.git](https://github.com/alcaan16/canister-api.git)
    cd canister-api
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Arrancar el servidor:**
    ```bash
    npm run dev
    ```
    *El servidor iniciará en `http://localhost:1234` (o el puerto configurado).*

## 🔌 Endpoints Principales

La API expone los siguientes recursos para el consumo del frontend:

### 🐟 Especies (`/species`)
- `GET /species`: Obtiene el inventario completo (Altums, Corydoras, etc.).
- `GET /species?category=ciclidos`: Filtra por familia o tipo.
- `GET /species/:id`: Devuelve el detalle de una especie específica (ej: `pterophyllum-altum`).

### 🗂️ Categorías (`/categories`)
- `GET /categories`: Lista todas las familias disponibles en el acuario.

## ⚠️ Nota sobre Persistencia
Actualmente, el proyecto utiliza un sistema de archivos JSON estático (`local-database`). En producción (Vercel), los datos son de **solo lectura**. La persistencia real se implementará en futuras versiones con SQL.

---
Hecho con ❤️ y 🐠 por [alcaan16](https://github.com/alcaan16).