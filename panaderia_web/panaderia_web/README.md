# Panadería San Pedro – Sitio Web

Sitio web responsivo para la Panadería San Pedro desarrollado con React y Firebase.

## Tecnologías Utilizadas

### Frontend

* React 18
* React Router DOM
* React Icons
* React Hot Toast
* CSS Modules

### Backend y Servicios

* Firebase Authentication
* Cloud Firestore
* Firebase Storage
* Firebase Hosting

---

## Funcionalidades

### Sitio Público

* Página de inicio.
* Catálogo de productos.
* Información de la panadería.
* Ubicación y datos de contacto.
* Diseño responsivo para dispositivos móviles y escritorio.

### Panel Administrativo

* Inicio de sesión para administradores.
* Gestión de productos.
* Creación de nuevos productos.
* Edición de productos existentes.
* Eliminación de productos.
* Carga de imágenes mediante Firebase Storage.

---

## Arquitectura del Proyecto

```text
src/
├── admin/              # Panel administrativo
├── assets/             # Imágenes y recursos estáticos
├── components/         # Componentes reutilizables
├── context/            # Contextos de React
├── data/               # Datos locales de respaldo
├── firebase/           # Configuración de Firebase
├── pages/              # Páginas principales
└── styles/             # Estilos CSS
```

---

## Configuración de Firebase

### 1. Crear Proyecto

Crear un proyecto en Firebase Console.

### 2. Habilitar Servicios

Activar:

* Authentication (Email/Password)
* Cloud Firestore
* Firebase Storage
* Firebase Hosting

### 3. Configurar Firebase

Editar:

```text
src/firebase/config.js
```

con los datos del proyecto Firebase.

### 4. Crear Usuario Administrador

En Firebase Authentication:

```text
Authentication
↓
Users
↓
Add User
```

---

## Instalación

Instalar dependencias:

```bash
npm install
```

Iniciar entorno de desarrollo:

```bash
npm start
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

---

## Despliegue

Generar versión de producción:

```bash
npm run build
```

Publicar en Firebase Hosting:

```bash
firebase deploy
```

---

## Base de Datos

El sistema utiliza Cloud Firestore para almacenar información dinámica como:

* Productos.
* Categorías.
* Configuración futura del sistema.

Las imágenes de los productos se almacenan en Firebase Storage y se relacionan mediante URLs públicas guardadas en Firestore.

---

## Hosting

La aplicación se encuentra desplegada mediante Firebase Hosting, proporcionando:

* HTTPS automático.
* Alta disponibilidad.
* Integración nativa con Firebase.
* Soporte para aplicaciones SPA desarrolladas con React.

---


##  Contacto de la panadería

- **Dirección:** Calle 71D Sur #79-6, Bosa Naranjos, Bogotá
- **WhatsApp:** +57 310 652 5559
- **Instagram:** @panaderiasanpedro2026
- **Horario:** 6:00 am – 11:00 pm, todos los días
  
---

## Autor

Proyecto desarrollado para la Panadería San Pedro como solución web para la gestión y visualización de productos.

