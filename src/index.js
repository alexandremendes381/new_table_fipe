import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ScreenMenu from './view/ScreenMenu';
import ScreenMoto from './view/ScreenMoto';
import ScreenCar from './view/ScreenCar';
import Screentruck from './view/ScreenTruck';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenMenu/>}/>
          <Route path="/moto" element={<ScreenMoto/>}/>
          <Route path="/carros" element={<ScreenCar/>}/>
          <Route path="/caminhao" element={<Screentruck/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
