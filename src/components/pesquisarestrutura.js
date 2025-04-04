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
  margin-left: 30px;
  margin-top: -55px;
`;

const Categorias = styled.div`
  margin-top: 50px;
  overflow: auto;
  white-space: nowrap;
  scrollbar-width: none;
`;

const CategoriasImg = styled.img`
    margin-bottom: 10px;
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

