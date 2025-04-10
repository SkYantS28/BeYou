/*import React, { useState } from "react";
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

export default SearchPage;*/
//--------------------------------------------------------------

import React, { useState } from "react";
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
    Footer,
    ConteudoFooter,
    Coluna,
    SocialIcons,
    FooterLink,
    Direitos,
    TitleFooter,
    Texto
} from "./components/pesquisarestrutura";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        { name: "Sobrancelhas", img: "/img/categoria_sobrancelha.jpg" },
        { name: "Unhas", img: "/img/categoria_unhas.avif" },
        { name: "Coloração", img: "/img/categoria_coloracao.webp" },
        { name: "Tranças", img: "/img/categoria_trancas.webp" },
    ];

    // Filtrar categorias com base no termo de pesquisa
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Background>
            <Header>
                <LogoContainer>
                    <ImgLogo src="/img/new_logo.jpg" alt="Logo" />
                </LogoContainer>

                <Tres>&#9776;</Tres>

                <Perfil>
                    <PerfilLink>
                        <ImgPerfil src="/img/perfil.eu.jpg" />
                    </PerfilLink>
                </Perfil>

                <BotaoPerfil>Seu perfil</BotaoPerfil>
            </Header>

            <BarraPesquisa
                type="text"
                placeholder="Pesquisar categorias"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <TitleCategorias>Categorias</TitleCategorias>

            <Categorias>
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category, index) => (
                        <CategoriasImg key={index} src={category.img} alt={category.name} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', width: '100%' }}>Nenhuma categoria encontrada.</p>
                )}
            </Categorias>

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
                            <FooterLink>Facebook</FooterLink>
                            <FooterLink>Twitter</FooterLink>
                            <FooterLink>YouTube</FooterLink>
                            <FooterLink>Instagram</FooterLink>
                        </SocialIcons>
                    </Coluna>

                    <Direitos>
                        <Texto>©️ Copyright 2025 - BeYou. Todos os direitos reservados.</Texto>
                        <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>
                    </Direitos>
                </ConteudoFooter>
            </Footer>
        </Background>
    );
};

export default SearchPage;
