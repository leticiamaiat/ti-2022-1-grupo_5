import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import criarEsfiha from './features/personalizada-salgada';
import ingredientesEsfihaSlice from './features/ingredientes-recheioSlice';
import esfihasReducer from './features/esfihas';
import pedidoReducer from './features/pedido';
import usuarioReducer from './features/usuario';
import ingredientesSlice from "./features/ingredientesSlice";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const store = configureStore({
  reducer: {
      usuario: usuarioReducer,
      criarEsfiha: criarEsfiha,
      ingredientesRecheio: ingredientesEsfihaSlice,
      esfihas: esfihasReducer,
      pedido: pedidoReducer,
      ingredient: ingredientesSlice,
  },
});

const root = ReactDOM.createRoot(document.querySelector('.root'));
  
root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>  
  </StrictMode>
);