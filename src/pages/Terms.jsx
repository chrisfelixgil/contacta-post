import { Link } from 'react-router-dom'; // Opcional: para un botón de volver

export default function Terms() {
  return (
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Términos y Condiciones de Uso</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 text-center">
        Última actualización: 20 de abril de 2025
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Bienvenido/a a Conecta Post. Al acceder y utilizar nuestro sitio web, usted acepta cumplir con los siguientes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, le recomendamos no utilizar nuestros servicios.
      </p>
      
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">1. Información General</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Conecta Post es una plataforma digital que permite a los usuarios publicar y visualizar contenidos en un muro interactivo. Está dirigida tanto a usuarios individuales como a instituciones educativas, organizaciones o empresas interesadas en fomentar la comunicación y participación.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">2. Aceptación del Usuario</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        El acceso y uso de este sitio web o aplicación implica la aceptación expresa y sin reservas de estos Términos y Condiciones. Estos podrán ser modificados en cualquier momento, y será responsabilidad del usuario revisar las actualizaciones periódicamente.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">3. Registro y Cuenta de Usuario</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Para acceder a ciertas funcionalidades, es posible que deba crear una cuenta. Usted se compromete a proporcionar información verdadera, completa y actualizada. Es responsable de mantener la confidencialidad de sus credenciales y de toda actividad realizada desde su cuenta.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">4. Uso Permitido</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Usted se compromete a utilizar Conecta Post únicamente para fines lícitos y de acuerdo con la normativa vigente. Queda estrictamente prohibido:
      </p>
      <ul className="list-disc list-inside mb-3 text-gray-500 dark:text-gray-400 space-y-1 pl-4">
        <li>Publicar contenido ofensivo, ilegal, difamatorio, amenazante o que infrinja derechos de terceros.</li>
        <li>Usar la plataforma con fines comerciales sin autorización expresa.</li>
        <li>Manipular, descompilar o realizar ingeniería inversa de la plataforma.</li>
      </ul>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">5. Contenido Publicado por el Usuario</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Todo contenido que usted publique es de su responsabilidad exclusiva. Conecta Post se reserva el derecho de revisar, editar o eliminar contenido que infrinja estos Términos o que se considere inapropiado.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">6. Propiedad Intelectual</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Todos los derechos de propiedad intelectual sobre el contenido, diseño, marcas, logotipos y funcionalidades de la plataforma pertenecen a Conecta Post o a sus respectivos titulares. Queda prohibida su reproducción o distribución sin autorización previa por escrito.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">7. Disponibilidad del Servicio</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Nos esforzamos por ofrecer un servicio estable, pero no garantizamos disponibilidad continua. El acceso puede verse interrumpido por razones técnicas, mantenimiento o causas de fuerza mayor.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">8. Responsabilidad</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Conecta Post no se hace responsable por daños directos o indirectos derivados del uso de la plataforma. El usuario asume total responsabilidad por el uso que haga del servicio y del contenido publicado.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">9. Protección de Datos</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        El tratamiento de los datos personales se realiza conforme a nuestra Política de Privacidad. Al usar nuestros servicios, usted consiente dicho tratamiento.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 className="text-xl font-semibold mb-3">10. Legislación Aplicable y Jurisdicción</h3>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Estos Términos se rigen por las leyes de la República Dominicana, y cualquier disputa será resuelta por los tribunales competentes de dicho país.
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <p className="text-gray-500 dark:text-gray-400">
        Si tienes preguntas o inquietudes sobre estos Términos y Condiciones, puedes escribirnos a: <a href="mailto:20121036@itla.edu.do" className="text-primary-600 hover:underline dark:text-primary-500">20121036@itla.edu.do</a>.
      </p>
    </div>
  );
} 