import React from 'react';
import { InputProvider } from './context/SearchContent';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
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
