import styled from "styled-components";

// ===== Estrutura Geral =====


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

const Title = styled.div`
    text-align: left;
    color: #6c4539;
    font-size: 40px;
    margin: 20px 50px;
`;

// ===== Notificações =====

const NotificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 10px;
    padding: 10px;
    background: rgba(249, 249, 249, 0);
    border-radius: 10px;
`;

const NotificationItem = styled.div`
    padding: 10px;
    background: ${({ read }) => (read ? "#d3d3d3" : "#fff")};
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NotificationCategory = styled.div`
    margin-top: 20px;
    font-weight: bold;
`;

const NotificationAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: gray;
`;

const NotificationContent = styled.div`
    flex-grow: 1;
`;

const NotificationText = styled.p`
    margin: 0;
    font-size: 14px;
`;

const NotificationTime = styled.span`
    font-size: 12px;
    color: gray;
`;

// ===== Botões de Ação =====

const MarkAsReadButton = styled.button`
    background: #6d098c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #5a0673;
    }
`;

const ClearAllButton = styled.button`
    background: #ff516f;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;

    &:hover {
        background: darkred;
    }
`;

const DateSeparator = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #6c4539;
    margin: 20px 10px 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #d6a7c2;
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
  margin-top: 50px;
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
    NotificationContainer,
    NotificationItem,
    MarkAsReadButton,
    ClearAllButton,
    NotificationCategory,
    NotificationAvatar,
    NotificationContent,
    NotificationText,
    NotificationTime,
    DateSeparator,

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
