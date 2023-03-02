import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import ContextName from './Context'
import { Provider } from 'react-redux';
import App from './App';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


  <React.StrictMode >


   
    <App />
 
  </React.StrictMode>
);


