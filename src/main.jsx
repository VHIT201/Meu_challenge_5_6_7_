import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  // Comment out StrictMode for development to prevent double function calls
  // <StrictMode>
    <App />
  // </StrictMode>,
);
