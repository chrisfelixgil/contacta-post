import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import logo from '../img/conecta-post-logo.png';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLogin(event) {
    event.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Por favor, ingresa usuario y contraseña.');
      return;
    }

    setLoading(true);

    try {
      // 1. Buscar al usuario por username en Firestore
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('Usuario no encontrado.');
        setLoading(false);
        return;
      }

      // El username es único, tomamos el primer resultado
      const userData = querySnapshot.docs[0].data();
      const userId = querySnapshot.docs[0].id; // Obtener ID del documento

      // 2. Comparar la contraseña 
      if (password === userData.password) {
        // 3. LOGIN EXITOSO
        console.log('Login exitoso para:', userData.username);
        
        const userToLogin = { id: userId, ...userData };
        login(userToLogin);

        // Redirigir a la página principal
        navigate('/');
      } else {
        setError('Contraseña incorrecta.');
      }

    } catch (err) {
      console.error("Error de inicio de sesión:", err);
      setError('Ocurrió un error durante el inicio de sesión.');
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
              Inicia sesión en tu cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin} noValidate>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                <input 
                  type="text"
                  name="username" 
                  id="username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Tu usuario" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required 
                />
              </div>
              {/* Mensaje de error */}
              {error && (
                <p className="text-sm font-medium text-red-500 dark:text-red-400">{error}</p>
              )}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿No tienes una cuenta?{" "}
                <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Regístrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 