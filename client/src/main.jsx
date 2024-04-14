import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import Modal from 'react-modal';
import App from './App'; // Importa tu componente principal de la aplicación
import './index.css';

// Encuentra el elemento raíz de tu aplicación
const appElement = document.getElementById('root');

// Establece el elemento raíz como el elemento principal de la aplicación para el Modal
Modal.setAppElement(appElement);

// Renderiza tu aplicación dentro del elemento raíz
createRoot(appElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
