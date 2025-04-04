import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Formulario,
  Title,
  BotaoCadastrar
} from "./components/bemvindoestrutura"; // Importando do mesmo arquivo de estrutura

const BemVindo = () => {
  const navigate = useNavigate();

  return (
    <BackgroundImage>
      <Formulario>
        <Title>Sobre Nós</Title>
        <p>
          A Be You nasceu para simplificar a conexão entre clientes e estabelecimentos de beleza. <br></br> <br></br> Nossa plataforma centraliza serviços, preços e promoções em um só lugar, facilitando agendamentos e otimizando a experiência dos usuários. <br></br><br></br>
          Para os salões, oferecemos uma ferramenta completa para gerenciar agendas, divulgar ofertas e atrair mais clientes. <br></br><br></br>Para os consumidores, garantimos acesso rápido a opções de beleza de qualidade, tornando o processo mais ágil e eficiente.
          <br></br> <br></br>
          Be You: conectando beleza e praticidade em um só clique!
        </p>
        
        <BotaoCadastrar onClick={() => navigate("/cadastro")}>
          Cadastro de Usuário
        </BotaoCadastrar>
        
        <BotaoCadastrar onClick={() => navigate("/cadastroloja")}>
          Cadastro de Loja
        </BotaoCadastrar>
      </Formulario>
    </BackgroundImage>
  );
};

export default BemVindo;