import styled from "styled-components";

const Background = styled.div`
  background-color: #FFC9E9;
  min-height: 100vh;
`;

const Header = styled.header`
  background-image: url("/img/Textura_Rosa.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #6c4539;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #6c4539;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 80px;
  border-radius: 50%;
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
  align-items: center;
`;

const ImgPerfil = styled.img`
  width: 80px;
  border-radius: 50%;
  border: 2px solid #6c4539;
  margin-right: 20px;
  cursor: pointer;

  &:focus {
    filter: grayscale(100%);
    border-color: black;
  }
`;

const PerfilLink = styled.a`
  text-decoration: none;
  color: #f45bf4;

  &:hover {
    color: hsl(300, 99%, 64%);
    text-decoration: underline;
  }
`;

const BotaoPerfil = styled.button`
  background-color: #fd99d5;
  border: 2px solid #6c4539;
  border-radius: 20px;
  padding: 15px;
  font-weight: bold;
  font-size: 20px;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    background-color: #FFC9E9;
    color: white;
  }
`;

const MenuIcon = styled.div`
  height: 100%;
  width: ${(props) => (props.menuVisible ? '350px' : '0px')};
  position: fixed;
  top: 0;
  left: 0;
  background-color: #FFC9E9;
  padding-top: 60px;
  transition: width 0.5s ease;
  border: 2px solid #6c4539;
  overflow-x: hidden;
`;

const MenuIconLink = styled.div`
  padding: 10px 35px;
  font-size: 30px;
  font-weight: bold;
  color: hsl(300, 40%, 50%);
  cursor: pointer;

  &:hover {
    color: hsl(300, 97.5%, 53.1%);
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
  background-color: #ff4d4d;
  color: white;
  border: 2px solid #6c4539;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #d42e2e;
  }
`;

const Footer = styled.footer`
  background-color: hsl(300, 99%, 64%);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-top: 3px solid #6c4539;
`;

const Direitos = styled.div`
  color: white;
  opacity: 50%;
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
  MenuIcon,
  MenuIconLink,
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
  Direitos
};
