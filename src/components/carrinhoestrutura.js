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

const SelecionarItens = styled.div`
  margin-right: 220px;
  margin-top: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  border: solid 2px #6c4539;
  width: 80%;
  border-radius: 50px;
  padding: 10px;
`;

const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #6c4539;
  font-weight: bold;
  font-size: 30px;
  width: 100%;
  justify-content: space-between;
`;

const Preco = styled.p`
  color: green;
  font-weight: bold;
  font-size: 30px;
`;

const FinalizarCompra = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  padding: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  transition: color 0.3s ease;
  color: black;
  background-color: hsl(300, 99%, 64%);
  border: solid 2px #6c4539;
  opacity: 0.8;
  border-radius: 20px;
  &:hover {
    background-color: #7e47ec;
    border: solid 2px #6c4539;
    color: white;
  }
`;

const Produtos = styled.div`
  width: 80%;
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Loja = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: white;
  border: 2px solid #6c4539;
  border-radius: 10px;
  text-align: left;

  h2 {
    color: #6c4539;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

const Span = styled.span`
    font-weight: bold;
`;

const SelecionarLoja = styled.input`
    margin-right: 10px;
`;

const ItemCheckbox = styled.input`
    margin-right: 10px;
`;

const CarrinhoImg = styled.img`
  width: 30px;
  margin-top: 2px;
`;

const QuantidadeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BotaoQuantidade = styled.button`
  margin: 0 5px;
  cursor: pointer;
`;

const IconeLixeira = styled.span`
  cursor: pointer;
`;

const IconeFavorito = styled.span`
  cursor: pointer;
`;

const ProdutoImg = styled.img`
  width: 50px;
`;

const Mensagem = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
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
    SelecionarItens,
    LabelContainer,
    Preco,
    FinalizarCompra,
    QuantidadeContainer,
    BotaoQuantidade,
    IconeLixeira,
    IconeFavorito,
    ProdutoImg,
    Produtos, 
    Span, 
    Loja, 
    CarrinhoImg,
    SelecionarLoja, 
    Item, 
    ItemCheckbox,
    Mensagem
};
