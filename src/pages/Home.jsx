import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import PostCard from '../components/PostCard'; // Importar el componente de tarjeta

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        setError('');
        setLoading(true);
        const postsCollection = collection(db, "posts");
        // Crear consulta ordenada por fecha descendente
        const q = query(postsCollection, orderBy("fecha", "desc")); 
        const querySnapshot = await getDocs(q);
        
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setPosts(postsData);
        console.log("Posts cargados:", postsData); // Para depuración

      } catch (err) {
        console.error("Error fetching posts: ", err);
        setError("No se pudieron cargar las publicaciones.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []); // El array vacío asegura que se ejecute solo al montar

  return (
    // Añadir padding si se quitó del layout principal
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Últimas Publicaciones</h1>

      {loading && <p className="text-center text-gray-500 dark:text-gray-400">Cargando publicaciones...</p>}
      
      {error && <p className="text-center text-red-500 dark:text-red-400">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6">
          {posts.length > 0 ? (
            posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">Aún no hay publicaciones.</p>
          )}
        </div>
      )}
    </div>
  );
} 