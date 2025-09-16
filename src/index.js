import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { system } from './theme';
import GlobalStateContext from './context/GlobalStateContext';
// console.log(system);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStateContext fallback={<p>Something went wrong</p>}>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </GlobalStateContext>

);

