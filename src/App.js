import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./login";
import Inicial from "./PaginaInicial"; 
import Carrinho  from "./Carrinho";
import MeuPerfil from './MeuPerfil';
import Cadastroloja from './Cadastroloja';
import Loginloja from './loginloja';

function App() {
  return (
    <Routes>
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/PaginaInicial" element={<Inicial />} />
      <Route path="/Carrinho" element={<Carrinho />} />
      <Route path="/MeuPerfil" element={<MeuPerfil />} />
      <Route path="/Cadastroloja" element={<Cadastroloja />} />
      <Route path="/loginloja" element={<Loginloja />} />
    </Routes>
  );
}

export default App;



