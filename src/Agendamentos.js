import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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

    Title,
  
    Footer,
    ConteudoFooter,
    Coluna,
    SocialIcons,
    FooterLink,
    Links,
    Logo,
    Direitos,
    TitleFooter,
    Texto
} from "./components/agendamentosestrutura";

function Agendamentos() {
    const handleLogout = () => {
        navigate("/bemvindo"); 
      };
  
    // linkar paginas
    const navigate = useNavigate(); 
  
    // levar ate a pagina inicial
    const reloadPage = (event) => {
        event.preventDefault();
        navigate('/PaginaInicial');
    };

        
    const appointments = {
        "2025-04-05": [
        { store: "Loja A", service: "Corte de Cabelo", time: "10:00", price: "R$ 50,00" },
        { store: "Loja B", service: "Manicure", time: "14:00", price: "R$ 30,00" },
        ],
        "2025-04-06": [
        { store: "Loja C", service: "Massagem", time: "16:00", price: "R$ 120,00" },
        ],
    };

    const [selectedDate, setSelectedDate] = useState(new Date());
    
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const dayAppointments = appointments[formattedDate] || [];
  
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


export default Agendamentos();
