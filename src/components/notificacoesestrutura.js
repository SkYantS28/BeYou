import styled from "styled-components";

const Background = styled.div`
    background-color: #FFC9E9;
`;

const Header = styled.header`
    background-image: url("/img/Textura_Rosa.jpg");
    min-height: 150px;  // Ajustando a altura para não ocupar 100% da altura da tela
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

const MenuIcon = styled.div`
    height: 100%;
    width: ${({ menuVisible }) => (menuVisible ? '350px' : '0px')};
    position: fixed;
    top: 0;
    left: 0;
    background-color: #FFC9E9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: width 0.5s ease;
    border: solid 2px #6c4539;
`;

const MenuIconLink = styled.div`
    padding: 5px 35px;
    font-size: 30px;
    color: hsl(300, 40%, 50%);
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: hsl(300, 97.5%, 53.1%);
    }
`;



const FecharMenu = styled.a`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 30px;
    font-weight: bold;
`;

const Title = styled.div`
    text-align: left;
    color: #6c4539;
    font-size: 40px;
    margin: 20px 50px;
`;

const Footer = styled.div`
    background-color: hsl(300, 99%, 64%);
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 3px solid #6c4539;
    margin-top: 50px;
`;

const Direitos = styled.div`
    opacity: 50%;
`;

// Notificações
const NotificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;  // Reduzindo o gap entre as notificações
    margin: 10px; // Ajustando a margem
    padding: 10px; // Ajustando o padding
    background:rgba(249, 249, 249, 0);
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
    background: red;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background: darkred;
    }
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
    background-color: gray;  // Adicionando uma cor de fundo temporária
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
    FecharMenu,
    Title,
    Footer,
    Direitos,
    NotificationContainer,
    NotificationItem,
    MarkAsReadButton,
    ClearAllButton,
    NotificationCategory,
    NotificationAvatar,
    NotificationContent,
    NotificationText,
    NotificationTime
};