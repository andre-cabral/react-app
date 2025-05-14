import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page-1" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
