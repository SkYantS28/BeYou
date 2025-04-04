import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import {
    Background,
    Header,
    LogoContainer,
    ImgLogo,
    SearchBar,
    Menu,
    MenuLink,
    BotaoSair,
    PerfilLink,
    NoticacaoLink,
    Perfil,
    Noticacao,
    Sair,
    Icons,
    
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
    ConteudoFooter,
    Coluna,
    SocialIcons,
    FooterLink,
    Links,
    Logo,
    Direitos,
    TitleFooter,
    Texto
} from "./components/inicialestrutura";

function Inicial() {
  const handleLogout = () => {
          navigate("/bemvindo"); 
        };
    
      // linkar paginas
      const navigate = useNavigate(); 
    
      // levar ate a pagina inicial
      const reloadPage = (event) => {
          event.preventDefault();
          navigate('/PaginaInicial');
      };

  return (
    <Background>
            <Header>
                <LogoContainer>
                    <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
                </LogoContainer>

                <Menu>
                    <MenuLink onClick={() => navigate("/PaginaInicial")}>Inicio</MenuLink>

                    <MenuLink onClick={() => navigate("/Carrinho")}>Meu Carrinho</MenuLink>

                    <MenuLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuLink>

                    <MenuLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuLink>

                    <MenuLink onClick={() => navigate("/FAvoritos_perfil")}>Favoritos</MenuLink>

                </Menu>
                
                <SearchBar type="text" placeholder="Busque por item ou loja" />

                <Icons>
                    <Perfil>
                        <PerfilLink onClick={() => navigate("/MeuPerfil")}>
                            <User className="icone" />
                        </PerfilLink>
                    </Perfil>
            
                    <Noticacao>
                        <NoticacaoLink onClick={() => navigate("/notificacoes_perfil")}>
                            <Bell className="icone" />
                        </NoticacaoLink>
                    </Noticacao>
            
                    <Sair>
                        <BotaoSair onClick={handleLogout}>
                            <LogOut className="icone" />
                        </BotaoSair>
                    </Sair>
                </Icons>

            </Header>

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
        <ConteudoFooter>
          <Coluna>
            <TitleFooter>BeYou</TitleFooter>
            <FooterLink>Site Institucional</FooterLink>
            <FooterLink>Fale Conosco</FooterLink>
            <FooterLink>Conta e Segurança</FooterLink>
            <FooterLink>Carreiras</FooterLink>
            <FooterLink>Entregadores</FooterLink>
          </Coluna>
          <Coluna>
            <TitleFooter>Descubra</TitleFooter>
            <FooterLink>Cadastre sua loja</FooterLink>
            <FooterLink>Beyou Shop</FooterLink>
            <FooterLink>BeYou Empresas</FooterLink>
            <FooterLink>Blog BeYou Empresas</FooterLink>
          </Coluna>
          <Coluna>
            <TitleFooter>Social</TitleFooter>
            <SocialIcons>
              <FooterLink><FaFacebookF/></FooterLink>
              <FooterLink><FaTwitter/></FooterLink>
              <FooterLink><FaYoutube/></FooterLink>
              <FooterLink><FaInstagram/></FooterLink>
            </SocialIcons>
          </Coluna>
          
          <Direitos>
            <Logo src="/img/new_logo.jpg" alt="BeYou Logo" />           
            <Texto>© Copyright 2025 - BeYou. Todos os direitos reservados.</Texto>
            <br></br>
            <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>
          </Direitos>

          <Links>
            <FooterLink>Termos e Condições de Uso</FooterLink> | <FooterLink>Codigo de Conduta</FooterLink> | <FooterLink>Privacidade</FooterLink> | <FooterLink>Dicas de Segurança</FooterLink>
          </Links>
        </ConteudoFooter>
      </Footer>
    </Background>
  );
}

export default Inicial;
