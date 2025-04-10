/*import styled from "styled-components";

const Background = styled.div`
    background-color: #FFC9E9;
    min-height: 100vh;
`;

const Header = styled.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 100%; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    color: #6c4539;
    padding: 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #6c4539;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: left;
`;

const ImgLogo = styled.img`
    width: 80px;
    height: auto;
    border-radius: 50%;
    margin-right: 800px;
    align-items: center;
    border: 2px solid #6c4539;
    cursor: pointer;
`;

const Tres = styled.span`
    color: #6c4539;
    cursor: pointer;

    &:focus {
        .tres:hover{
        color: #5E17EB;
    }

    &:hover {
        color: #5E17EB;
    }
`;

const Perfil = styled.div`
    margin-right: 0;
    display: flex;
`;

const ImgPerfil = styled.img`
    width: 80px;
    height: auto;
    border-radius: 50%;
    transition: filter 0.3s ease;
    border: 2px solid #6c4539;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;

    &:focus {
        filter: grayscale(100%);
        border-color: black;
    }
`;

const PerfilLink = styled.a`
  color: #f45bf4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;

const BotaoPerfil = styled.button`
    box-sizing: border-box;
    cursor: pointer;
    padding: 15px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    margin-left: 0px;
    transition: color 0.3s ease;
    list-style-type: none;
    color: black;
    background-color: #fd99d5;
    border: solid 2px #6c4539;
    margin-bottom: 2px;
    opacity: 0.8;
    font-size: 20px;
    border-radius: 20px;

  &:hover {
    background-color: #FFC9E9;
    border: solid 2px #6c4539;
    color: white;
    cursor: pointer;
  }
`;

const BarraPesquisa = styled.input`
  width: 370px;
  padding: 12px;
  margin: 15px;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 530px;
`;

const TitleCategorias = styled.h1`
  margin-left: 50px;
  margin-top: -55px;
  font-size: 40px;
`;

const Categorias = styled.div`
  margin-top: 50px;
  overflow: auto;
  white-space: nowrap;
  scrollbar-width: none;
`;

const CategoriasImg = styled.img`
    margin-bottom: 0px;
    width: 350px;
    height: 300px;
    margin-left: 20px;
    border-radius: 20%;
    border: solid 2px #6c4539;
  &:hover {
    filter: brightness(0.8);
    border: solid 2px #ff9a6e;
    cursor: pointer;
  }
`;


export {
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
  CategoriasImg
};
*/

import styled from "styled-components";

const Background = styled.div`
    background-color: #FFC9E9;
    min-height: 100vh;
`;

const Header = styled.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 100%; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    color: #6c4539;
    padding: 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #6c4539;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: left;
`;

const ImgLogo = styled.img`
    width: 80px;
    height: auto;
    border-radius: 50%;
    margin-right: auto;
    border: 2px solid #6c4539;
    cursor: pointer;
`;

const Tres = styled.span`
    color: #6c4539;
    cursor: pointer;

    &:hover {
        color: #5E17EB;
    }
`;

const Perfil = styled.div`
    display: flex;
`;

const ImgPerfil = styled.img`
    width: 80px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #6c4539;
    margin-right: 20px;
    cursor: pointer;
`;

const PerfilLink = styled.a`
    color: #f45bf4;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: hsl(300, 99%, 64%);
    }
`;

const BotaoPerfil = styled.button`
    cursor: pointer;
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    background-color: #fd99d5;
    border: solid 2px #6c4539;
    border-radius: 20px;

    &:hover {
        background-color: #FFC9E9;
        color: white;
    }
`;

const BarraPesquisa = styled.input`
    width: 400px; /* Aumentado para maior visibilidade */
    padding: 12px;
    margin: 20px auto; /* Centralizado */
    border: solid 1px #6c4539;
    background-color: #ffecfc;
    border-radius: 20px;
    display: block; /* Para centralizar corretamente */
`;

const TitleCategorias = styled.h1`
    margin-left: 50px;
    font-size: 40px;
`;

const Categorias = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const CategoriasImg = styled.img`
    width: 350px;
    height: 300px;
    margin: 20px;
    border-radius: 20%;
    border: solid 2px #6c4539;

    &:hover {
        filter: brightness(0.8);
        border: solid 2px #ff9a6e;
        cursor: pointer;
    }
`;

const Footer = styled.footer`
    background-color: #fff;
    padding: 20px;
    margin-top: 20px;
`;

const ConteudoFooter = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Coluna = styled.div`
    flex: 1;
    min-width: 200px;
    margin: 10px;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 10px;
`;

const FooterLink = styled.a`
    color: #6c4539;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Direitos = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const TitleFooter = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

const Texto = styled.p`
    font-size: 14px;
    color: #666;
`;

export {
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
};

