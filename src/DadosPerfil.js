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
  
  Secao,
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
  Titulo
} from "./components/dadosperfilestrutura";

function DadosPessoais() {
    return (
      <section>
        <h2>Dados Pessoais</h2>
        <label>Nome completo</label>
        <input type="text" />
  
        <label>Nome social</label>
        <input type="text" />
  
        <label>Data de nascimento</label>
        <input type="date" />
  
        <label>Gênero</label>
        <input type="text" />
  
        <label>CPF / CNPJ</label>
        <input type="text" />
  
        <label>RG</label>
        <input type="text" />
  
        <label>Foto de perfil</label>
        <input type="file" />
      </section>
    );
  }
  
  function Contato() {
    return (
      <section>
        <h2>Contato</h2>
        <label>E-mail principal</label>
        <input type="email" />
  
        <label>E-mail alternativo</label>
        <input type="email" />
  
        <label>Telefone celular</label>
        <input type="tel" />
  
        <label>Telefone fixo</label>
        <input type="tel" />
  
        <label>WhatsApp</label>
        <input type="tel" />
      </section>
    );
  }
  
  function Endereco() {
    return (
      <section>
        <h2>Endereço</h2>
        <label>Endereço principal</label>
        <input type="text" />
  
        <label>Múltiplos endereços</label>
        <textarea placeholder="Insira outros endereços, separados por vírgula" />
  
        <label>Endereço padrão</label>
        <input type="checkbox" /> Marcar este como padrão
  
        <label>CEP</label>
        <input type="text" />
  
        <label>Bairro</label>
        <input type="text" />
  
        <label>Cidade</label>
        <input type="text" />
  
        <label>Estado</label>
        <input type="text" />
  
        <label>País</label>
        <input type="text" />
      </section>
    );
  }
  
  function SegurancaDaConta() {
    return (
      <section>
        <h2>Segurança da Conta</h2>
        <button>Alterar senha</button>
        <button>Confirmar e-mail</button>
        <button>Ativar autenticação em dois fatores</button>
        <p>Histórico de login: <em>último acesso em 10/04/2025</em></p>
        <p>Dispositivos conectados: <em>2 dispositivos ativos</em></p>
      </section>
    );
  }
  
  function ExcluirConta() {
    return (
      <section>
        <h2>Excluir Conta</h2>
        <p>Solicitação de exclusão de dados pessoais conforme a LGPD.</p>
        <label>Confirme sua senha para continuar:</label>
        <input type="password" />
        <label>Por que você está saindo?</label>
        <textarea placeholder="Deixe seu feedback (opcional)" />
        <button style={{ backgroundColor: "#d9534f", color: "white" }}>Excluir minha conta</button>
      </section>
    );
  }
  
 function MeusDados() {
    return (
      <div className="p-4 space-y-8">
        <DadosPessoais />
        <Contato />
        <Endereco />
        <SegurancaDaConta />
        <ExcluirConta />
      </div>
    );
  }
  

function MeuPerfil() {
    const handleLogout = () => {
        navigate("/login"); 
      };
  
    // linkar paginas
    const navigate = useNavigate(); 
  
    // levar ate a pagina inicial
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

                    <MenuLink onClick={() => navigate("/FAvoritos_perfil")}>Favoritos</MenuLink>

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
                            <FooterLink><FaFacebookF/></FooterLink>
                            <FooterLink><FaTwitter/></FooterLink>
                            <FooterLink><FaYoutube/></FooterLink>
                            <FooterLink><FaInstagram/></FooterLink>
                        </SocialIcons>
                    </Coluna>
                    
                    <Direitos>

                        <Logo src="/img/new_logo.jpg" alt="BeYou Logo" />
                        
                        <Texto>© Copyright 2025 - BeYou. Todos os direitos reservados.</Texto>

                        <br></br>
                        
                        <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>

                    </Direitos>

                    <Links>
                        <FooterLink>Termos e Condições de Uso</FooterLink> | <FooterLink>Codigo de Conduta</FooterLink> | <FooterLink>Privacidade</FooterLink> | <FooterLink>Dicas de Segurança</FooterLink>
                    </Links>

                </ConteudoFooter>

            </Footer>
        </Background>
    );
}

export default MeuPerfil;
