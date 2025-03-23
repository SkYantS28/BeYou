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
    PromocaoLugares,
    LugaresImg,
    PromocaoImg,
    PromocaoProdutos,
    Title,
    ProdutosImg,
    LogosEmpresas,
    EmpresasImg,
    VoceSabia,
    VoceSabiaImg,
    Footer,
    Direitos
} from "./components/inicialestrutura";

function Inicial() {
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
          <MenuIconLink onClick={() => navigate("/Carrinho")}>Meu Carrinho</MenuIconLink>
          <MenuIconLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuIconLink>
          <MenuIconLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuIconLink>
          <MenuIconLink onClick={() => navigate("/MinhaLoja")}>Minha Loja</MenuIconLink>
      </MenuIcon>

      <main>
        <PromocaoLugares>
          <Title>Promoções de Serviços</Title>
          <LugaresImg src="/img/promocao1.jpg" alt="alongamento_unha" />
          <LugaresImg src="/img/promocao2.jpg" alt="progressiva" />
          <LugaresImg src="/img/promocao3.jpeg" alt="corte" />
          <LugaresImg src="/img/promoçao4.jpg" alt="tranças" />
          <LugaresImg src="/img/promocao5.jpeg" alt="massagem" />
        </PromocaoLugares>

        <PromocaoProdutos>
          <Title>Promoções de Produtos</Title>
          <ProdutosImg src="/img/promocao_produto1.jpg" alt="" />
          <ProdutosImg src="/img/promocao_produto2.jpg" alt="progressiva" />
          <ProdutosImg src="/img/promocao_produto3.jpg" alt="" />
          <ProdutosImg src="/img/imgnv1.jpg" alt="" />
          <ProdutosImg src="/img/imgnova.jpg" alt="" />
        </PromocaoProdutos>

        <LogosEmpresas>
          <Title>Lojas em destaque</Title>
          <EmpresasImg src="/img/loja1.jpg" alt="" />
          <EmpresasImg src="/img/loja2.jpg" alt="" />
          <EmpresasImg src="/img/loja3.jpg" alt="" />
          <EmpresasImg src="/img/loja5.jpg" alt="" />
          <EmpresasImg src="/img/loja6.jpg" alt="" />
          <EmpresasImg src="/img/loja7.jpg" alt="" />
        </LogosEmpresas>

        <VoceSabia>
          <Title>Você sabia...?</Title>
          <VoceSabiaImg src="/img/voce_sabia1.jpg" alt="" />
          <VoceSabiaImg src="/img/voce_sabia2.jpg" alt="" />
          <VoceSabiaImg src="/img/voce_sabia3.jpg" alt="" />
          <VoceSabiaImg src="/img/voce_sabia4.jpg" alt="" />
          <VoceSabiaImg src="/img/voce_sabia5.jpg" alt="" />
        </VoceSabia>
      </main>

      <Footer>
        <Direitos>
            <p>Todos os direitos reservados. @2025 por BeYou</p>
        </Direitos>
      </Footer>
    </Background>
  );
}

export default Inicial;
