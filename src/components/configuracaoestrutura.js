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
  background-color: hsl(300, 99%, 64%);
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

const Titulo = styled.div`
  color: #6c4539;
  font-style: bold;
  list-style: none;
  font-size: 40px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-top: 20px;

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

const TituloOpcoes = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Descricao = styled.div`
  font-size: 20x;
  font-weight: normal;
  margin-top: 10px;
  display: ${(props) => (props.visivel ? "block" : "none")};
  line-height: 1.5; /* Espaçamento entre as linhas */
  text-align: justify; /* Justificação do texto */
`;

const ConfiguracaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  white-space: pre-line; /* permite que \n funcione como quebra de linha */
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
  transition: all 0.2s ease-in-out;
  transform: scale(1);

  &:hover {
    background-color: #fd99d5;
  }

  &:active {
    transform: scale(0.95); /* Simula o botão sendo pressionado */
    background-color: #fd99d5;
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
    Titulo,
    ConfiguracaoContainer,
    Opcoes,
    TituloOpcoes,
    Descricao,
    OpcaoIdioma,
    TextoProblema,
    BotaoEnviar
  };