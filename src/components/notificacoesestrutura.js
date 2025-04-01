import styled from "styled-components";

const Background = styled.div`
    background-color: #FFC9E9;
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

const MenuIcon = styled.div`
    height: 100%;
    width: ${(props) => (props.menuVisible ? '350px' : '0px')};
    position: fixed;
    z-index: 1; 
    top: 0;
    left: 0;
    background-color:#FFC9E9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: width 0.5s ease; 
    border: solid 2px #6c4539;
`;

const MenuIconLink = styled.div`
    padding: 5px 5px 5px 35px;
    text-decoration: none;
    font-size: 30px;
    color:  hsl(300, 40%, 50%);
    font-weight: bold;
    display: block;
    transition: filter 0.3s ease;

  &:hover {
    color: hsl(300, 97.50%, 53.10%);
    cursor: pointer;
  }
`;

const FecharMenu = styled.a`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 30px;
    font-weight: bold;
    margin-left: 50px;
`;

const Title = styled.div`
    text-align: left;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 20px;
`;

const Footer = styled.div`
  background-color: hsl(300, 99%, 64%);;
  display: flex;
  color: white;
  padding: 20px;
  display: flex; /conteiner manipulavel/
  align-items: center;
  justify-content: space-between;
  border: 3px solid #6c4539;
  margin-top: 50px;
`;

const Direitos = styled.div`
  color: white;
  opacity: 50%;
`;


//adicionado

const NotificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px;
    padding: 20px;
    background: #f9f9f9;
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
  ClearAllButton
};
