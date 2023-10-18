import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyComponent from "./components/MyComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyComponent /> */}
  </React.StrictMode>
);
