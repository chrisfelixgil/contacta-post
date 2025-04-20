import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-800 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="hover:underline">
            ConectaPosts™
          </Link>
          . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            {/* Estos enlaces son placeholders, ajústalos según necesidad */}
            <Link to="/about" className="hover:underline me-4 md:me-6">
              Acerca de
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">
              Política de Privacidad
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
} 