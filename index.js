import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { AuthenticationProvider } from './src/AuthenticationProvider';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
