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
    SelecionarItens,
    LabelContainer,
    Preco,
    FinalizarCompra,
    Produtos,
    Loja,
    Item,
    Span,
    SelecionarLoja,
    ItemCheckbox
} from "./components/carrinhoestrutura";

function Carrinho() {
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

    const [selecionarTodos, setSelecionarTodos] = useState(false);
    const [lojas, setLojas] = useState([
        {
            nome: "Bellus Esmaltaria",
            selecionada: false,
            itens: [
                { nome: "Esmalte em Gel - Preto", preco: 10, selecionado: false },
                { nome: "Esmalte em Gel - Azul", preco: 10, selecionado: false },
            ],
        },
        {
            nome: "Marcia Travessoni",
            selecionada: false,
            itens: [{ nome: "Creme de Pentear - Bio Extratus", preco: 30, selecionado: false }],
        },
        {
            nome: "Monisatti",
            selecionada: false,
            itens: [{ nome: "Máscara Capilar - Eudora", preco: 65, selecionado: false }],
        },
    ]);

    const handleSelecionarTodos = () => {
        const novoEstado = !selecionarTodos;
        setSelecionarTodos(novoEstado);
        setLojas(lojas.map(loja => ({
            ...loja,
            selecionada: novoEstado,
            itens: loja.itens.map(item => ({ ...item, selecionado: novoEstado }))
        })));
    };

    const handleSelecionarLoja = (index) => {
        setLojas(prev => {
            const novasLojas = [...prev];
            novasLojas[index].selecionada = !novasLojas[index].selecionada;
            novasLojas[index].itens = novasLojas[index].itens.map(item => ({
                ...item,
                selecionado: novasLojas[index].selecionada,
            }));
            return novasLojas;
        });
    };

    const handleSelecionarItem = (lojaIndex, itemIndex) => {
        setLojas(prev => {
            const novasLojas = [...prev];
            novasLojas[lojaIndex].itens[itemIndex].selecionado = !novasLojas[lojaIndex].itens[itemIndex].selecionado;
            novasLojas[lojaIndex].selecionada = novasLojas[lojaIndex].itens.every(item => item.selecionado);
            setSelecionarTodos(novasLojas.every(loja => loja.selecionada));
            return novasLojas;
        });
    };

    const calcularPrecoTotal = () => {
        return lojas.reduce((total, loja) => {
            return total + loja.itens.reduce((subTotal, item) => subTotal + (item.selecionado ? item.preco : 0), 0);
        }, 0);
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
                <MenuIconLink onClick={() => navigate("/Carrinho")}>Meu Carrinho</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuIconLink>
                <MenuIconLink onClick={() => navigate("/MinhaLoja")}>Minha Loja</MenuIconLink>
            </MenuIcon>

            <main>
                <Produtos>
                <SelecionarItens>
                    <input type="checkbox" id="concordo" checked={selecionarTodos} onChange={handleSelecionarTodos} />
                    <LabelContainer htmlFor="concordo">
                        <Span>Todos os itens</Span>
                        <Preco>R${calcularPrecoTotal()},00</Preco>
                        <FinalizarCompra>Continuar</FinalizarCompra>
                    </LabelContainer>
                </SelecionarItens>
                {lojas.map((loja, lojaIndex) => (
                    <Loja key={lojaIndex}>
                        <Title>{loja.nome}</Title>
                        <SelecionarLoja type="checkbox" checked={loja.selecionada} onChange={() => handleSelecionarLoja(lojaIndex)} />
                        Selecionar Tudo
                        {loja.itens.map((item, itemIndex) => (
                            <Item key={itemIndex}>
                                <ItemCheckbox type="checkbox" checked={item.selecionado} onChange={() => handleSelecionarItem(lojaIndex, itemIndex)} />
                                {item.nome} (R${item.preco},00)
                            </Item>
                        ))}
                    </Loja>
                ))}
                </Produtos>
            </main>

            <Footer>
                <Direitos>
                    <p>Todos os direitos reservados. @2025 por BeYou</p>
                </Direitos>
            </Footer>


        </Background>

    );
}

export default Carrinho;
