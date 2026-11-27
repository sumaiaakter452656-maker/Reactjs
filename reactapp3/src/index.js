import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Myhome from './pages/destructuring';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Myhome name="John" age={25} />
  </React.StrictMode>
);


reportWebVitals();
