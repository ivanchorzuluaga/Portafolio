# 📱 Guía de Responsive Design

## Breakpoints del Proyecto

```css
xs:  475px  /* Teléfonos grandes */
sm:  640px  /* Tablets pequeñas */
md:  768px  /* Tablets */
lg:  1024px /* Laptops */
xl:  1280px /* Desktops */
2xl: 1536px /* Pantallas grandes */
```

## Optimizaciones Aplicadas

### ✅ Hero Section
- **Títulos**: Escalan de 4xl (móvil) a 8xl (desktop)
- **Foto**: Tamaños adaptativos 256px → 450px
- **Botones**: Touch-friendly 44px mínimo
- **Badge**: Texto adaptativo (oculta palabras en muy móvil)
- **Grid**: Stack en móvil, 2 columnas en lg
- **Decoraciones**: Responsive y fuera de vista en móvil

### ✅ Projects Section
- **Grid**: 1 columna móvil → 2 columnas md+
- **Tarjetas**: Padding adaptativo 6-10
- **Títulos**: 2xl → 4xl
- **Tecnologías**: Wrap correcto, tamaños xs-sm
- **Botones**: Stack en móvil muy pequeño
- **Números**: 6xl → 8xl

### ✅ Experience Section
- **Timeline**: Oculta en móvil, visible en md+
- **Tarjetas**: Margen adaptativo
- **Texto**: Whitespace-pre-line para saltos de línea
- **Período**: Badge adaptativo
- **Gaps**: 8 → 16 responsive

### ✅ Contact Section
- **Grid**: 1 columna → 2 columnas sm+
- **Email**: Break-all para evitar overflow
- **Botones sociales**: Stack en móvil, row en xs+
- **Iconos**: 14px → 16px
- **Padding**: 6 → 12 responsive

### ✅ Footer
- **Logo**: 40px → 56px
- **Layout**: Stack en móvil, row en md+
- **Texto**: 10px → 12px
- **Gaps**: Adaptativos

### ✅ Navigation
- **Logo**: 48px → 56px
- **Menu móvil**: Full responsive
- **Links**: Padding y espaciado adaptativo
- **Badges**: Números de sección visibles

### ✅ Image Gallery
- **Modal**: Full responsive
- **Thumbnails**: 64px → 96px
- **Navegación**: Botones adaptativos 40px → 56px
- **Swipe**: Gestos táctiles habilitados
- **Imágenes**: Max-width/height dinámicos
- **Header**: Truncate en título

## Características Móviles

### Touch Interactions
- ✅ **active:scale-95** - Feedback visual al tocar
- ✅ **Swipe gestos** - En galería de imágenes
- ✅ **Botones 44px+** - Tamaño mínimo accesible
- ✅ **Tap targets** - Espaciado adecuado

### Performance
- ✅ **Lazy loading** - Imágenes optimizadas
- ✅ **Backdrop blur** - Efectos optimizados
- ✅ **Transform hardware** - Animaciones GPU
- ✅ **Passive events** - Touch events

### Prevención de Problemas
- ✅ **overflow-hidden** - En secciones con decoraciones
- ✅ **break-words** - Previene overflow de texto
- ✅ **break-all** - Para emails/URLs largos
- ✅ **whitespace-nowrap** - Donde es necesario
- ✅ **min-w-0** - En flex containers
- ✅ **max-w-full** - En imágenes

## Testing Recomendado

### Dispositivos a Probar
1. **iPhone SE** (375px) - Más pequeño común
2. **iPhone 12/13** (390px) - Estándar iOS
3. **iPhone Pro Max** (428px) - Grande iOS
4. **Android pequeño** (360px) - Mínimo Android
5. **iPad** (768px) - Tablet
6. **iPad Pro** (1024px) - Tablet grande
7. **Desktop** (1280px+) - Estándar desktop

### Checklist por Dispositivo
- [ ] No hay scroll horizontal
- [ ] Texto legible sin zoom
- [ ] Botones tocables fácilmente
- [ ] Imágenes cargan correctamente
- [ ] Animaciones fluidas
- [ ] Menú móvil funciona
- [ ] Galería de imágenes funciona
- [ ] Formularios usables

## Herramientas de Testing

### Chrome DevTools
```
F12 → Device Toolbar → Responsive
```

### Firefox
```
F12 → Responsive Design Mode
```

### Safari (iOS)
```
Develop → Enter Responsive Design Mode
```

### Testing Real
- **BrowserStack** - Testing en dispositivos reales
- **LambdaTest** - Cross-browser testing
- **Physical devices** - Siempre el mejor test

## Comandos Útiles

```bash
# Dev server
bun run dev

# Build para producción
bun run build

# Preview build
bun run preview
```

## Breakpoints en Código

```astro
<!-- Extra small -->
<div class="text-sm xs:text-base">

<!-- Small -->
<div class="px-4 sm:px-6">

<!-- Medium -->
<div class="grid-cols-1 md:grid-cols-2">

<!-- Large -->
<div class="order-2 lg:order-1">

<!-- Extra large -->
<div class="text-6xl xl:text-7xl">
```

## Notas Importantes

1. **Mobile First**: Siempre diseña para móvil primero
2. **Touch Targets**: Mínimo 44x44px para elementos interactivos
3. **Font Sizes**: Mínimo 14px para texto de cuerpo
4. **Contrast**: Asegura buen contraste en todos los tamaños
5. **Performance**: Optimiza imágenes y animaciones para móvil

## Problemas Comunes y Soluciones

### Overflow Horizontal
```css
overflow-x-hidden /* En section */
max-w-full /* En contenedores */
```

### Texto muy grande
```css
break-words /* Para evitar overflow */
text-4xl sm:text-5xl md:text-6xl /* Escalado */
```

### Botones muy pequeños
```css
px-6 py-3 /* Mínimo para touch */
w-11 h-11 sm:w-12 sm:h-12 /* Para iconos */
```

### Imágenes que se salen
```css
max-w-full h-auto /* Siempre */
object-contain /* Para mantener ratio */
```

