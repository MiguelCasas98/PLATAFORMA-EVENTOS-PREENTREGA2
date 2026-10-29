# Plataforma de Eventos – Pre‑Entrega 2

### Descripción

Implementación del registro seguro de usuarios para la Plataforma de Eventos e Inscripciones.
Se incorpora validación de datos, normalización de email, hash de contraseña con bcrypt y persistencia en MongoDB, respetando la arquitectura en capas.

### Tecnologías utilizadas

* Node.js
* Express
* ESM (import/export)
* dotenv
* Mongoose
* bcrypt

### Estructura del proyecto

```
src/
  app.js
  server.js
  config/
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

### Instalación

```
npm install
```

### Variables de entorno

Crear un archivo .env basado en .env.example.

Variables necesarias:

* PORT
* NODE_ENV
* MONGO_URL
* JWT_SECRET

### Cómo ejecutar el proyecto

```
npm run start
```

El servidor se inicia en el puerto definido en .env.

---

# Rutas disponibles

### GET /api/health

Devuelve:

```
{ "status": "ok", "message": "Servidor activo" }
```

### GET /api/events

Devuelve:

```
{ "status": "success", "payload": [] }
```

### GET /api/sessions

Devuelve:

```
{ "status": "success", "payload": [] }
```

---

# POST /api/sessions/register

### Descripción

Registra un usuario nuevo en la plataforma.
Valida campos obligatorios, normaliza el email, verifica duplicados, hashea la contraseña y guarda el usuario en MongoDB.
La respuesta no incluye la contraseña.

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

### Email ya registrado (409)

```
{ "status": "error", "message": "El email ya está registrado" }
```