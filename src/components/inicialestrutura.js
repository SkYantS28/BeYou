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

const PromocaoLugares = styled.div`
    margin-top: 50px;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none;
`;

const LugaresImg = styled.img`
    margin-top: 50px;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none;
    width: 300px;
    height: 300px;
    margin-left: 20px;
    border-radius: 20%;
    border: solid 2px #6c4539;

  &:hover {
    filter: brightness(0.8);;
    cursor: pointer;
  }
`;

const PromocaoImg = styled.img`
    margin-bottom: 10px;
    width: 300px;
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

const PromocaoProdutos = styled.div`
    margin-top: 50px;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none;
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

const ProdutosImg = styled.img`
    margin-bottom: 10px;
    width: 300px;
    height: 300px;
    margin-left: 20px;
    border-radius: 20%;
    border: solid 2px #6c4539;

    &:hover {
        filter: brightness(0.8);;
        cursor: pointer;
    }
`;

const LogosEmpresas = styled.div`
    margin-top: 50px;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none; 
`;

const EmpresasImg = styled.img`
    vertical-align: middle;
    border-radius: 50%;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    margin-left: 20px;
    border: solid 2px #6c4539;

    &:hover {
        filter: brightness(0.8);;
        cursor: pointer;
    }
`;

const VoceSabia = styled.div`
    margin-top: 50px;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none;
`;

const VoceSabiaImg = styled.img`
    margin-bottom: 10px;
    width: 300px;
    height: 300px;
    margin-left: 20px;
    border-radius: 20%;
    border: solid 2px #6c4539;

    &:hover {
        filter: brightness(0.8);;
        cursor: pointer;
    }
`;

const Footer = styled.div`
  background-color: hsl(300, 99%, 64%);;
  display: flex;
  color: white;
  padding: 20px;
  display: flex; /*conteiner manipulavel*/
  align-items: center;
  justify-content: space-between;
  border: 3px solid #6c4539;
  margin-top: 50px;
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
    FecharMenu,
    PromocaoLugares,
    LugaresImg,
    PromocaoImg,
    PromocaoProdutos,
    Title,
    ProdutosImg,
    LogosEmpresas,
    EmpresasImg,
    VoceSabia,
    VoceSabiaImg,
    Footer,
    Direitos
  };
  