export default function PrivacyPolicy() {
  return (
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">🔐 Política de Privacidad</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 text-center">
        Última actualización: 20 de abril de 2025
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        En Conecta Post, valoramos tu privacidad y estamos comprometidos con proteger los datos personales que compartes con nosotros. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos tu información.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">1. Información que recopilamos</h3>
      <ul className="list-disc list-inside mb-3 text-gray-500 dark:text-gray-400 space-y-1 pl-4">
        <li>Datos de registro: nombre, correo electrónico, institución, etc.</li>
        <li>Información de uso: interacciones dentro de la app, contenido publicado, hora y fecha de acceso.</li>
        <li>Cookies y tecnologías similares para mejorar la experiencia del usuario.</li>
      </ul>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">2. Uso de la información</h3>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Utilizamos la información para:</p>
      <ul className="list-disc list-inside mb-3 text-gray-500 dark:text-gray-400 space-y-1 pl-4">
        <li>Mejorar nuestros servicios y personalizar tu experiencia.</li>
        <li>Enviar notificaciones importantes relacionadas con tu cuenta.</li>
        <li>Garantizar la seguridad de la plataforma.</li>
      </ul>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">3. Compartir datos</h3>
      <p className="mb-2 text-gray-500 dark:text-gray-400">No vendemos ni compartimos tu información con terceros, salvo en los siguientes casos:</p>
      <ul className="list-disc list-inside mb-3 text-gray-500 dark:text-gray-400 space-y-1 pl-4">
        <li>Requerimiento legal o judicial.</li>
        <li>Proveedores de servicios necesarios para el funcionamiento de la app (con acuerdos de confidencialidad).</li>
      </ul>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">4. Seguridad</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Implementamos medidas técnicas y organizativas para proteger tus datos. Sin embargo, ningún sistema es completamente invulnerable, por lo que también recomendamos el uso responsable de la plataforma.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">5. Tus derechos</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Puedes acceder, modificar o eliminar tus datos personales enviando una solicitud al correo: <a href="mailto:privacidad@conectapost.com" className="text-primary-600 hover:underline dark:text-primary-500">privacidad@conectapost.com</a>.
      </p>
    </div>
  );
} 