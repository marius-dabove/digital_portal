import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n.js';



createRoot(document.getElementById('root')).render(
   <React.StrictMode>
   
   
    <App />
    
    
  </React.StrictMode>,
  
);
//absolute top-2 left-1/2 transform -translate-x-1/2