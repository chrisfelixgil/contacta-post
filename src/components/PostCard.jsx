import React from 'react';

// Función auxiliar para formatear el Timestamp de Firestore
function formatFirestoreTimestamp(timestamp) {
  if (!timestamp?.toDate) {
    return 'Fecha inválida';
  }
  try {
    // Opciones de formato (puedes ajustarlas)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
    return timestamp.toDate().toLocaleDateString(undefined, options); // Usa el locale del navegador
  } catch (error) {
    console.error("Error formateando fecha:", error);
    return 'Fecha inválida';
  }
}

export default function PostCard({ post }) {
  // Asegurarse de que post y sus propiedades existen
  if (!post) return null;
  
  const { titulo, texto, imageUrl, nombreUsuario, fecha } = post;
  const formattedDate = formatFirestoreTimestamp(fecha);

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 w-full overflow-hidden">
      {/* Usamos un div en lugar de <a> si no va a ser un enlace */} 
      {imageUrl && (
         <img 
          className="object-cover w-full h-48 md:h-auto md:w-48 flex-shrink-0" // Ajuste de altura y flex-shrink
          src={imageUrl} 
          alt={`Imagen para ${titulo || 'post'}`} 
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal flex-grow"> {/* Añadir flex-grow */} 
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-words">
          {titulo || 'Sin título'}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 break-words">
          {texto || 'Sin texto'}
        </p>
        <div className="mt-auto pt-2 text-xs text-gray-500 dark:text-gray-400">
           {/* Mostrar nombre y fecha */} 
           <p>Publicado por: {nombreUsuario || 'Anónimo'}</p>
           <p>Fecha: {formattedDate}</p>
        </div>
      </div>
    </div>
  );
} 