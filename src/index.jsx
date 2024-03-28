import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// const container = document.getElementById('app');
// const root = createRoot(container); 
// root.render(<App tab="home" />);
const rootElement = document.getElementById('root');


if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  throw new Error("Root element not found.");
}