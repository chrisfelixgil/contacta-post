import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Solo para isMobileMenuOpen
import logo from '../img/conecta-post-logo.png';
import { useAuth } from '../context/AuthContext'; // Importar useAuth

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth(); // Obtener estado y función del contexto
  const navigate = useNavigate(); 
  const isAuthenticated = !!currentUser; 

  // Ya no necesitamos useEffect para leer sessionStorage

  const getNavLinkClass = ({ isActive }) =>
    `block py-2 px-3 md:p-0 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive
      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
      : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:border-gray-700'
    }`;

  function handleLogout() {
    logout(); // <--- Usar función logout del contexto
    setIsMobileMenuOpen(false);
    navigate('/'); 
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Izquierda: Logo + Enlaces principales */}
        <div className="flex items-center space-x-8"> {/* Agrupador izquierda */} 
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="ConectaPosts Logo" /> {/* Usar logo */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Conecta Post
            </span>
          </Link>
          {/* Enlaces que siempre son visibles */}
          <div className="hidden md:flex md:order-1 md:space-x-8">
            <ul className="flex items-center space-x-8 rtl:space-x-reverse font-medium">
              <li>
                <NavLink to="/" className={getNavLinkClass} end>
                  Inicio
                </NavLink>
              </li>
              {isAuthenticated && (
                <li>
                  <NavLink to="/create-post" className={getNavLinkClass}>
                    Crear Post
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Derecha: Botones Auth + Menú Móvil */}
        <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
           {/* Mostrar botones Login/Register o info de usuario/logout */}
           {!isAuthenticated ? (
             <>
               <Link
                 to="/login"
                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                 Login
               </Link>
               <Link
                 to="/register"
                 className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
               >
                 Register
               </Link>
             </>
           ) : (
             <button 
                onClick={handleLogout} // Usar función de logout
                className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
             >
                Logout
             </button>
           )}

          {/* Botón Menú Móvil (solo visible en pantallas pequeñas) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-menu-mobile"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Menú Móvil Desplegable (solo visible en pantallas pequeñas cuando está abierto) */}
        <div
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:hidden md:order-3`}
          id="navbar-menu-mobile" // ID diferente para el menú móvil
        >
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
             <li>
              <NavLink to="/" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)} end>
                Inicio
              </NavLink>
            </li>
             {isAuthenticated ? (
              <>
                <li>
                  <NavLink to="/create-post" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                    Crear Post
                  </NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} className="block w-full text-left py-2 px-3 text-red-600 dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className={getNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

      </div>
    </nav>
  );
} 