# Smith Business Solutions · Plataforma Corporativa

Plataforma empresarial de alto rendimiento con ingeniería frontend moderna (React 19 + TypeScript + Vite + Tailwind CSS), renderizado 3D de avatar humanoide procedural (Three.js), auditor interactivo de e-commerce, calculadora de proyectos y dashboards de telemetría financiera.

## 🚀 Despliegues Compatibles

Esta aplicación está optimizada con rutas relativas (`base: './'`) y división de paquetes en código (*vendor code splitting*), permitiendo su funcionamiento instantáneo tanto en **GitHub Pages** como en **Vercel**.

---

### 1. Despliegue en GitHub Pages (`empresaalhadiqainvest-ux.github.io/smith-bussines-solutios/`)

El repositorio incluye la acción automatizada `.github/workflows/deploy.yml`.

Para activarla:
1. En tu repositorio de GitHub: Ve a **Settings** > **Pages**.
2. En la sección **Build and deployment** > **Source**, selecciona **GitHub Actions**.
3. Al hacer un `git push` a `main`, la acción construirá y publicará la plataforma automáticamente en:
   👉 **`https://empresaalhadiqainvest-ux.github.io/smith-bussines-solutios/`**

---

### 2. Despliegue en Vercel (`vercel.app`)

El proyecto incluye el archivo de configuración `vercel.json` con soporte SPA preconfigurado.

1. Ingresa a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **Add New** > **Project**.
3. Selecciona el repositorio `smith-bussines-solutios`.
4. El framework se detectará automáticamente como **Vite** con comando de compilación `npm run build` y directorio `dist`.
5. Haz clic en **Deploy**. ¡Listo en menos de 45 segundos!

---

### 3. Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (archivos optimizados en /dist)
npm run build
```

---

## 🛠️ Características Principales
- **Holograma 3D Humanoide**: Anatomía femenina modelada proceduralmente, ciclo de respiración y vista de exploración interactiva con zoom.
- **Auditor E-Commerce en Vivo**: Calculador de fugas de ventas y proyecciones de facturación.
- **Calculadora de Presupuestos**: Estimador de costos y plazos con desglose por moneda.
- **Canales Directos**: Conexión directa a WhatsApp corporativo (`+58 422 027 3766`).
