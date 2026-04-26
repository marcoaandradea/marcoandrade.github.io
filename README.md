# Data Analyst Portfolio

Portfolio personal para GitHub Pages.

## Estructura de archivos

```
portfolio/
├── index.html          ← página principal
├── assets/
│   ├── css/style.css   ← todos los estilos
│   ├── js/main.js      ← interactividad
│   └── cv.pdf          ← tu CV (agregar aquí)
└── README.md
```

## Cómo personalizar

### 1. Datos personales
Abrí `index.html` y buscá estos textos para reemplazarlos:

- `Your Name` → tu nombre completo
- `YN` → tus iniciales (aparece en el nav)
- `your@email.com` → tu email
- `yourprofile` → tu usuario de LinkedIn
- `yourusername` → tu usuario de GitHub

### 2. Agregar tu CV
Copiá tu CV como PDF en `assets/cv.pdf`.

### 3. Agregar dashboards (Proyecto 01)

**Power BI:**
1. Publicá tu reporte en Power BI Service
2. Hacé clic en File → Embed report → Website or portal
3. Copiá el src del iframe
4. En `index.html`, buscá el comentario `REPLACE src with your Power BI embed URL`
5. Reemplazá el placeholder con el iframe real

**Tableau:**
1. Publicá en Tableau Public (gratuito)
2. En el dashboard → Share → Copy embed code
3. Pegá el código donde dice `REPLACE with Tableau Public embed code`

**Looker Studio:**
1. En tu reporte → File → Embed report
2. Copiá el iframe con el src
3. Pegalo donde dice `REPLACE src with your Looker Studio embed URL`

### 4. Agregar un nuevo proyecto
Copiá el bloque `<article class="project-card project-featured">` en `index.html`
y actualizá el número, título, descripción, herramientas e insights.

---

## Cómo publicar en GitHub Pages

1. Creá un repositorio en GitHub llamado `tuUsuario.github.io`
2. Subí todos estos archivos al repositorio
3. Andá a Settings → Pages → Source: Deploy from branch → main → / (root)
4. En unos minutos tu sitio estará en `https://tuUsuario.github.io`

### Dominio personalizado (opcional)
1. Comprá tu dominio en Porkbun o Namecheap
2. En GitHub Pages → Custom domain → poné tu dominio
3. En tu proveedor de dominio, creá estos registros DNS:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  tuUsuario.github.io
   ```
4. Esperá 10-30 minutos y listo
