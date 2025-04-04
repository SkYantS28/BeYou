import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
  Direitos,
} from "./components/favoritosestilos";

function FAvoritosPerfil() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const favoritos = [
    {
      id: "servico-01",
      tipo: "servico",
      nome: "Corte de Cabelo Masculino",
      categoria: "Serviço",
      imagem: "/img/servico_corte.jpg",
      avaliacoes: 128,
      preco: 45.00
    },
    {
      id: "produto-01",
      tipo: "produto",
      nome: "Shampoo Hidratante",
      categoria: "Produto de Beleza",
      imagem: "/img/shampoo.jpg",
      avaliacoes: 212,
      preco: 29.90
    },
    {
      id: "profissional-01",
      tipo: "profissional",
      nome: "Julia Fernandes",
      categoria: "Cabeleireira",
      imagem: "/img/julia_fernandes.jpg",
      avaliacoes: 342
    },
    {
      id: "servico-02",
      tipo: "servico",
      nome: "Design de Sobrancelhas",
      categoria: "Serviço",
      imagem: "/img/sobrancelhas.jpg",
      avaliacoes: 87,
      preco: 30.00
    },
    {
      id: "produto-02",
      tipo: "produto",
      nome: "Creme Pós-Barba Refrescante",
      categoria: "Produto Masculino",
      imagem: "/img/creme_barba.jpg",
      avaliacoes: 90,
      preco: 19.90
    },
    {
      id: "profissional-02",
      tipo: "profissional",
      nome: "Carlos Oliveira",
      categoria: "Barbeiro",
      imagem: "/img/carlos_oliveira.jpg",
      avaliacoes: 120
    }
  ];
  

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const reloadPage = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <Background>
      <Header>
        <LogoContainer>
          <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
        </LogoContainer>

        <Tres onClick={toggleMenu}>&#9776;</Tres>

        <Perfil>
          <PerfilLink onClick={() => navigate("/MeuPerfil")}>
            <ImgPerfil src="/img/perfil.eu.jpg" />
          </PerfilLink>
        </Perfil>

        <BotaoPerfil onClick={() => navigate("/MeuPerfil")}>Seu perfil</BotaoPerfil>
      </Header>

      <MenuIcon menuVisible={menuVisible}>
        <MenuIconLink onClick={toggleMenu}>&times;</MenuIconLink>
        <MenuIconLink onClick={() => navigate("/")}>Início</MenuIconLink>
        <MenuIconLink onClick={() => navigate("/Carrinho")}>Carrinho</MenuIconLink>
        <MenuIconLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuIconLink>
        <MenuIconLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuIconLink>
        <MenuIconLink onClick={() => navigate("/MinhaLoja")}>Minha Loja</MenuIconLink>
      </MenuIcon>

      <main>
        <Title>Meus Favoritos 💖</Title>

        <CampoBusca
          type="text"
          placeholder="Buscar entre seus favoritos..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <BotaoLimparTudo onClick={() => {/* lógica para limpar favoritos */}}>
          Limpar Tudo
        </BotaoLimparTudo>

        <FiltrosContainer>
          <BotaoFiltro>Serviços</BotaoFiltro>
          <BotaoFiltro>Profissionais</BotaoFiltro>
          <BotaoFiltro>Produtos</BotaoFiltro>
        </FiltrosContainer>

        {favoritos.length === 0 ? (
          <IlustracaoVazio>
            <img src="/img/vazio.png" alt="Nenhum favorito" />
            <p>Você ainda não favoritou nada… Que tal explorar a loja?</p>
          </IlustracaoVazio>
        ) : (
          <CardContainer>
            {favoritos.map((item, index) => (
              <Card key={index}>
                <ImgCard src={item.imagem} alt={item.nome} />
                <CardContent>
                  <CardTitulo>{item.nome}</CardTitulo>
                  <CardCategoria>{item.categoria}</CardCategoria>
                  <CardNota>⭐⭐⭐⭐⭐ ({item.avaliacoes})</CardNota>
                  {item.preco && <CardPreco>R$ {item.preco}</CardPreco>}
                  <CardBotoes>
                    <BotaoCard onClick={() => navigate(`/detalhes/${item.id}`)}>
                      Ver Detalhes
                    </BotaoCard>
                    {item.tipo === "servico" && (
                      <BotaoCard onClick={() => navigate(`/agendar/${item.id}`)}>
                        Agendar
                      </BotaoCard>
                    )}
                    <BotaoCard onClick={() => {/* lógica para remover */}}>
                      ❤️
                    </BotaoCard>
                  </CardBotoes>
                </CardContent>
              </Card>
            ))}
          </CardContainer>
        )}
      </main>

      <Footer>
        <Direitos>
          <p>Todos os direitos reservados. @2025 por BeYou</p>
        </Direitos>
      </Footer>
    </Background>
  );
}

export default FAvoritosPerfil;
