import styled from "styled-components";


const Background = styled.div`
    background-color:rgb(255, 228, 230);
`;

const Header = styled.header`
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
    padding: 12px 18px;
    border: 2px solid hsl(300, 99%, 64%);
    border-radius: 20px;
    font-size: 16px;
    color: #6c4539;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

    &::placeholder {
        color: #6c4539;
        font-style: italic;
    }

    &:focus {
      border: 2px solid hsl(300, 99%, 64%);
    }

    &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;


const Menu = styled.div`
  overflow: hidden;
`;

const MenuLink = styled.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Icons = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: flex-end;
    gap: 16px;
`;

const Perfil = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`;

const Noticacao = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`;

const Sair = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`;

const PerfilLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    overflow: hidden;
    text-decoration: none;

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
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
    background-color: transparent;
    color: #6c4539;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: hsl(300, 99%, 64%);
    }
`;
  
const BotaoSair = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
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
    text-align: left;
    color: #6c4539;
    font-size: 40px;
    margin: 20px 50px;
`;

const Secao = styled.section`
  padding: 20px;
  margin: 10px 0;
`;


const Footer = styled.div`
  background-color: #FFC9E9;
  color: white;
  padding: 40px 80px;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #6c4539;
  align-items: center;
  flex-direction: column;
  width: 100%;
  display: flex;
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
  display: inline-block;
  margin: 10px 0;
  text-align: center;

  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 200px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Direitos = styled.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`;


const DadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
`;


const Opcoes = styled.div`
  color: #6c4539;
  width: 1000px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.38);
  opacity: 90%;
  border-radius: 12px;
  border: 1px solid #6c4539;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
`;



const Descricao = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin-top: 10px;
  display: ${(props) => (props.visivel ? "block" : "none")};
  line-height: 1.5;
  text-align: justify;
`;

 const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-top: 10px;
  color: #6c4539;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
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
  transition: all 0.2s ease-in-out;
  transform: scale(1);

  &:hover {
    background-color: #fd99d5;
  }

  &:active {
    transform: scale(0.95);
    background-color: #fd99d5;
  }
`;

const BotaoExcluir = styled(BotaoEnviar)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #ff6666;
  }

  &:active {
    background-color: #cc0000;
  }
`;


const Texto = styled.p`
  font-size: 12px;
  color: #6c4539;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const TitleFooter = styled.h3`
    text-align: center;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    margin-bottom: 10px;
    font-size: 40px;
`;

const MeusDados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  white-space: pre-line;
`;

const Titulo = styled.div`
  color: #6c4539;
  font-style: bold;
  list-style: none;
  font-size: 40px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-top: 20px;
`;

// Exemplo de como criar e exportar os componentes ausentes:
export const TituloOpcoes = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const Tres = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgPerfil = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const BotaoPerfil = styled.button`
  background-color: #0077ff;
  color: white;
  padding: 10px;
  border-radius: 8px;
  border: none;
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('/menu-icon.svg');
  background-size: contain;
`;

export const MenuIconLink = styled.a`
  text-decoration: none;
  color: inherit;
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
  Secao,
  Label,
  Input,
  TextArea,
  BotaoEnviar,
  BotaoExcluir,
  Title,
  Footer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Direitos,
  Logo,
  TitleFooter,
  Texto,
  Titulo,
  Opcoes,
  Descricao,
  MeusDados,
  DadosContainer
};