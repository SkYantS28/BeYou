import styled from "styled-components";

const Background = styled.div`
    background-color:rgb(255, 228, 230);
`;

const Header = styled.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 100%; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    color: #6c4539;
    padding: 10px 20px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #6c4539;
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

const Title = styled.h1`
  font-size: 40px;
  color: #6c4539;
  margin: 30px 50px 10px;
`;

const FiltrosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 50px;
`;

const BotaoFiltro = styled.button`
  padding: 10px 20px;
  background-color: #fd99d5;
  border: 2px solid #6c4539;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #FFC9E9;
    color: white;
  }
`;

const CampoBusca = styled.input`
  padding: 10px;
  margin: 20px 50px;
  width: calc(100% - 100px);
  border: 2px solid #6c4539;
  border-radius: 15px;
  font-size: 16px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px 50px;
  justify-content: flex-start;
`;

const Card = styled.div`
  width: 300px;
  background-color: white;
  border: 2px solid #6c4539;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const ImgCard = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  color: #6c4539;
`;

const CardTitulo = styled.h2`
  font-size: 20px;
  margin: 5px 0;
`;

const CardCategoria = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #9b4d8c;
`;

const CardNota = styled.p`
  font-size: 16px;
  color: #d68aff;
`;

const CardPreco = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;

const CardBotoes = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const BotaoCard = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  background-color: #fd99d5;
  border: 2px solid #6c4539;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #FFC9E9;
    color: white;
  }
`;

const IlustracaoVazio = styled.div`
  text-align: center;
  margin-top: 50px;
  color: #6c4539;

  img {
    width: 200px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const BotaoLimparTudo = styled.button`
  margin: 20px 50px;
  padding: 12px 20px;
  font-weight: bold;
  font-size: 16px;
  background-color: #ff516f;;
  color: white;
  border: 2px solid #5c000f;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color:rgb(212, 4, 38);
  }
`;

const Footer = styled.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 80px;
  display: flex; /*conteiner manipulavel*/
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #6c4539;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  text-decoration: none;
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

  Title,
  FiltrosContainer,
  BotaoFiltro,
  CampoBusca,
  CardContainer,
  Card,
  ImgCard,
  CardContent,
  CardTitulo,
  CardCategoria,
  CardNota,
  CardPreco,
  CardBotoes,
  BotaoCard,
  IlustracaoVazio,
  BotaoLimparTudo,
  
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
};
