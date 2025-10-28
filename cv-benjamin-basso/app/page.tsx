"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-roboto-slab)] mb-2">
                Benjamin Basso
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Desarrollador Full Stack & Analista de Sistemas
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-50">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <a href="mailto:benjaminbaso7b@gmail.com" className="hover:text-white transition-colors">
                benjaminbaso7b@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">LinkedIn:</span>
              <a 
                href="https://www.linkedin.com/in/bassobenjamin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                /bassobenjamin
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">GitHub:</span>
              <a 
                href="https://github.com/benjabasso" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                /benjabasso
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-8 py-10">
          {/* Professional Profile */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4 font-[var(--font-roboto-slab)]">
              Perfil Profesional
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Desarrollador y Analista de Sistemas apasionado por la tecnología y el aprendizaje continuo. 
              Con sólida formación académica y experiencia práctica en desarrollo Full Stack, me especializo 
              en crear soluciones eficientes utilizando tecnologías modernas. Mi experiencia en el ámbito 
              empresarial me ha permitido comprender los procesos de negocio y desarrollar habilidades para 
              traducir necesidades organizacionales en soluciones tecnológicas efectivas. Busco constantemente 
              crecer profesionalmente y perfeccionar mis conocimientos en nuevas tecnologías.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4 font-[var(--font-roboto-slab)]">
              Experiencia Laboral
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Área Administrativa
                    </h3>
                    <p className="text-blue-600 font-medium">Frigorífico San Agustín SRL</p>
                  </div>
                  <span className="text-gray-600 text-sm mt-1 sm:mt-0">Actualidad</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Gestión y optimización de procesos administrativos</li>
                  <li>Análisis de procesos de negocio organizacionales</li>
                  <li>Desarrollo de habilidades en el ámbito empresarial</li>
                  <li>Comprensión integral de operaciones comerciales</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4 font-[var(--font-roboto-slab)]">
              Educación
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Tecnicatura en Análisis de Sistemas
                    </h3>
                    <p className="text-blue-600 font-medium">Instituto Nuestra Señora de las Nieves (INSLN)</p>
                  </div>
                  <span className="text-gray-600 text-sm mt-1 sm:mt-0">En curso</span>
                </div>
                <p className="text-gray-700">
                  Formación técnica especializada en análisis y desarrollo de sistemas informáticos.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Ingeniería en Sistemas de Información
                    </h3>
                    <p className="text-blue-600 font-medium">Universidad Tecnológica Nacional (UTN)</p>
                  </div>
                  <span className="text-gray-600 text-sm mt-1 sm:mt-0">2023 - 2024</span>
                </div>
                <p className="text-gray-700">
                  Primer año completado. Cambio de institución por motivos de horarios y cercanía.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4 font-[var(--font-roboto-slab)]">
              Habilidades Técnicas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Angular'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'C#', '.NET', 'C++'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-green-50 text-green-700 rounded-md text-sm font-medium border border-green-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Base de Datos</h3>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-md text-sm font-medium border border-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'Postman'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-md text-sm font-medium border border-orange-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Methodologies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4 font-[var(--font-roboto-slab)]">
              Metodologías y Gestión de Proyectos
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Scrum', 'Kanban', 'Trello', 'Miro'].map((method) => (
                <span 
                  key={method}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-300"
                >
                  {method}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4 font-[var(--font-roboto-slab)]">
              Idiomas
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-medium">Español</span>
                <span className="text-gray-600">Nativo</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-medium">Inglés</span>
                <span className="text-gray-600">En curso - Preparación TOEFL</span>
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sobre mí</h3>
            <p className="text-gray-700 leading-relaxed">
              Me fascina crecer profesionalmente y siempre estoy en búsqueda de nuevos desafíos que me 
              permitan aprender y perfeccionar mis conocimientos. Tengo especial interés en la integración 
              de Inteligencia Artificial con sistemas empresariales y en cómo la tecnología puede optimizar 
              procesos y brindar soluciones innovadoras.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 px-8 py-6 text-center text-gray-600 text-sm border-t border-gray-200">
          <p>© 2025 Benjamin Basso - Todos los derechos reservados</p>
          <p className="mt-1">
            <a 
              href="https://sites.google.com/view/benjamin-basso/inicio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Ver Certificados
            </a>
          </p>
        </footer>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
          header {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
