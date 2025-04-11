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
    FecharMenu,
    Title,
    Footer,
    Direitos,
    Texto,
    Titulo,
    Opcoes,
    Descricao,
    MeusDados,
    DadosContainer,
    TituloOpcoes,
    Label,
    Input,
    TextArea,
    BotaoEnviar,
    BotaoExcluir
} from "./components/dadosperfilestrutura";

function DadosPessoais() {
    const [visivel, setVisivel] = useState(false);
    return (
      <Opcoes onClick={() => setVisivel(!visivel)}>
        <TituloOpcoes>Dados Pessoais</TituloOpcoes>
        <Descricao visivel={visivel}>
          <b>📝 Nome completo:</b> Sky Oliveira da Silva<br />
          <b>🌈 Nome social:</b> Sky<br />
          <b>🎂 Data de nascimento:</b> 12/03/2005<br />
          <b>🚺 Gênero:</b> Feminino<br /><br />
  
          <b>🆔 CPF / CNPJ:</b> 123.456.789-00<br />
          <b>🪪 RG:</b> 12.345.678-9<br />
          <b>📸 Foto de perfil:</b> sky_foto_perfil.jpg
        </Descricao>
      </Opcoes>
    );
  }

function Contato() {
    const [visivel, setVisivel] = useState(false);
    return (
        <Opcoes onClick={() => setVisivel(!visivel)}>
            <TituloOpcoes>Contato</TituloOpcoes>
            <Descricao visivel={visivel}>
                <b>📧 E-mail principal:</b> usuaria@email.com<br />
                <b>📨 E-mail alternativo:</b> usuaria.alternativo@email.com<br /><br />

                <b>📱 Telefone celular:</b> (11) 91234-5678<br />
                <b>☎️ Telefone fixo:</b> (11) 3456-7890<br />
                <b>💬 WhatsApp:</b> (11) 91234-5678
            </Descricao>
        </Opcoes>
    );
}


function Endereco() {
    const [visivel, setVisivel] = useState(false);
    return (
      <Opcoes onClick={() => setVisivel(!visivel)}>
        <TituloOpcoes>Endereço</TituloOpcoes>
        <Descricao visivel={visivel}>
          <b>🏠 Endereço principal:</b> Rua das Flores, 123<br />
          <b>📍 Múltiplos endereços:</b> Av. Central, 456 – Sala 7, Rua Secundária, 789<br />
          <b>⭐ Endereço padrão:</b> Sim<br /><br />
  
          <b>🔢 CEP:</b> 01234-567<br />
          <b>🏙️ Bairro:</b> Jardim das Rosas<br />
          <b>🌆 Cidade:</b> São Paulo<br />
          <b>🗺️ Estado:</b> SP<br />
          <b>🌍 País:</b> Brasil
        </Descricao>
      </Opcoes>
    );
  }
  
  
  function SegurancaDaConta() {
    const [visivel, setVisivel] = useState(false);
    const [mostrarFormSenha, setMostrarFormSenha] = useState(false);
  
    return (
      <Opcoes onClick={() => setVisivel(!visivel)}>
        <TituloOpcoes>Segurança da Conta</TituloOpcoes>
        <Descricao visivel={visivel}>
          <BotaoEnviar type="button" onClick={() => setMostrarFormSenha(!mostrarFormSenha)}>
            🔒 Alterar senha
          </BotaoEnviar>
  
          {mostrarFormSenha && (
            <>
              <Label htmlFor="senhaAtual">Senha atual</Label>
              <Input type="password" id="senhaAtual" name="senhaAtual" />
  
              <Label htmlFor="novaSenha">Nova senha</Label>
              <Input type="password" id="novaSenha" name="novaSenha" />
  
              <Label htmlFor="confirmarSenha">Confirmar nova senha</Label>
              <Input type="password" id="confirmarSenha" name="confirmarSenha" />
  
              <BotaoEnviar type="submit">Salvar nova senha</BotaoEnviar>
            </>
          )}
  
          <br />
          <BotaoEnviar type="button">📧 Confirmar e-mail</BotaoEnviar><br />
          <BotaoEnviar type="button">🔐 Ativar autenticação em dois fatores</BotaoEnviar><br /><br />
  
          <b>📅 Histórico de login:</b> <em>último acesso em 10/04/2025</em><br />
          <b>💻 Dispositivos conectados:</b> <em>2 dispositivos ativos</em>
        </Descricao>
      </Opcoes>
    );
  }
  
  function ExcluirConta() {
    const [visivel, setVisivel] = useState(false);
    return (
      <Opcoes onClick={() => setVisivel(!visivel)}>
        <TituloOpcoes>Excluir Conta</TituloOpcoes>
        <Descricao visivel={visivel}>
          <p>🗑️ Solicitação de exclusão de dados pessoais conforme a <b>LGPD</b>.</p><br />
  
          <Label htmlFor="senhaConfirmacao">🔒 Confirme sua senha para continuar:</Label>
          <Input type="password" id="senhaConfirmacao" name="senhaConfirmacao" /><br />
  
          <Label htmlFor="motivoSaida">💬 Por que você está saindo?</Label>
          <TextArea
            id="motivoSaida"
            name="motivoSaida"
            placeholder="Deixe seu feedback (opcional)"
          /><br />
  
          <BotaoExcluir type="submit">🚨 Excluir minha conta</BotaoExcluir>
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
    const [menuVisible, setMenuVisible] = useState(false);
  
    // linkar paginas
    const navigate = useNavigate(); 
  
    // abrir e fechar menu
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
      // recarregar pagina
    const reloadPage = (event) => {
        event.preventDefault();
        window.location.reload();
    };
  
    return (
        <Background>
            <Header>
                <LogoContainer>
                    <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
                </LogoContainer>
          
                <Tres onClick={toggleMenu}>
                    &#9776;
                </Tres>
          
                <Perfil>
                    <PerfilLink onClick={() => navigate("/MeuPerfil")}>
                        <ImgPerfil src="/img/perfil.eu.jpg" />
                    </PerfilLink>
                </Perfil>
          
                <BotaoPerfil onClick={() => navigate("/MeuPerfil")}>Seu perfil</BotaoPerfil>
  
            </Header>

            <MenuIcon menuVisible={menuVisible}>
                <MenuIconLink href="javascript:void(0)" className="FecharMenu" onClick={toggleMenu}>
                &times;
                </MenuIconLink>
                <MenuIconLink href="#imagens_passar">Inicio</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Carrinho")}>Carrinho</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/MinhaLoja")}>Minha Loja</MenuIconLink>
            </MenuIcon>

            <main>
                <TelaMeusDados/>
            </main>

            <Footer>
                <Direitos>
                    <p>Todos os direitos reservados. @2025 por BeYou</p>
                </Direitos>
            </Footer>


        </Background>

    );
}

export default MeuPerfil;