import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./login";
import Inicial from "./PaginaInicial"; 


function App() {
  return (
    <Routes>
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/PaginaInicial" element={<Inicial />} />
    </Routes>
  );
}

export default App;
