import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import {
  Header,
  Footer,
  ConteudoFooter,
  FooterLink,
  Coluna,
  SocialIcons,
  Links,
  Direitos,
  Texto,
  Logo,
  TitleFooter
} from "./components/pesquisarestrutura";
import styled from "styled-components";

// Dados das categorias
const categorias = [
  { nome: "Sobrancelha", imagem: "/img/categoria_sobrancelha.jpg" },
  { nome: "Unhas", imagem: "/img/categoria_unhas.avif" },
  { nome: "Coloração", imagem: "/img/categoria_coloracao.webp" },
  { nome: "Tranças", imagem: "/img/categoria_trancas.webp" },
  { nome: "Cilios", imagem: "/img/categoria_cilios.jpg" },
  { nome: "Depilação", imagem: "/img/categoria_depilacao.jpg" },
  { nome: "Massagem", imagem: "/img/categoria_massagem.jpg" },
  { nome: "Luzes", imagem: "/img/categoria_luzes.webp" },
  { nome: "Escova", imagem: "/img/categoria_escova.jpg" },
  { nome: "Maquiagem", imagem: "/img/categoria_make.jpg" },
  { nome: "Micropigmentação", imagem: "/img/categoria_micropigmentacao.avif" },
  { nome: "Limpeza", imagem: "/img/categoria_limpeza.jpg" },
  { nome: "Corte", imagem: "/img/categoria_corte.jpeg" },
  { nome: "Hidratação", imagem: "/img/categoria_hidratacao.webp" },
  { nome: "Mega Hair", imagem: "/img/categoria_mega.webp" },
];

const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Titulo = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #6c4539;
  text-align: center;
`;

const FiltroSelect = styled.select`
  padding: 10px 15px;
  border-radius: 30px;
  border: 2px solid #e6b2d4;
  outline: none;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 40px;
  display: block;
  font-size: 16px;
  background-color: white;
  color: #6c4539;

  &:focus {
    border-color: #d48abc;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  border: 2px solid #e6b2d4;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
  cursor: pointer;
  background-color: white;

  &:hover {
    transform: scale(1.05);
  }
`;

const Imagem = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  aspect-ratio: 16/9;
`;

const Nome = styled.p`
  text-align: center;
  font-size: 18px;
  color: #6c4539;
  padding: 15px;
  font-weight: bold;
`;

const Pesquisar = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  const categoriasFiltradas = categoriaSelecionada
    ? categorias.filter((c) => c.nome === categoriaSelecionada)
    : categorias;

  return (
    <>
      <Header>
        <h1>BeYou</h1>
      </Header>

      <Container>
        <Titulo>Selecione uma categoria</Titulo>
        <FiltroSelect
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
        >
          <option value="">Todas as categorias</option>
          {categorias.map((cat, i) => (
            <option key={i} value={cat.nome}>
              {cat.nome}
            </option>
          ))}
        </FiltroSelect>

        <Grid>
          {categoriasFiltradas.map((cat, i) => (
            <Card key={i}>
              <Imagem src={cat.imagem} alt={cat.nome} />
              <Nome>{cat.nome}</Nome>
            </Card>
          ))}
        </Grid>
      </Container>

      <Footer>
        <ConteudoFooter>
          <Coluna>
            <TitleFooter>BeYou</TitleFooter>
            <FooterLink>Site Institucional</FooterLink>
            <FooterLink>Fale Conosco</FooterLink>
            <FooterLink>Conta e Segurança</FooterLink>
            <FooterLink>Carreiras</FooterLink>
            <FooterLink>Entregadores</FooterLink>
          </Coluna>

          <Coluna>
            <TitleFooter>Descubra</TitleFooter>
            <FooterLink>Cadastre sua loja</FooterLink>
            <FooterLink>Beyou Shop</FooterLink>
            <FooterLink>BeYou Empresas</FooterLink>
            <FooterLink>Blog BeYou Empresas</FooterLink>
          </Coluna>

          <Coluna>
            <TitleFooter>Social</TitleFooter>
            <SocialIcons>
              <FooterLink><FaFacebookF /></FooterLink>
              <FooterLink><FaTwitter /></FooterLink>
              <FooterLink><FaYoutube /></FooterLink>
              <FooterLink><FaInstagram /></FooterLink>
            </SocialIcons>
          </Coluna>

          <Direitos>
            <Logo src="/img/new_logo.jpg" alt="BeYou Logo" />
            <Texto>© Copyright 2025 - BeYou. Todos os direitos reservados.</Texto>
            <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>
          </Direitos>

          <Links>
            <FooterLink>Termos e Condições de Uso</FooterLink>
            <FooterLink>Código de Conduta</FooterLink>
            <FooterLink>Privacidade</FooterLink>
            <FooterLink>Dicas de Segurança</FooterLink>
          </Links>
        </ConteudoFooter>
      </Footer>
    </>
  );
};

export default Pesquisar;
