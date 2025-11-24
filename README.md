# Portafolio Post-Apocalíptico

Portafolio personal con estética post-apocalíptica sobria y minimalista, construido con Astro y Tailwind CSS.

## Características

- 🎨 **Diseño Post-Apocalíptico**: Estética cruda con colores sobrios y texturas desgastadas
- ⚡ **Rápido**: Construido con Astro para máximo rendimiento
- 📱 **Responsivo**: Se adapta a todos los dispositivos
- 🎯 **Minimalista**: Contenido conciso y directo

## Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Bun](https://bun.sh/) - Runtime y package manager

## Instalación

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun run dev

# Construir para producción
bun run build

# Vista previa
bun run preview
```

## Personalización

### Datos

Edita `src/data/portfolio.ts` para actualizar:

- Información personal
- Proyectos (actualmente 2)
- Experiencia laboral (actualmente 2)
- Skills (actualmente 9)
- Enlaces de redes sociales

### Colores

Paleta post-apocalíptica en `tailwind.config.mjs`:

- **wasteland**: Grises, óxido, arena, oliva
- **decay**: Tonos oscuros para fondos

### Estructura

```
/
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── portfolio.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## Deploy

```bash
# Vercel
vercel

# Netlify
# Build: bun run build
# Publish: dist
```

## Licencia

Código abierto para uso personal.
