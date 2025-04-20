import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Crear el Contexto
const AuthContext = createContext(null);

// Hook personalizado para usar el contexto fácilmente
export function useAuth() {
  return useContext(AuthContext);
}

// 2. Crear el Proveedor del Contexto
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true); // Estado para saber si ya se comprobó sessionStorage

  // Efecto para comprobar sessionStorage al iniciar la app
  useEffect(() => {
    try {
      const storedUser = sessionStorage.getItem('loggedInUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user data from sessionStorage:", error);
      sessionStorage.removeItem('loggedInUser'); // Limpiar si hay error
    } finally {
      setLoadingAuth(false); // Indicar que la carga inicial de auth terminó
    }
  }, []);

  // Función para iniciar sesión
  function login(userData) {
    try {
      sessionStorage.setItem('loggedInUser', JSON.stringify(userData));
      setCurrentUser(userData);
    } catch (error) {
      console.error("Error saving user data to sessionStorage:", error);
    }
  }

  // Función para cerrar sesión
  function logout() {
    sessionStorage.removeItem('loggedInUser');
    setCurrentUser(null);
  }

  // Valor que proveerá el contexto
  const value = {
    currentUser,
    login,
    logout,
    
  };

  // para evitar parpadeos o estados inconsistentes.
  return (
    <AuthContext.Provider value={value}>
      {!loadingAuth && children}
    </AuthContext.Provider>
  );
} 