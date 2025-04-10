import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import {
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
  Label,
  Input,
  TextArea,
  BotaoEnviar,
  BotaoExcluir,
  Footer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Direitos,
  Logo,
  TitleFooter,
  Texto,
  Titulo,
  Opcoes,
  Descricao,
  MeusDados,
  DadosContainer
} from "./components/dadosperfilestrutura";


function DadosPessoais() {
  const [visivel, setVisivel] = useState(false);
  return (
    <Opcoes onClick={() => setVisivel(!visivel)}>
      <Descricao visivel={visivel}>
        <h2>Dados Pessoais</h2>

        <Label htmlFor="nomeCompleto">Nome completo</Label>
        <Input type="text" id="nomeCompleto" />

        <Label htmlFor="nomeSocial">Nome social</Label>
        <Input type="text" id="nomeSocial" />

        <Label htmlFor="nascimento">Data de nascimento</Label>
        <Input type="date" id="nascimento" />

        <Label htmlFor="genero">Gênero</Label>
        <Input type="text" id="genero" />

        <Label htmlFor="cpf">CPF / CNPJ</Label>
        <Input type="text" id="cpf" />

        <Label htmlFor="rg">RG</Label>
        <Input type="text" id="rg" />

        <Label htmlFor="fotoPerfil">Foto de perfil</Label>
        <Input type="file" id="fotoPerfil" />
      </Descricao>
    </Opcoes>
  );
}

function Contato() {
  const [visivel, setVisivel] = useState(false);
  return (
    <Opcoes onClick={() => setVisivel(!visivel)}>
      <Descricao visivel={visivel}>
        <h2>Contato</h2>

        <Label htmlFor="emailPrincipal">E-mail principal</Label>
        <Input type="email" id="emailPrincipal" />

        <Label htmlFor="emailAlternativo">E-mail alternativo</Label>
        <Input type="email" id="emailAlternativo" />

        <Label htmlFor="celular">Telefone celular</Label>
        <Input type="tel" id="celular" />

        <Label htmlFor="fixo">Telefone fixo</Label>
        <Input type="tel" id="fixo" />

        <Label htmlFor="whatsapp">WhatsApp</Label>
        <Input type="tel" id="whatsapp" />
      </Descricao>
    </Opcoes>
  );
}

function Endereco() {
  const [visivel, setVisivel] = useState(false);
  return (
    <Opcoes onClick={() => setVisivel(!visivel)}>
      <Descricao visivel={visivel}>
        <h2>Endereço</h2>

        <Label htmlFor="enderecoPrincipal">Endereço principal</Label>
        <Input type="text" id="enderecoPrincipal" />

        <Label htmlFor="multiplosEnderecos">Múltiplos endereços</Label>
        <TextArea id="multiplosEnderecos" placeholder="Insira outros endereços, separados por vírgula" />

        <Label htmlFor="enderecoPadrao">
          <Input type="checkbox" id="enderecoPadrao" /> Marcar este como padrão
        </Label>

        <Label htmlFor="cep">CEP</Label>
        <Input type="text" id="cep" />

        <Label htmlFor="bairro">Bairro</Label>
        <Input type="text" id="bairro" />

        <Label htmlFor="cidade">Cidade</Label>
        <Input type="text" id="cidade" />

        <Label htmlFor="estado">Estado</Label>
        <Input type="text" id="estado" />

        <Label htmlFor="pais">País</Label>
        <Input type="text" id="pais" />
      </Descricao>
    </Opcoes>
  );
}

function SegurancaDaConta() {
  const [visivel, setVisivel] = useState(false);
  return (
    <Opcoes onClick={() => setVisivel(!visivel)}>
      <Descricao visivel={visivel}>
        <BotaoEnviar type="button">Alterar senha</BotaoEnviar>
        <BotaoEnviar type="button">Confirmar e-mail</BotaoEnviar>
        <BotaoEnviar type="button">Ativar autenticação em dois fatores</BotaoEnviar>
        <p>Histórico de login: <em>último acesso em 10/04/2025</em></p>
        <p>Dispositivos conectados: <em>2 dispositivos ativos</em></p>
      </Descricao>
    </Opcoes>
  );
}

function ExcluirConta() {
  const [visivel, setVisivel] = useState(false);
  return (
    <Opcoes onClick={() => setVisivel(!visivel)}>
      <Descricao visivel={visivel}>
        <h2>Excluir Conta</h2>
        <p>Solicitação de exclusão de dados pessoais conforme a LGPD.</p>

        <Label htmlFor="senhaConfirmacao">Confirme sua senha para continuar:</Label>
        <Input type="password" id="senhaConfirmacao" />

        <Label htmlFor="motivoSaida">Por que você está saindo?</Label>
        <TextArea id="motivoSaida" placeholder="Deixe seu feedback (opcional)" />

        <BotaoExcluir type="submit">Excluir minha conta</BotaoExcluir>
      </Descricao>
    </Opcoes>
  );
}

function TelaMeusDados() {
  return (
    <DadosContainer>
      <DadosPessoais />
      <Contato />
      <Endereco />
      <SegurancaDaConta />
      <ExcluirConta />
    </DadosContainer> 
      );
}

function MeuPerfil() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const reloadPage = (event) => {
    event.preventDefault();
    navigate('/PaginaInicial');
  };

  return (
    <Background>
      <Header>
        <LogoContainer>
          <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
        </LogoContainer>

        <Menu>
          <MenuLink onClick={() => navigate("/PaginaInicial")}>Inicio</MenuLink>
          <MenuLink onClick={() => navigate("/Carrinho")}>Meu Carrinho</MenuLink>
          <MenuLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuLink>
          <MenuLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuLink>
          <MenuLink onClick={() => navigate("/Favoritos_perfil")}>Favoritos</MenuLink>
        </Menu>

        <SearchBar type="text" placeholder="Busque por item ou loja" />

        <Icons>
          <Perfil>
            <PerfilLink onClick={() => navigate("/MeuPerfil")}>
              <User className="icone" />
            </PerfilLink>
          </Perfil>

          <Noticacao>
            <NoticacaoLink onClick={() => navigate("/notificacoes_perfil")}>
              <Bell className="icone" />
            </NoticacaoLink>
          </Noticacao>

          <Sair>
            <BotaoSair onClick={handleLogout}>
              <LogOut className="icone" />
            </BotaoSair>
          </Sair>
        </Icons>
      </Header>

      <main>
        <Titulo>Meus Dados:</Titulo>
        <MeusDados />
      </main>

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
            <br />
            <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>
          </Direitos>

          <Links>
            <FooterLink>Termos e Condições de Uso</FooterLink> |{" "}
            <FooterLink>Codigo de Conduta</FooterLink> |{" "}
            <FooterLink>Privacidade</FooterLink> |{" "}
            <FooterLink>Dicas de Segurança</FooterLink>
          </Links>
        </ConteudoFooter>
      </Footer>
    </Background>
  );
}

export default MeuPerfil;
