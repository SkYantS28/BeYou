import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./login";
import Inicial from "./PaginaInicial"; 
import Carrinho from "./Carrinho";
import MeuPerfil from './MeuPerfil';
import Cadastroloja from './Cadastroloja';
import Loginloja from './loginloja';
import NotificacoesPerfil from './notificacoes_perfil'; 
import ConfiguracaoPerfil from './configuracao_perfil';
import FAvoritosPerfil from './FAvoritos_perfil';
import BemVindo from './bemvindo'; 
import SearchPage from './Pesquisar';
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
      <Route path="/notificacoes_perfil" element={<NotificacoesPerfil />} />
      <Route path="/configuracao_perfil" element={<ConfiguracaoPerfil />} />
      <Route path="/FAvoritos_perfil" element={<FAvoritosPerfil />} />
      <Route path="/" element={<BemVindo />} /> {/* Página de boas-vindas */}
      <Route path="/Pesquisar" element={<SearchPage />} />
    </Routes>
  );
}

export default App;