import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { CustomThemeProvider } from './contexts/CustomThemeContext.tsx';
import App from './views/app/App.tsx';
import './index.css';
import { CartContextProvider } from './contexts/CartContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomThemeProvider>
      <CartContextProvider>
        <Router>
          <App />
        </Router>
      </CartContextProvider>
    </CustomThemeProvider>
  </StrictMode>,
);
