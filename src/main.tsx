import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ZeldaApp } from './ZeldaApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ZeldaApp />
  </StrictMode>,
);
