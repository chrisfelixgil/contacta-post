# 🚀 ConectaPosts

¡Hola! Soy **Christian Gil** 👋

📌 **Matrícula:** 2012-1036  
📚 **Materia:** Programación Web  
👨‍🏫 **Profesor:** Raydelto Hernández Perera  
🏫 **Institución:** ITLA  

## 📲 Descripción

Esta es una aplicación web moderna construida con React y Vite para conectar a través de publicaciones. Permite a los usuarios interactuar, crear y visualizar posts, utilizando Firebase para la autenticación y almacenamiento de datos en tiempo real.

La aplicación cuenta con una interfaz de usuario responsive y funcional, desarrollada con Tailwind CSS y Flowbite.

✨ Características:

- ✅ **Gestión de Posts:** Crear, visualizar e interactuar con publicaciones. (Asumido)
- ✅ **Autenticación de Usuarios:** Inicio de sesión y registro seguros mediante Firebase Authentication. (Inferido de la dependencia Firebase)
- ✅ **Actualizaciones en Tiempo Real:** (Potencialmente) Actualizaciones de posts en tiempo real usando Firebase Firestore.
- ✅ **Diseño Responsive:** Interfaz adaptable a distintos dispositivos construida con Tailwind CSS y Flowbite.
- ✅ **Enrutamiento del Lado del Cliente:** Navegación fluida implementada con React Router.

Es la quineta y última tarea de la materia de Programación Web impartida por el profesor **Raydelto Hernández**.

---

## 📸 Capturas de Pantalla

A continuación, se muestran capturas de pantalla de las evidencias al realizar esta asignación:

1. ![Captura 1](/public/img/img1.png)
2. ![Captura 2](/public/img/img2.png)
3. ![Captura 3](/public/img/img3.png)
4. ![Captura 4](/public/img/img4-1.png)
5. ![Captura 4](/public/img/img5.png)
6. ![Captura 4](/public/img/img6.png)
7. ![Captura 4](/public/img/img7.png)

---

## 🚀 Instrucciones de Uso

Sigue estos pasos para obtener una copia local y ponerla en funcionamiento.

### Pre-requisitos

*   Node.js (v18 o superior recomendado)
*   pnpm (o npm/yarn)

```bash
npm install -g pnpm # Si no tienes pnpm instalado
```

### Instalación

1.  🛠️ Clona este repositorio:

    ```bash
    git clone <your-repository-url> # Reemplaza con la URL de tu repositorio
    cd conectaposts
    ```

2.  Instala las dependencias:

    ```bash
    pnpm install
    ```

3.  Configura Firebase:
    *   Crea un proyecto en Firebase en [https://console.firebase.google.com/](https://console.firebase.google.com/).
    *   Obtén las credenciales de configuración de tu proyecto Firebase.
    *   Crea un archivo `.env.local` en la raíz del proyecto y añade tu configuración:
        ```env
        VITE_FIREBASE_API_KEY=TU_API_KEY
        VITE_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
        VITE_FIREBASE_PROJECT_ID=TU_PROJECT_ID
        VITE_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
        VITE_FIREBASE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
        VITE_FIREBASE_APP_ID=TU_APP_ID
        ```
        *(Nota: Ajusta los nombres de las variables según cómo se consuman en `src/firebase/config.js` o similar)*

### Ejecutar el Servidor de Desarrollo

```bash
pnpm dev
```

4.  Abre tu navegador en:

    ```
    http://localhost:5173 # O el puerto que indique Vite
    ```

### Compilar para Producción

```bash
pnpm build
```
Este comando compila la aplicación para producción en la carpeta `dist`.

### Linting

```bash
pnpm lint
```
Revisa el código en busca de errores de linting con ESLint.

---

## 🧱 Estructura del Proyecto (Sugerida)

```
conectaposts/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── assets/         # Recursos como imágenes, fuentes, etc.
│   ├── components/     # Componentes React reutilizables
│   ├── contexts/       # Contextos de React (ej. AuthContext)
│   ├── hooks/          # Hooks personalizados de React
│   ├── pages/          # Componentes de página (asociados a rutas)
│   ├── routes/         # Configuración de enrutamiento (React Router)
│   ├── services/       # Lógica de interacción con APIs (ej. funciones Firebase)
│   ├── styles/         # Estilos globales o configuración de Tailwind
│   ├── utils/          # Funciones de utilidad
│   ├── App.jsx         # Componente principal de la aplicación
│   ├── main.jsx        # Punto de entrada de la aplicación (renderizado inicial)
│   └── firebase/       # Configuración e inicialización de Firebase
├── .env.local          # Variables de entorno (claves Firebase, etc.) - No rastreado
├── .eslintrc.js        # Configuración de ESLint
├── .gitignore          # Reglas para Git ignore
├── index.html          # Punto de entrada HTML para Vite
├── package.json        # Metadatos y dependencias del proyecto
├── pnpm-lock.yaml      # Lockfile de PNPM
├── postcss.config.js   # Configuración de PostCSS
├── tailwind.config.js  # Configuración de Tailwind CSS
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```
*(Nota: Esta es una estructura sugerida, la estructura real puede variar.)*

---

# 🚀 Tecnologías Utilizadas

*   **Framework:** React 19
*   **Bundler/Tooling:** Vite
*   **Enrutamiento:** React Router
*   **Estilos:** Tailwind CSS, Flowbite
*   **Cliente HTTP:** Axios
*   **Backend/Base de Datos:** Firebase (Firestore, Authentication, etc.)
*   **Linting:** ESLint
*   **Gestor de Paquetes:** pnpm

![Node.js](https://commons.wikimedia.org/wiki/File:Node.js_logo.svg)

!Express.js

![Axios](https://commons.wikimedia.org/wiki/File:Axios_logo_%282020%29.svg)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🙏 Créditos

Esta tarea fue desarrollada como parte de la materia de Programación Web impartida por el profesor **Raydelto Hernández** para el Instituto Tecnológico de Las Américas (ITLA).

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.





