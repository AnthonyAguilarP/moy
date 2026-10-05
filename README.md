# 🎉 Aniversario Marcela Dávila - 05 Octubre 2026

Una página web creativa y hermosa para celebrar el primer aniversario, construida con **Astro + React + GSAP + Tailwind CSS** con diseño **neumorfismo**.

## ✨ Características

- **Diseño Neumorfismo** - Tarjetas suaves con sombras internas/externas
- **Línea de tiempo mensual** - Octubre 2025 a Octubre 2026
- **Animaciones GSAP** - Scroll-triggered, parallax, float, pulse
- **Mobile-first** - Optimizado para Samsung A15 (360x800)
- **Componentes aislados para imágenes** - Fácil agregar fotos
- **Partículas flotantes** - Fondo animado interactivo
- **Accesible** - Respeta `prefers-reduced-motion`, ARIA labels

## 🚀 Instalación y desarrollo

```bash
cd aniversario-marcela
npm install
npm run dev
```

## 🏗️ Build para producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── AnniversaryPage.tsx    # Página principal
│   ├── Hero.tsx               # Hero section con animaciones
│   ├── TimelineMonth.tsx      # Mes de la timeline
│   ├── MemoryCard.tsx         # Tarjeta de recuerdo individual
│   ├── NeumorphicCard.tsx     # Componente base neumórfico
│   ├── ParticleBackground.tsx # Partículas flotantes canvas
│   └── Footer.tsx             # Footer con mensaje final
├── layouts/
│   └── MainLayout.astro       # Layout principal
├── pages/
│   └── index.astro            # Página de entrada
├── styles/
│   └── global.css             # Estilos globales + Tailwind
├── utils/
│   └── timeline.ts            # Datos de la línea de tiempo
└── assets/images/             # Imágenes locales
```

## 🖼️ Agregar imágenes

### Opción 1: En `src/utils/timeline.ts`

Edita el campo `image` en cada memory:

```typescript
{
  id: 'oct25-3',
  date: '31/10/2025',
  title: 'Halloween juntos',
  description: 'Disfraces improvisados...',
  image: '/images/halloween-2025.jpg',  // ← Ruta a tu imagen
  type: 'photo',
  position: 'right',
}
```

### Opción 2: Imágenes locales en `public/images/`

1. Pon tus fotos en `public/images/`
2. Referéncialas como `/images/tu-foto.jpg`

### Opción 3: URLs externas

```typescript
image: 'https://tus-fotos.com/foto.jpg'
```

### Opción 4: Componente ImageUploader (para subir en vivo)

```tsx
// En MemoryCard.tsx ya está preparado para click y expandir
// Solo necesitas implementar la subida real si la necesitas
```

## 🎨 Personalizar colores

Edita `tailwind.config.js` en la sección `neumorph`:

```javascript
neumorph: {
  bg: '#e0e5ec',        // Fondo base
  light: '#ffffff',     // Luz
  dark: '#a3b1c6',      // Sombra oscura
  accent: '#ff6b9d',    // Rosa principal
  gold: '#f7c948',      // Dorado
  sage: '#88b5a3',      // Verde salvia
  lavender: '#b8a9e8',  // Lavanda
}
```

## 📱 Optimizado para Samsung A15

- Viewport: 360x800px
- Touch targets mínimos 44x44px
- Fuentes legibles sin zoom
- Scroll suave nativo
- Partículas optimizadas (máx 50 en móvil)

## ♿ Accesibilidad

- `prefers-reduced-motion` desactiva animaciones
- Contraste WCAG AA en texto
- Navegación por teclado completa
- ARIA labels en elementos interactivos
- Semántica HTML5 correcta

## 🛠️ Tecnologías

- **Astro 4** - Framework principal
- **React 18** - Componentes interactivos
- **GSAP 3** - Animaciones profesionales
- **Tailwind CSS** - Utilidades + diseño custom
- **TypeScript** - Tipado estricto

## 💝 Créditos

Hecho con amor para **Marcela Dávila** 💕
05 de Octubre 2025 - 05 de Octubre 2026

---

*"Un año contigo vale más que una vida sin ti"*