import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./login";
import Inicial from "./PaginaInicial"; 
import Carrinho  from "./Carrinho";

function App() {
  return (
    <Routes>
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/PaginaInicial" element={<Inicial />} />
      <Route path="/Carrinho" element={<Carrinho />} />
    </Routes>
  );
}

export default App;

