# 📄 CV de Benjamin Basso - Instrucciones

## ✅ ¡Tu CV está listo!

Se ha creado exitosamente tu CV profesional en la carpeta `cv-benjamin-basso/`

## 🎨 Características del CV

### Diseño Profesional
- ✨ Header con gradiente azul profesional
- 📱 Completamente responsive (se adapta a móvil, tablet y desktop)
- 🖨️ Optimizado para impresión y exportación a PDF
- 🎯 Diseño limpio y moderno sin iconos, enfocado en contenido

### Contenido Incluido
- **Información Personal**: Nombre, título, contacto (email, LinkedIn, GitHub)
- **Perfil Profesional**: Descripción destacando tu pasión por la tecnología
- **Experiencia Laboral**: Frigorífico San Agustín SRL
- **Educación**: INSLN (en curso) y UTN (1er año completado)
- **Habilidades Técnicas** organizadas por categorías:
  - Frontend: HTML, CSS, JavaScript, TypeScript, React.js, Angular
  - Backend: Node.js, C#, .NET, C++
  - Base de Datos: MongoDB
  - Herramientas: Git, GitHub, Postman
- **Metodologías**: Scrum, Kanban, Trello, Miro
- **Idiomas**: Español (Nativo), Inglés (preparación TOEFL)
- **Sobre ti**: Sección destacando tu interés en IA y crecimiento profesional

## 🚀 Cómo ver tu CV

### Opción 1: Modo Desarrollo (Recomendado para ver cambios en tiempo real)
```bash
cd cv-benjamin-basso
npm run dev
```
Luego abre tu navegador en: http://localhost:3000

### Opción 2: Modo Producción (Versión optimizada)
```bash
cd cv-benjamin-basso
npm run build
npm start
```
Luego abre tu navegador en: http://localhost:3000

## 🖨️ Exportar a PDF

1. Abre el CV en tu navegador (http://localhost:3000)
2. Presiona `Ctrl+P` (Windows/Linux) o `Cmd+P` (Mac)
3. En la ventana de impresión:
   - Destino: "Guardar como PDF"
   - Diseño: Vertical
   - Márgenes: Predeterminados o Mínimos
4. Haz clic en "Guardar"

El CV está optimizado para verse perfecto en PDF con todos los colores y estilos preservados.

## 🌐 Publicar tu CV en Internet

### Opción 1: Vercel (Gratis y Recomendado)
```bash
# Instalar Vercel CLI
npm install -g vercel

# Desde la carpeta cv-benjamin-basso
cd cv-benjamin-basso
vercel
```
Sigue las instrucciones y obtendrás una URL pública como: `https://tu-cv.vercel.app`

### Opción 2: Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `cv-benjamin-basso` a Netlify
3. Obtendrás una URL pública instantáneamente

### Opción 3: GitHub Pages
```bash
# Agregar script de exportación al package.json
npm run build
# Subir la carpeta 'out' a GitHub Pages
```

## 📝 Personalizar tu CV

Si necesitas hacer cambios:

1. Abre el archivo: `cv-benjamin-basso/app/page.tsx`
2. Busca la sección que quieres modificar
3. Edita el texto o información
4. Guarda el archivo
5. Si tienes `npm run dev` corriendo, los cambios se verán automáticamente

### Ejemplos de cambios comunes:

**Cambiar email:**
```typescript
// Busca en page.tsx:
<a href="mailto:benjaminbaso7b@gmail.com">
```

**Agregar más habilidades:**
```typescript
// Busca el array de skills y agrega más:
{['HTML', 'CSS', 'JavaScript', 'TU_NUEVA_SKILL'].map((skill) => (
```

**Actualizar experiencia:**
```typescript
// Busca la sección "Experiencia Laboral" y modifica el contenido
```

## 🎨 Cambiar Colores

Los colores principales están en clases de Tailwind:
- **Azul principal**: `bg-blue-600`, `text-blue-600`
- **Azul oscuro**: `bg-blue-800`
- Para cambiar, reemplaza `blue` por otro color: `green`, `purple`, `indigo`, etc.

## 📧 Compartir tu CV

Una vez publicado, puedes compartir tu CV de varias formas:

1. **URL directa**: Comparte el link de Vercel/Netlify
2. **PDF**: Exporta a PDF y envía por email
3. **LinkedIn**: Agrega el link en tu perfil
4. **GitHub**: Agrega el link en tu README

## 🆘 Solución de Problemas

### Error al instalar dependencias
```bash
cd cv-benjamin-basso
rm -rf node_modules package-lock.json
npm install
```

### El CV no se ve bien en móvil
El diseño es responsive por defecto. Asegúrate de estar usando un navegador moderno.

### Los colores no se ven en el PDF
Asegúrate de seleccionar "Gráficos de fondo" en las opciones de impresión.

## 📚 Recursos Adicionales

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## 🎉 ¡Listo para Aplicar!

Tu CV está diseñado profesionalmente y listo para enviar a empresas. Incluye toda tu información técnica y experiencia de manera clara y atractiva.

**¡Mucha suerte en tu búsqueda laboral! 🚀**

---

**Desarrollado con Next.js + TypeScript + Tailwind CSS**
