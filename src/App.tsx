import React from 'react';
import { InputProvider } from './contexts/SearchContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import './assets/sass/app.scss';
import './utils/scroll';

import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ShoppingCartProvider>
      <InputProvider>
        <div className="wrapper">
          <AppRoutes />
        </div>
      </InputProvider>
    </ShoppingCartProvider>
  );
}

export default App;
