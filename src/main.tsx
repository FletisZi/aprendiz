// src/main.tsx
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import Sobre from "./pages/Services";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<Sobre />} />
        {/* pode adicionar outras páginas como /contato, etc */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
