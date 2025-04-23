import styled from "styled-components";

const Background = styled.div`
  background-color: rgb(255, 228, 230);
`;

const Header = styled.header`
  background-image: url("/img/Textura_Rosa.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #6c4539;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid #6c4539;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #6c4539;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.input`
  width: 30%;
  padding: 10px;
  border: 2px solid hsl(300, 99%, 64%);
  border-radius: 20px;
  font-size: 16px;
  color: #6c4539;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c4539;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 10px;
  }
`;

const Menu = styled.div`
  overflow: hidden;
`;

const MenuLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 15px;
  display: inline-block;

  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
    margin: 8px auto;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

const Perfil = styled.div`
  display: flex;
  align-items: center;
`;

const Noticacao = styled.div`
  display: flex;
  align-items: center;
`;

const Sair = styled.div`
  display: flex;
  align-items: center;
`;

const PerfilLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #6c4539;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;

const NoticacaoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #6c4539;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;

const BotaoSair = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #6c4539;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;

const Title = styled.div`
  font-size: 40px;
  margin: 20px 50px;
  color: #6c4539;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 20px;
    text-align: center;
  }
`;

const Footer = styled.div`
  background-color: #ffc9e9;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  border: 3px solid #6c4539;
  width: 100%;
`;

const ConteudoFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`;

const FooterLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;

  &:hover {
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  justify-content: center;
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const Direitos = styled.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`;

const Texto = styled.p`
  font-size: 12px;
  color: #6c4539;
`;

const Logo = styled.img`
  width: 100px;
  margin: 20px auto;
`;

const TitleFooter = styled.h3`
  text-align: center;
  color: #6c4539;
  margin-bottom: 10px;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Titulo = styled.div`
  color: #6c4539;
  font-size: 40px;
  margin: 20px 50px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 20px;
    text-align: center;
  }
`;

const Opcoes = styled.div`
  color: #6c4539;
  width: 1000px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.38);
  border-radius: 12px;
  border: 1px solid #6c4539;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const TituloOpcoes = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Descricao = styled.div`
  max-height: ${({ $visivel }) => ($visivel ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: ${({ $visivel }) => ($visivel ? "1rem" : "0")};
  opacity: ${({ $visivel }) => ($visivel ? "1" : "0")};
  pointer-events: ${({ $visivel }) => ($visivel ? "auto" : "none")};
`;


const ConfiguracaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  white-space: pre-line;
`;

const OpcaoIdioma = styled.div`
  font-size: 20px;
  gap: 8px;
  margin: 5px 0;
`;

const TextoProblema = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  font-size: 14px;
  resize: none;
`;

const BotaoEnviar = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fd99d5;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #f978c2;
  }
`;




export {   
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

Titulo,
Opcoes,
TituloOpcoes,
Descricao,
ConfiguracaoContainer,
OpcaoIdioma,
TextoProblema,
BotaoEnviar,

Footer,
ConteudoFooter,
Coluna,
SocialIcons,
FooterLink,
Links,
Direitos,
Logo,
TitleFooter,
Texto
  };
