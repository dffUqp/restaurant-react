import React from 'react';
import { InputProvider } from './contexts/SearchContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import './assets/sass/app.scss';
import './utils/scroll';

import AppRoutes from './routes/AppRoutes';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ShoppingCartProvider>
        <InputProvider>
          <div className="wrapper">
            <AppRoutes />
          </div>
        </InputProvider>
      </ShoppingCartProvider>
    </ThemeProvider>
  );
}

export default App;
