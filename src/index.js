import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ProfileProvider } from './context/ProfileContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <ProfileProvider >
          <App />
    </ProfileProvider>
);

