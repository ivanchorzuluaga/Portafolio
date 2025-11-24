# 📸 Cómo agregar imágenes a tus proyectos

## Estructura de carpetas

Crea la carpeta `projects` dentro de `public`:

```
/public
  └── projects/
      ├── modelforce-1.jpg
      ├── modelforce-2.jpg
      ├── modelforce-3.jpg
      ├── dashboard-1.jpg
      ├── dashboard-2.jpg
      └── dashboard-3.jpg
```

## Agregar imágenes a un proyecto

En el archivo `src/data/portfolio.ts`, cada proyecto puede tener un array `images`:

```typescript
{
  id: "1",
  title: "Model Force",
  description: "...",
  technologies: [...],
  image: "/profile.jpg",
  images: [
    "/projects/modelforce-1.jpg",
    "/projects/modelforce-2.jpg",
    "/projects/modelforce-3.jpg",
  ],
  github: "...",
  featured: true,
}
```

## Características de la galería

✅ **Modal fullscreen** - Las imágenes se muestran en pantalla completa
✅ **Navegación** - Flechas para avanzar/retroceder
✅ **Thumbnails** - Miniaturas para saltar a cualquier imagen
✅ **Teclado** - ← → para navegar, ESC para cerrar
✅ **Contador** - Muestra "1 / 3" actual
✅ **Responsiva** - Funciona en móvil y desktop
✅ **Estética coherente** - Mantiene el estilo post-apocalíptico

## Botón "Imágenes"

El botón aparece automáticamente en la tarjeta del proyecto si:
- El proyecto tiene el array `images` definido
- El array tiene al menos 1 imagen

El botón muestra el número de imágenes: **"Imágenes (3)"**

## Formato de imágenes recomendado

- **Formato**: JPG o PNG
- **Tamaño**: 1920x1080px o 1600x900px (16:9)
- **Peso**: Optimizado < 500KB por imagen
- **Nombres**: Descriptivos y consistentes
  - `proyecto-1.jpg`, `proyecto-2.jpg`, etc.
  - `proyecto-dashboard.jpg`, `proyecto-login.jpg`, etc.

## Herramientas para optimizar imágenes

- [TinyPNG](https://tinypng.com/) - Compresión online
- [Squoosh](https://squoosh.app/) - Compresión avanzada
- [ImageOptim](https://imageoptim.com/) - App para Mac

## Ejemplo completo

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Mi Proyecto",
    description: "Descripción del proyecto",
    technologies: ["React", "Node.js"],
    image: "/profile.jpg", // Imagen principal (opcional)
    images: [
      "/projects/miproyecto-home.jpg",
      "/projects/miproyecto-dashboard.jpg",
      "/projects/miproyecto-features.jpg",
    ],
    github: "https://github.com/...",
    featured: true,
  },
];
```

## ¿No tienes imágenes aún?

Puedes omitir el array `images` y el botón no aparecerá:

```typescript
{
  id: "1",
  title: "Mi Proyecto",
  description: "...",
  technologies: [...],
  image: "/profile.jpg",
  // Sin array images - el botón no se mostrará
  github: "...",
  featured: true,
}
```

