import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Background,
    Header,
    LogoContainer,
    ImgLogo,
    Tres,
    Perfil,
    ImgPerfil,
    PerfilLink,
    BotaoPerfil,
    BarraPesquisa,
    TitleCategorias,
    Categorias,
    CategoriasImg,
}from "./components/pesquisarestrutura";
import { Title } from "./components/favoritosestilos";

const SearchPage = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const navigate = useNavigate(); 
    // abrir e fechar menu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
    
        // recarregar pagina
        const reloadPage = (event) => {
          event.preventDefault();
          window.location.reload();
        };

  return (
    <Background>
      <Header>
        <LogoContainer>
          <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
        </LogoContainer>
        
        <Tres onClick={toggleMenu}>
          &#9776;
        </Tres>
        
        <Perfil>
          <PerfilLink onClick={() => navigate("/MeuPerfil")}>
            <ImgPerfil src="/img/perfil.eu.jpg" />
          </PerfilLink>
        </Perfil>
        
        <BotaoPerfil onClick={() => navigate("/MeuPerfil")}>Seu perfil</BotaoPerfil>

      </Header>

      <BarraPesquisa type="text" placeholder="Pesquisar" />

      <TitleCategorias>Categorias</TitleCategorias>

      <Categorias>
        <CategoriasImg src="/img/categoria_sobrancelha.jpg" alt="Sobrancelhas"/>
        <CategoriasImg src="/img/categoria_unhas.avif" alt=""/>
        <CategoriasImg src="/img/categoria_coloracao.webp" alt=""/>
        <CategoriasImg src="/img/categoria_trancas.webp" alt=""/>
      </Categorias>

    </Background>
  );
};

export default SearchPage;