import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Importar funciones de Firestore
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Importar solo db
import logo from '../img/conecta-post-logo.png';

export default function Register() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // No necesitamos getAuth

  async function handleRegister(event) {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (!username || !firstName || !lastName || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (!termsAccepted) {
      setError('Debes aceptar los Términos y Condiciones para registrarte.');
      return;
    }

    setLoading(true);

    try {
      // 1. Verificar si el usuario ya existe en Firestore
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError('Este nombre de usuario ya está registrado.');
        setLoading(false);
        return;
      }

      // 2. Si no existe, crear el nuevo usuario en Firestore
      // ADVERTENCIA: Guardando contraseña en texto plano (MUY INSEGURO)
      await addDoc(collection(db, "users"), {
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password, // <-- Contraseña en texto plano!
        createdAt: new Date(),
      });

      // 3. Mostrar alerta de éxito y luego redirigir
      alert('¡Usuario registrado correctamente!');
      navigate('/login');

    } catch (err) {
      // Manejo de errores generales de Firestore o de la verificación
      console.error("Error de registro directo en Firestore:", err);
      setError('Ocurrió un error durante el registro. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
          Conecta Post
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Comparte ideas, conecta emociones.
            </h1>
            <br />
            <h2 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
              Regístrate para crear una cuenta
            </h2>
            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister} noValidate>
              {/* Campo Usuario */}
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                <input 
                  type="text"
                  name="username" 
                  id="username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username" 
                  required 
                />
              </div>
              {/* Campo Nombre */}
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tu nombre"
                  required 
                />
              </div>
              {/* Campo Apellido */}
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                <input 
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tu apellido"
                  required 
                />
              </div>
              {/* Campo Contraseña */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required 
                />
              </div>
              {/* Campo Confirmar Contraseña */}
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar contraseña</label>
                <input 
                  type="password" 
                  name="confirm-password" 
                  id="confirm-password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required 
                />
              </div>
              {/* Checkbox Términos */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                    Acepto los{" "}
                    <Link 
                      to="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Términos y Condiciones
                    </Link>
                  </label>
                </div>
              </div>
              {/* Mensaje de Error */}
              {error && (
                <p className="text-sm font-medium text-red-500 dark:text-red-400">{error}</p>
              )}
              {/* Botón de Envío */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creando cuenta...' : 'Crear una cuenta'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Inicia sesión aquí
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 