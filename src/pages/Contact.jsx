export default function Contact() {
  return (
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">✉️ Contáctanos</h2>
      <p className="mb-8 text-lg text-center text-gray-700 dark:text-gray-300">
        ¿Tienes dudas, sugerencias o necesitas ayuda? Estamos aquí para escucharte.
      </p>

      <div className="space-y-4 text-gray-600 dark:text-gray-400">
        <p>
          <span className="font-semibold text-gray-800 dark:text-gray-200">📍 Dirección:</span> Santo Domingo, República Dominicana
        </p>
        <p>
          <span className="font-semibold text-gray-800 dark:text-gray-200">📧 Correo electrónico:</span> 
          <a href="mailto:contacto@conectapost.com" className="text-primary-600 hover:underline dark:text-primary-500 ml-1">
            contacto@conectapost.com
          </a>
        </p>
        <p>
          <span className="font-semibold text-gray-800 dark:text-gray-200">🌐 Sitio web:</span> 
          <a href="https://www.conectapost.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline dark:text-primary-500 ml-1">
            www.conectapost.com
          </a>
        </p>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📱 Redes sociales:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>
              Instagram: 
              <a href="#" className="text-primary-600 hover:underline dark:text-primary-500 ml-1"> 
                @conectapostapp
              </a> 
            </li>
            <li>
              Twitter (X): 
              <a href="#" className="text-primary-600 hover:underline dark:text-primary-500 ml-1"> 
                @conectapost
              </a> 
            </li>
            <li>
              Facebook: 
              <a href="#" className="text-primary-600 hover:underline dark:text-primary-500 ml-1"> 
                Conecta Post Oficial
              </a> 
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-gray-700 dark:text-gray-300">
        Nuestro equipo de soporte responderá a la brevedad. ¡Gracias por ser parte de esta comunidad interactiva!
      </p>
    </div>
  );
} 