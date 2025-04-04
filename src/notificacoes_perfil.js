import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Background, Header, LogoContainer, ImgLogo, Tres, Perfil, ImgPerfil,
  PerfilLink, BotaoPerfil, MenuIcon, MenuIconLink, FecharMenu, Title, Footer, Direitos,
  NotificationContainer, NotificationItem, ClearAllButton, DateSeparator,
  NotificationAvatar, NotificationContent, NotificationText, NotificationTime,
  MarkAsReadButton
} from './components/notificacoesestrutura';

function NotificacoesPerfil() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [filtro, setFiltro] = useState("todos");
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState({
    hoje: [
      { id: 1, tipo: "agendamento", icone: "📅", img: "/img/user1.jpeg", titulo: "Agendamento Confirmado", text: "Seu horário com a Marina (Cabeleireira) foi confirmado para amanhã às 14h.", time: "1h atrás", lida: false },
      { id: 2, tipo: "pedido", icone: "📦", img: "/img/user2.webp", titulo: "Pedido Enviado", text: "Seu pedido foi enviado! A previsão de entrega é 04/04.", time: "3h atrás", lida: false }
    ],
    semana: [
      { id: 3, tipo: "promocao", icone: "🎉", img: "/img/user3.jpg", titulo: "Semana do Cliente", text: "Serviços com até 50% de desconto!", time: "2 dias atrás", lida: false },
      { id: 4, tipo: "recomendacao", icone: "✨", img: "/img/user4.jpeg", titulo: "Novidades para você", text: "Óleo capilar e esfoliante facial, baseados nos seus gostos!", time: "5 dias atrás", lida: false },
      { id: 5, tipo: "social", icone: "❤️", img: "/img/user5.jpg", titulo: "Interação Social", text: "Mariana também favoritou o Shampoo Detox que você curtiu!", time: "5 dias atrás", lida: false }
    ]
  });

  const tipos = {
    todos: "Todos",
    promocao: "Promoções & Ofertas",
    agendamento: "Agendamentos",
    pedido: "Status de Pedido",
    recomendacao: "Recomendações",
    social: "Sociais"
  };

  const marcarTodasComoLidas = () => {
    const atualizadas = {};
    for (const categoria in notifications) {
      atualizadas[categoria] = notifications[categoria].map(n => ({ ...n, lida: true }));
    }
    setNotifications(atualizadas);
  };

  const marcarComoLida = (id) => {
    const atualizadas = {};
    for (const cat in notifications) {
      atualizadas[cat] = notifications[cat].map(n =>
        n.id === id ? { ...n, lida: true } : n
      );
    }
    setNotifications(atualizadas);
  };

  const filtrarNotificacoes = (notificacoes) => {
    if (filtro === "todos") return notificacoes;
    return notificacoes.filter(n => n.tipo === filtro);
  };

  const renderCategoria = (titulo, notificacoes) => {
    const filtradas = filtrarNotificacoes(notificacoes);
    if (filtradas.length === 0) return null;

    return (
      <>
        <DateSeparator>{titulo}</DateSeparator>
        {filtradas.map(notif => (
          <NotificationItem key={notif.id} read={notif.lida}>
            <NotificationAvatar src={notif.img} />
            <NotificationContent>
              <NotificationText><strong>{notif.icone} {notif.titulo}</strong></NotificationText>
              <NotificationText>{notif.text}</NotificationText>
              <NotificationTime>{notif.time}</NotificationTime>
            </NotificationContent>
            {!notif.lida && (
              <MarkAsReadButton onClick={() => marcarComoLida(notif.id)}>
                Marcar como lida
              </MarkAsReadButton>
            )}
          </NotificationItem>
        ))}
      </>
    );
  };

  const todasNotificacoesVazias = Object.values(notifications).every(arr => arr.length === 0);

  return (
    <Background>
      {/* Header */}
      <Header>
        <LogoContainer>
          <ImgLogo onClick={() => window.location.reload()} src="/img/new_logo.jpg" />
        </LogoContainer>
        <Tres onClick={() => setMenuVisible(!menuVisible)}>&#9776;</Tres>
        <Perfil>
          <PerfilLink onClick={() => navigate("/MeuPerfil")}>
            <ImgPerfil src="/img/perfil.eu.jpg" />
          </PerfilLink>
        </Perfil>
        <BotaoPerfil onClick={() => navigate("/MeuPerfil")}>Seu perfil</BotaoPerfil>
      </Header>

      {/* Menu lateral */}
      <MenuIcon menuVisible={menuVisible}>
        <FecharMenu onClick={() => setMenuVisible(false)}>×</FecharMenu>
        <MenuIconLink onClick={() => navigate("/")}>Início</MenuIconLink>
        <MenuIconLink onClick={() => navigate("/Carrinho")}>Carrinho</MenuIconLink>
        <MenuIconLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuIconLink>
        <MenuIconLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuIconLink>
        <MenuIconLink onClick={() => navigate("/MinhaLoja")}>Minha Loja</MenuIconLink>
      </MenuIcon>

      {/* Conteúdo principal */}
      <main>
        <Title>Notificações ✨</Title>

        <div style={{ margin: '0 20px' }}>
          <MarkAsReadButton onClick={marcarTodasComoLidas}>Marcar todas como lidas</MarkAsReadButton>

          <div style={{ marginTop: '10px' }}>
            <label htmlFor="filtro" style={{ marginRight: '10px' }}>Filtrar por tipo 🧼:</label>
            <select id="filtro" onChange={(e) => setFiltro(e.target.value)} value={filtro}>
              {Object.entries(tipos).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Área das notificações */}
        <NotificationContainer>
          {todasNotificacoesVazias ? (
            <div style={{ textAlign: 'center', marginTop: '40px', opacity: 0.8 }}>
              <img src="/img/vazio.png" alt="Sem notificações" style={{ width: '100px' }} />
              <p>✨ Você está por dentro de tudo! Assim que houver novidades, a gente te avisa por aqui 💖</p>
            </div>
          ) : (
            <>
              {renderCategoria("Hoje", notifications.hoje)}
              {renderCategoria("Essa Semana", notifications.semana)}
            </>
          )}
        </NotificationContainer>

        {/* Limpar tudo */}
        <ClearAllButton onClick={() => setNotifications({ hoje: [], semana: [] })}>
          Limpar tudo
        </ClearAllButton>
      </main>

      {/* Rodapé */}
      <Footer>
        <Direitos>
          <p>Todos os direitos reservados. @2025 por BeYou</p>
        </Direitos>
      </Footer>
    </Background>
  );
}

export default NotificacoesPerfil;
