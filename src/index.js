import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//export const base_url = 'https://api.themoviedb.org/3/';
//export const api_key = '3255146d9b49dcda8b17a764cd594727';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </BrowserRouter>,
  document.getElementById('root'),
);
