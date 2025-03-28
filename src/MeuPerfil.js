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
    MenuIcon,
    MenuIconLink,
    FecharMenu,
    Title,
    Footer,
    Direitos,
    PerfilContainer,
    ImgPerfilGrande,
    NomePerfil
} from "./components/meuperfilestrutura";



function MeuPerfil() {
    const [menuVisible, setMenuVisible] = useState(false);
  
    // linkar paginas
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

            <MenuIcon menuVisible={menuVisible}>
                <MenuIconLink href="javascript:void(0)" className="FecharMenu" onClick={toggleMenu}>
                &times;
                </MenuIconLink>
                <MenuIconLink href="#imagens_passar">Inicio</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Carrinho")}>Carrinho</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/MinhaLoja")}>Minha Loja</MenuIconLink>
            </MenuIcon>

            <PerfilContainer>
                <ImgPerfilGrande src="/img/perfil.eu.jpg" alt="Foto de perfil" />
                <NomePerfil>Sky Crizosti</NomePerfil>
            </PerfilContainer>

            <main>
            
            </main>

            <Footer>
                <Direitos>
                    <p>Todos os direitos reservados. @2025 por BeYou</p>
                </Direitos>
            </Footer>


        </Background>

    );
}

export default MeuPerfil;