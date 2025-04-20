import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Importar AuthProvider
import { AuthProvider } from './context/AuthContext.jsx'

// Layout principal
import App from './App.jsx'

// Páginas
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import CreatePost from './pages/CreatePost.jsx'
import Terms from './pages/Terms.jsx'
import About from './pages/About.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Aquí puedes añadir una página de error general si quieres
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Ruta raíz (/)
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/create-post',
        element: <CreatePost />,
        // Aquí podríamos añadir lógica para proteger esta ruta más adelante
      },
      {
        path: '/terms',
        element: <Terms />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolver con AuthProvider */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
