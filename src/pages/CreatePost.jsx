import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebaseConfig';
import axios from 'axios';

// Leer credenciales de Cloudinary desde .env
const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const cloudinaryUploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Limpiar URL de preview
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // Maneja la selección de archivo
  function handleImageChange(event) {
    setError(''); 
    const file = event.target.files[0];
    if (file) {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    }
  }

  // Maneja el envío del formulario
  async function handleCreatePost(event) {
    event.preventDefault();
    setError('');

    if (!currentUser) {
      setError('Debes iniciar sesión para crear una publicación.');
      return;
    }
    if (!title || !text || !imageFile) {
      setError('Por favor, completa el título, el texto y sube una imagen.');
      return;
    }
    if (!cloudinaryCloudName || !cloudinaryUploadPreset) {
      setError('Error de configuración: Faltan datos de Cloudinary (Cloud Name o Upload Preset).');
      console.error("VITE_CLOUDINARY_CLOUD_NAME o VITE_CLOUDINARY_UPLOAD_PRESET no definidos en .env");
      return;
    }

    setLoading(true);

    try {
      // 1. Subir imagen a Cloudinary (Unsigned Upload)
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", cloudinaryUploadPreset);
      
      console.log(`Subiendo a Cloudinary (Cloud: ${cloudinaryCloudName}, Preset: ${cloudinaryUploadPreset})`);

      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`;
      
      const cloudinaryResponse = await axios.post(cloudinaryUrl, formData);

      if (!cloudinaryResponse.data || !cloudinaryResponse.data.secure_url) {
          throw new Error('Respuesta inesperada de Cloudinary al subir la imagen.');
      }

      const imageUrl = cloudinaryResponse.data.secure_url;
      console.log("Imagen subida a Cloudinary:", imageUrl);

      // 2. Crear objeto del post con la URL de Cloudinary
      const postData = {
        titulo: title,
        texto: text,
        imageUrl: imageUrl, // Guardar URL de Cloudinary
        usuarioId: currentUser.id,
        nombreUsuario: `${currentUser.firstName || ''} ${currentUser.lastName || ''}`.trim(), 
        fecha: Timestamp.fromDate(new Date()),
      };

      // 3. Añadir el documento a Firestore
      await addDoc(collection(db, "posts"), postData);

      alert('¡Publicación creada exitosamente!');
      navigate('/'); 

    } catch (err) {
      console.error("Error al crear la publicación:", err);
      if (axios.isAxiosError(err) && err.response) {
          console.error("Detalles del error de Cloudinary:", err.response.data);
          setError(`Error al subir imagen a Cloudinary: ${err.response.data?.error?.message || err.message}`);
      } else {
          setError('Ocurrió un error al crear la publicación. Inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Crear Nueva Publicación</h1>
      
      <form onSubmit={handleCreatePost} noValidate>
        {/* Campo Título */} 
        <div className="relative z-0 w-full mb-5 group">
            <input 
              type="text" 
              name="title" 
              id="title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
              required 
            />
            <label 
              htmlFor="title" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Título de la publicación
            </label>
        </div>

        {/* Campo Texto */} 
        <div className="relative z-0 w-full mb-5 group">
            <textarea 
              name="text" 
              id="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="4" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
              required 
            />
            <label 
              htmlFor="text" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Texto de la publicación
            </label>
        </div>

        {/* Dropzone para Imagen */} 
        <div className="flex items-center justify-center w-full mb-5">
            <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-64 border-2 ${error && !imageFile ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                {imagePreview ? (
                  <img src={imagePreview} alt="Previsualización" className="max-h-full max-w-full object-contain rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Haz clic para subir</span> o arrastra y suelta</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG o GIF</p>
                  </div>
                )}
                <input 
                  id="dropzone-file" 
                  type="file" 
                  className="hidden" 
                  onChange={handleImageChange} 
                  accept="image/svg+xml, image/png, image/jpeg, image/gif" 
                />
            </label>
        </div> 

        {/* Mensaje de Error */} 
        {error && (
          <p className="mb-4 text-sm font-medium text-red-500 dark:text-red-400 text-center">{error}</p>
        )}

        {/* Botón Publicar */} 
        <button 
          type="submit" 
          disabled={loading}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Publicando...' : 'Publicar'}
        </button>
      </form>
    </div>
  );
} 