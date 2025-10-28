const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  console.log('🚀 Iniciando generación de PDF...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Leer el HTML del componente y crear una página estática
  const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV - Benjamin Basso</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: white;
    }
    h1, h2 {
      font-family: 'Roboto Slab', serif;
    }
    @media print {
      body {
        background: white;
      }
      .no-print {
        display: none;
      }
    }
  </style>
</head>
<body class="bg-white">
  <div class="max-w-5xl mx-auto bg-white">
    <!-- Header Section -->
    <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-10">
      <div class="flex flex-col gap-4">
        <div>
          <h1 class="text-5xl font-bold mb-2">
            Benjamin Basso
          </h1>
          <p class="text-2xl text-blue-100 font-light">
            Desarrollador Full Stack & Analista de Sistemas
          </p>
        </div>
      </div>
      
      <!-- Contact Info -->
      <div class="mt-6 flex flex-wrap gap-4 text-sm text-blue-50">
        <div class="flex items-center gap-2">
          <span class="font-semibold">Email:</span>
          <span>benjaminbaso7b@gmail.com</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-semibold">LinkedIn:</span>
          <span>/bassobenjamin</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-semibold">GitHub:</span>
          <span>/benjabasso</span>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="px-8 py-10">
      <!-- Professional Profile -->
      <section class="mb-10">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">
          Perfil Profesional
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Desarrollador y Analista de Sistemas apasionado por la tecnología y el aprendizaje continuo. 
          Con sólida formación académica y experiencia práctica en desarrollo Full Stack, me especializo 
          en crear soluciones eficientes utilizando tecnologías modernas. Mi experiencia en el ámbito 
          empresarial me ha permitido comprender los procesos de negocio y desarrollar habilidades para 
          traducir necesidades organizacionales en soluciones tecnológicas efectivas. Busco constantemente 
          crecer profesionalmente y perfeccionar mis conocimientos en nuevas tecnologías.
        </p>
      </section>

      <!-- Experience -->
      <section class="mb-10">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">
          Experiencia Laboral
        </h2>
        <div class="space-y-6">
          <div>
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-xl font-semibold text-gray-800">
                  Área Administrativa
                </h3>
                <p class="text-blue-600 font-medium">Frigorífico San Agustín SRL</p>
              </div>
              <span class="text-gray-600 text-sm">Actualidad</span>
            </div>
            <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
              <li>Gestión y optimización de procesos administrativos</li>
              <li>Análisis de procesos de negocio organizacionales</li>
              <li>Desarrollo de habilidades en el ámbito empresarial</li>
              <li>Comprensión integral de operaciones comerciales</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="mb-10">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">
          Educación
        </h2>
        <div class="space-y-6">
          <div>
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-xl font-semibold text-gray-800">
                  Tecnicatura en Análisis de Sistemas
                </h3>
                <p class="text-blue-600 font-medium">Instituto Nuestra Señora de las Nieves (INSLN)</p>
              </div>
              <span class="text-gray-600 text-sm">En curso</span>
            </div>
            <p class="text-gray-700">
              Formación técnica especializada en análisis y desarrollo de sistemas informáticos.
            </p>
          </div>

          <div>
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-xl font-semibold text-gray-800">
                  Ingeniería en Sistemas de Información
                </h3>
                <p class="text-blue-600 font-medium">Universidad Tecnológica Nacional (UTN)</p>
              </div>
              <span class="text-gray-600 text-sm">2023 - 2024</span>
            </div>
            <p class="text-gray-700">
              Primer año completado. Cambio de institución por motivos de horarios y cercanía.
            </p>
          </div>
        </div>
      </section>

      <!-- Technical Skills -->
      <section class="mb-10">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">
          Habilidades Técnicas
        </h2>
        
        <div class="grid grid-cols-2 gap-6">
          <!-- Frontend -->
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200">HTML</span>
              <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200">CSS</span>
              <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200">JavaScript</span>
              <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200">TypeScript</span>
              <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200">React.js</span>
              <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200">Angular</span>
            </div>
          </div>

          <!-- Backend -->
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-md text-sm font-medium border border-green-200">Node.js</span>
              <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-md text-sm font-medium border border-green-200">C#</span>
              <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-md text-sm font-medium border border-green-200">.NET</span>
              <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-md text-sm font-medium border border-green-200">C++</span>
            </div>
          </div>

          <!-- Database -->
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Base de Datos</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-md text-sm font-medium border border-purple-200">MongoDB</span>
            </div>
          </div>

          <!-- Tools -->
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Herramientas</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-md text-sm font-medium border border-orange-200">Git</span>
              <span class="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-md text-sm font-medium border border-orange-200">GitHub</span>
              <span class="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-md text-sm font-medium border border-orange-200">Postman</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Methodologies -->
      <section class="mb-10">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">
          Metodologías y Gestión de Proyectos
        </h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-300">Scrum</span>
          <span class="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-300">Kanban</span>
          <span class="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-300">Trello</span>
          <span class="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-300">Miro</span>
        </div>
      </section>

      <!-- Languages -->
      <section class="mb-6">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">
          Idiomas
        </h2>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-gray-800 font-medium">Español</span>
            <span class="text-gray-600">Nativo</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-800 font-medium">Inglés</span>
            <span class="text-gray-600">En curso - Preparación TOEFL</span>
          </div>
        </div>
      </section>

      <!-- Additional Info -->
      <section class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Sobre mí</h3>
        <p class="text-gray-700 leading-relaxed">
          Me fascina crecer profesionalmente y siempre estoy en búsqueda de nuevos desafíos que me 
          permitan aprender y perfeccionar mis conocimientos. Tengo especial interés en la integración 
          de Inteligencia Artificial con sistemas empresariales y en cómo la tecnología puede optimizar 
          procesos y brindar soluciones innovadoras.
        </p>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-50 px-8 py-6 text-center text-gray-600 text-sm border-t border-gray-200">
      <p>© 2025 Benjamin Basso - Todos los derechos reservados</p>
      <p class="mt-1">
        <span class="text-blue-600">Ver Certificados: https://sites.google.com/view/benjamin-basso/inicio</span>
      </p>
    </footer>
  </div>
</body>
</html>
  `;
  
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  
  // Generar PDF
  const pdfPath = path.join(__dirname, 'CV-Benjamin-Basso.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    }
  });
  
  await browser.close();
  
  console.log('✅ PDF generado exitosamente en:', pdfPath);
  return pdfPath;
}

generatePDF().catch(console.error);
