

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Adicionado

import { Background, 
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
        NotificationItem, 
        ClearAllButton, 
        NotificationCategory, 
        NotificationAvatar, 
        NotificationContent, 
        NotificationText, 
        NotificationTime 
    } from './components/notificacoesestrutura';

function NotificacoesPerfil() {
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate(); // Adicionado

    const [notifications, setNotifications] = useState({
        hoje: [
            { id: 1, img: "/img/user1.jpg", text: "Seu agendamento para corte de cabelo foi confirmado!", time: "1h atrás" },
            { id: 2, img: "/img/user2.jpg", text: "Seu pedido de Shampoo Hidratante foi enviado.", time: "3h atrás" }
        ],
        semana: [
            { id: 3, img: "/img/user3.jpg", text: "Ana começou a seguir sua loja.", time: "2 dias atrás" },
            { id: 4, img: "/img/user4.jpg", text: "Promoção especial no seu produto favorito!", time: "5 dias atrás" }
        ],
        anteriores: [
            { id: 5, img: "/img/user5.jpg", text: "Novo serviço disponível: Massagem Relaxante!", time: "1 semana atrás" }
        ]
    });

    const clearNotifications = () => {
        setNotifications({
            hoje: [],
            semana: [],
            anteriores: []
        });
    };

    return (
        <Background>
            <Header>
                <LogoContainer>
                    <ImgLogo onClick={() => window.location.reload()} src="/img/new_logo.jpg" alt="Logo" />
                </LogoContainer>
                <Tres onClick={() => setMenuVisible(!menuVisible)}>&#9776;</Tres>
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
                    {notifications.hoje.length > 0 && (
                        <>
                            <NotificationCategory>Hoje</NotificationCategory>
                            {notifications.hoje.map((notif) => (
                                <NotificationItem key={notif.id}>
                                    <NotificationAvatar src={notif.img} alt="Avatar" />
                                    <NotificationContent>
                                        <NotificationText>{notif.text}</NotificationText>
                                        <NotificationTime>{notif.time}</NotificationTime>
                                    </NotificationContent>
                                </NotificationItem>
                            ))}
                        </>
                    )}

                    {notifications.semana.length > 0 && (
                        <>
                            <NotificationCategory>Semana</NotificationCategory>
                            {notifications.semana.map((notif) => (
                                <NotificationItem key={notif.id}>
                                    <NotificationAvatar src={notif.img} alt="Avatar" />
                                    <NotificationContent>
                                        <NotificationText>{notif.text}</NotificationText>
                                        <NotificationTime>{notif.time}</NotificationTime>
                                    </NotificationContent>
                                </NotificationItem>
                            ))}
                        </>
                    )}

                    {notifications.anteriores.length > 0 && (
                        <>
                            <NotificationCategory>Anteriores</NotificationCategory>
                            {notifications.anteriores.map((notif) => (
                                <NotificationItem key={notif.id}>
                                    <NotificationAvatar src={notif.img} alt="Avatar" />
                                    <NotificationContent>
                                        <NotificationText>{notif.text}</NotificationText>
                                        <NotificationTime>{notif.time}</NotificationTime>
                                    </NotificationContent>
                                </NotificationItem>
                            ))}
                        </>
                    )}
                </NotificationContainer>

                <ClearAllButton onClick={clearNotifications}>Limpar tudo</ClearAllButton>
            </main>

            <Footer>
                <Direitos>
                    <p>Todos os direitos reservados. @2025 por BeYou</p>
                </Direitos>
            </Footer>
        </Background>
    );
}


export default NotificacoesPerfil;
