import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider as JotaiProvider } from 'jotai';
import './index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JotaiProvider>
      <App />
      <Toaster containerClassName="text-sm" />
    </JotaiProvider>
  </React.StrictMode>,
);
