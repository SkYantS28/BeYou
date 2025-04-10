import styled from "styled-components";

const Background = styled.div`
    background-color: #FFC9E9;
    min-height: 100vh;
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
    margin-right: auto;
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
`;

const ImgPerfil = styled.img`
    width: 80px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #6c4539;
    margin-right: 20px;
    cursor: pointer;
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
    color: black;
    background-color: #fd99d5;
    border: solid 2px #6c4539;
    border-radius: 20px;

    &:hover {
        background-color: #FFC9E9;
        color: white;
    }
`;

const BarraPesquisa = styled.input`
    width: 400px; /* Aumentado para maior visibilidade */
    padding: 12px;
    margin: 20px auto; /* Centralizado */
    border: solid 1px #6c4539;
    background-color: #ffecfc;
    border-radius: 20px;
    display: block; /* Para centralizar corretamente */
`;

const TitleCategorias = styled.h1`
    margin-left: 50px;
    font-size: 40px;
`;

const Categorias = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 80px;
  overflow: hidden;
`;

const CategoriaContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 10px 0;
`;

const TextoSobreposto = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  text-align: center;
`;

const CategoriasImg = styled.img`
    margin-bottom: 20px;
    width: 330px;
    height: 300px;
    margin-left: 10px;
    border-radius: 20%;
    border: solid 2px #6c4539;
  &:hover {
    filter: brightness(0.8);
    border: solid 2px #ff9a6e;
    cursor: pointer;
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
    BarraPesquisa,
    TitleCategorias,
    Categorias,
    CategoriaContainer,
    TextoSobreposto,
    CategoriasImg
};

