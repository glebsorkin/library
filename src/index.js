import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Terms } from './components/terms';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';

import './index.css';
import './iconsfont.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/books' element={<BookPage />} />
        <Route path='/terms' element={<Terms name = 'Правила пользования'/>} />
        <Route path='/contract' element={<Terms name = 'Договор оферты'/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
