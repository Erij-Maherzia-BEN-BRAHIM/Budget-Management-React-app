import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddDepenseContextProvider from './store/AddDepenseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AddDepenseContextProvider>
        <App />
    </AddDepenseContextProvider>
);

