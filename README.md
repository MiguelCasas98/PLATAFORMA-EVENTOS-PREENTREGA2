# Plataforma de Eventos – Pre‑Entrega 2

### Descripción

Implementación del registro seguro de usuarios para la Plataforma de Eventos e Inscripciones.
Se valida la entrada, se normaliza el email, se evita el registro duplicado, se hashea la contraseña con bcrypt y se persiste el usuario en MongoDB, respetando la arquitectura en capas.

### Tecnologías utilizadas

* Node.js
* Express
* ESM (import/export)
* dotenv
* Mongoose
* bcrypt

---

# Estructura del proyecto

```
src/
  app.js
  server.js
  config/
    db.js
    config.js
  routes/
    events.router.js
    sessions.router.js
  controllers/
    events.controller.js
    sessions.controller.js
  services/
    sessions.service.js
  repositories/
    users.repository.js
  dao/
    users.dao.js
  models/
    User.js
    Event.js
  middlewares/
  utils/
    hash.js
.env.example
.gitignore
package.json
README.md
```
---

# Instalación

```
npm install
```
---

# Variables de entorno

Crear un archivo .env basado en .env.example.

Variables necesarias:

* PORT
* NODE_ENV
* MONGO_URL
* JWT_SECRET
---

# Cómo ejecutar el proyecto

```
npm run start
```

El servidor se inicia en el puerto definido en .env.

---

# Rutas disponibles

### GET /api/health

```
{ "status": "ok", "message": "Servidor activo" }
```

### GET /api/events

```
{ "status": "success", "payload": [] }
```

### GET /api/sessions

Esta ruta existe pero no está implementada en esta pre‑entrega.
Devuelve un error controlado indicando que el repositorio no está disponible.

---

# POST /api/sessions/register

### Descripción

Registra un usuario nuevo en la plataforma.
Incluye:

* Validación de campos obligatorios
* Validación de formato de email
* Normalización del email (trim + toLowerCase)
* Verificación de email duplicado
* Hash seguro de contraseña con bcrypt
* Persistencia en MongoDB
* Respuesta sin incluir la contraseña
---

### Body esperado (JSON)

```
{
  "first_name": "Ana",
  "last_name": "Pérez",
  "email": "Ana@Mail.com ",
  "password": "Secreta123"
}
```

### Respuesta exitosa (201)

```
{
  "status": "success",
  "payload": {
    "id": "665f2a...",
    "first_name": "Ana",
    "last_name": "Pérez",
    "email": "ana@mail.com",
    "role": "user"
  }
}
```


### Campos faltantes o email inválido (400)

```
{ "status": "error", "message": "Faltan campos obligatorios" }
```

o

```
{ "status": "error", "message": "Email inválido" }
```
---

### Email ya registrado (409)

```
{ "status": "error", "message": "El email ya está registrado" }
```
---
