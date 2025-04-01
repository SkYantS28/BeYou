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
    Footer,
    Direitos,
    NotificationContainer,
    NotificationCategory,
    NotificationItem,
    NotificationContent,
    NotificationAvatar,
    NotificationText,
    NotificationTime
} from "./components/notificacoesestrutura";

function Notificacoes() {
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);

    // Lista de notificações organizadas por categoria
    const notifications = {
        hoje: [
            { id: 1, img: "/img/user1.jpg", text: "Maria curtiu sua publicação.", time: "2h atrás" },
            { id: 2, img: "/img/user2.jpg", text: "Pedro comentou: 'Ótimo serviço!'", time: "3h atrás" }
        ],
        semana: [
            { id: 3, img: "/img/user3.jpg", text: "Ana começou a seguir você.", time: "2 dias atrás" },
            { id: 4, img: "/img/user4.jpg", text: "Novo agendamento confirmado.", time: "5 dias atrás" }
        ],
        anteriores: [
            { id: 5, img: "/img/user5.jpg", text: "Promoção especial disponível para você!", time: "1 semana atrás" }
        ]
    };

    return (
        <Background>
            <Header>
                <LogoContainer>
                    <ImgLogo onClick={() => window.location.reload()} src="/img/new_logo.jpg" alt="Logo" />
                </LogoContainer>

                <Tres onClick={() => setMenuVisible(!menuVisible)}>
                    &#9776;
                </Tres>

                <Perfil>
                    <PerfilLink onClick={() => navigate("/MeuPerfil")}>
                        <ImgPerfil src="/img/perfil.eu.jpg" alt="Foto de perfil" />
                    </PerfilLink>
                </Perfil>

                <BotaoPerfil onClick={() => navigate("/MeuPerfil")}>Seu perfil</BotaoPerfil>
            </Header>

            <MenuIcon menuVisible={menuVisible}>
                <MenuIconLink onClick={() => navigate("/")}>Início</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Carrinho")}>Carrinho</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/MinhaLoja")}>Minha Loja</MenuIconLink>
            </MenuIcon>

            <main>
                <Title>Notificações</Title>
                <NotificationContainer>
                    {Object.keys(notifications).map((categoria) => (
                        <NotificationCategory key={categoria}>
                            <h3>
                                {categoria === "hoje" ? "Hoje" : categoria === "semana" ? "Esta Semana" : "Anteriores"}
                            </h3>
                            {notifications[categoria].map((notif) => (
                                <NotificationItem key={notif.id}>
                                    <NotificationAvatar src={notif.img} alt="Avatar" />
                                    <NotificationContent>
                                        <NotificationText>{notif.text}</NotificationText>
                                        <NotificationTime>{notif.time}</NotificationTime>
                                    </NotificationContent>
                                </NotificationItem>
                            ))}
                        </NotificationCategory>
                    ))}
                </NotificationContainer>
            </main>

            <Footer>
                <Direitos>
                    <p>Todos os direitos reservados. @2025 por BeYou</p>
                </Direitos>
            </Footer>
        </Background>
    );
}

export default Notificacoes;