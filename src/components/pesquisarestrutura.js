/* import styled from "styled-components";

// COMPONENTES GERAIS
const Background = styled.div`
  background-color: #FFC9E9;
`;

const Header = styled.header`
  background-image: url("/img/Textura_Rosa.jpg");
  min-height: 150px;
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
  cursor: pointer;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fd99d5;
  border: solid 2px #6c4539;
  border-radius: 20px;
  opacity: 0.8;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #FFC9E9;
    color: white;
  }
`;

const TitleCategorias = styled.h2`
  color: #6c4539;
  font-size: 32px;
  text-align: center;
  margin: 40px 0 20px 0;
`;

const Categorias = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 0 40px 40px 40px;
`;

const CategoriaContainer = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid #6c4539;
  border-radius: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CategoriasImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TextoSobreposto = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  background: rgba(255, 201, 233, 0.8);
  color: #6c4539;
  font-weight: bold;
  font-size: 18px;
`;

export {
  // VISUAL
  Background,
  Header,
  LogoContainer,
  ImgLogo,
  Tres,
  Perfil,
  ImgPerfil,
  PerfilLink,
  BotaoPerfil,
  // CATEGORIAS
  TitleCategorias,
  Categorias,
  CategoriaContainer,
  TextoSobreposto,
  CategoriasImg,
};
*/


// components/pesquisarestrutura.js
import styled from "styled-components";

export const Header = styled.header`
    background-image: url("/img/Textura_Rosa.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px 40px;
    border-bottom: 4px solid #e6b2d4;
    border-radius: 0 0 30px 30px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #6c4539;
`;

export const Footer = styled.div`
  background-color: #FFC9E9;
  color: white;
  padding: 40px 80px;
  flex-wrap: wrap;
  border: 3px solid #6c4539;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`;

export const ConteudoFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`;

export const FooterLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;

  &:hover {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  flex: 1;
  min-width: 200px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`;

export const Links = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Direitos = styled.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`;

export const Texto = styled.p`
  font-size: 12px;
  color: #6c4539;
`;

export const Logo = styled.img`
  width: 100px;
  margin: 20px 0;
`;

export const TitleFooter = styled.h3`
    text-align: center;
    color: #6c4539;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 40px;
`;



