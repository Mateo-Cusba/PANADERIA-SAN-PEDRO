# Panadería San Pedro — Sitio Web

Sitio web responsivo para la **Panadería San Pedro** de Bogotá.  
Stack: **React + Firebase + Vercel**

---

## 🗂 Estructura del proyecto

```
src/
├── admin/          # Panel administrador (login + dashboard)
├── assets/images/  # Imágenes del logo, portada y productos
├── components/     # Navbar, Footer, ProductCard
├── context/        # AuthContext (Firebase Auth)
├── data/           # products.js — catálogo local de productos
├── firebase/       # config.js — configuración de Firebase
└── pages/          # Home, Menu, Nosotros, Ubicacion
```

---

## 🚀 Instalación y desarrollo

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Firebase

1. Ve a [https://console.firebase.google.com](https://console.firebase.google.com)
2. Crea un nuevo proyecto (ej: `panaderia-san-pedro`)
3. Habilita:
   - **Authentication** → Email/Password
   - **Firestore Database**
   - **Storage**
4. En Configuración del proyecto → Tus apps → Web, copia la config
5. Pega los valores en `src/firebase/config.js`

### 3. Crear el usuario administrador

En Firebase Console → Authentication → Agregar usuario:
- **Email:** el que prefieras
- **Contraseña:** segura (mín. 8 caracteres)

### 4. Aplicar reglas de seguridad

- Copia el contenido de `firestore.rules` en Firebase Console → Firestore → Reglas
- Copia el contenido de `storage.rules` en Firebase Console → Storage → Reglas

### 5. Arrancar en desarrollo

```bash
npm start
```

---

## 🌐 Despliegue en Vercel

```bash
npm run build
```

Luego importa el proyecto en [vercel.com](https://vercel.com).  
El archivo `vercel.json` ya está configurado para manejar el enrutamiento SPA.

---

## 📱 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio — Hero, accesos rápidos, destacados |
| `/menu` | Menú completo con filtros por categoría y búsqueda |
| `/nosotros` | Historia de la panadería |
| `/ubicacion` | Mapa embebido + dirección + cómo llegar |
| `/admin` | Login (ruta oculta) |
| `/admin/dashboard` | Panel CRUD de productos y postulaciones |

---

## ⚙️ Panel administrador (`/admin`)

- **Productos:** agregar, editar, eliminar, cambiar imagen
- **Postulaciones:** ver solicitudes de trabajo, descargar CV, marcar como revisada

---

## 📞 Contacto de la panadería

- **Dirección:** Calle 71D Sur #79-6, Bosa Naranjos, Bogotá
- **WhatsApp:** +57 310 652 5559
- **Instagram:** @panaderiasanpedro2026
- **Horario:** 6:00 am – 11:00 pm, todos los días
