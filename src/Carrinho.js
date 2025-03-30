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
    QuantidadeContainer,
    BotaoQuantidade,
    IconeLixeira,
    IconeFavorito,
    ProdutoImg,
    Produtos, 
    Span, 
    Loja, 
    CarrinhoImg,
    SelecionarLoja, 
    Item, 
    ItemCheckbox,
    Mensagem
} from "./components/carrinhoestrutura";

function Carrinho() {
    // visibilidade do menu
    const [menuVisible, setMenuVisible] = useState(false);
  
    // linkar paginas
    const navigate = useNavigate(); 
  
    // abrir e fechar menu
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    // levar ate a pagina inicial
    const reloadPage = (event) => {
        event.preventDefault();
        navigate('/PaginaInicial');
    };

    // controla o checkbox "Selecionar todos"
    const [selecionarTodos, setSelecionarTodos] = useState(false);
    
    // armazenar as lojas e seus respectivos itens
    const [lojas, setLojas] = useState([
        {
            nome: "Bellus Esmaltaria",
            selecionada: false,
            itens: [
                { nome: "Esmalte em Gel - Preto", preco: 10, selecionado: false, quantidade: 1, imagem: "/img/esmalte_preto.webp" },
                { nome: "Esmalte em Gel - Azul", preco: 10, selecionado: false, quantidade: 1, imagem: "/img/esmalte_azul.webp" },
            ],
        },
        {
            nome: "Marcia Travessoni",
            selecionada: false,
            itens: [{ nome: "Creme de Pentear - Elseve", preco: 30, selecionado: false, quantidade: 1, imagem: "/img/creme_pentear.jpeg" }],
        },
        {
            nome: "Monisatti",
            selecionada: false,
            itens: [{ nome: "Máscara Capilar - Eudora", preco: 75, selecionado: false, quantidade: 1, imagem: "/img/mascara_capilar.jpeg" }],
        },
    ]);

    // selecionar ou desmarcar todos os itens
    const handleSelecionarTodos = () => {
        const novoEstado = !selecionarTodos;
        setSelecionarTodos(novoEstado);
        setLojas(lojas.map(loja => ({
            ...loja,
            selecionada: novoEstado,
            itens: loja.itens.map(item => ({ ...item, selecionado: novoEstado }))
        })));
    };

    // exibe a mensagem de favorito
    const [mensagemFavorito, setMensagemFavorito] = useState("");

    // marca um item como favorito e exibe a mensagem por 2 segundos
    const handleFavoritar = () => {
        setMensagemFavorito("Adicionado aos favoritos");
        setTimeout(() => setMensagemFavorito(""), 2000);
    };

    // selecionar ou desmarcar uma loja inteira
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

    // selecionar ou desmarcar um item específico de uma loja
    const handleQuantidade = (lojaIndex, itemIndex, operacao) => {
        setLojas(prev => {
            const novasLojas = [...prev];
            const item = novasLojas[lojaIndex].itens[itemIndex];
            if (operacao === "+" && item.quantidade < 10) item.quantidade++;
            if (operacao === "-" && item.quantidade > 1) item.quantidade--;
            return novasLojas;
        });
    };

    // deletar um item da lista
    const handleDeletarItem = (lojaIndex, itemIndex) => {
        setLojas(prev => {
            const novasLojas = [...prev];
            novasLojas[lojaIndex].itens.splice(itemIndex, 1);
            return novasLojas;
        });
    };

    // calcular o preço total dos itens selecionados
    const calcularPrecoTotal = () => {
        return lojas.reduce((total, loja) => {
            return total + loja.itens.reduce((subTotal, item) => subTotal + (item.selecionado ? item.preco * item.quantidade : 0), 0);
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
                    <LabelContainer>
                        <Span>Todos os itens</Span>
                        <Preco>R${calcularPrecoTotal()},00</Preco>
                        <FinalizarCompra>Continuar</FinalizarCompra>
                    </LabelContainer>
                </SelecionarItens>
                {mensagemFavorito && <Mensagem>{mensagemFavorito}</Mensagem>}
                {lojas.map((loja, lojaIndex) => (
                    <Loja key={lojaIndex}>
                        <CarrinhoImg src="/img/casinha.jpg" / >
                        <Title>{loja.nome}</Title>
                        <SelecionarLoja type="checkbox" checked={loja.selecionada} onChange={() => handleSelecionarLoja(lojaIndex)} />
                        Selecionar Tudo
                        {loja.itens.map((item, itemIndex) => (
                            <Item key={itemIndex}>
                                <ItemCheckbox type="checkbox" checked={item.selecionado} onChange={() => handleSelecionarItem(lojaIndex, itemIndex)} />
                                {item.nome} (R${item.preco},00)
                                <QuantidadeContainer>
                                        <BotaoQuantidade onClick={() => handleQuantidade(lojaIndex, itemIndex, "-")}>-</BotaoQuantidade>
                                        {item.quantidade}
                                        <BotaoQuantidade onClick={() => handleQuantidade(lojaIndex, itemIndex, "+")}>+</BotaoQuantidade>
                                    </QuantidadeContainer>
                                    <IconeLixeira onClick={() => handleDeletarItem(lojaIndex, itemIndex)}>🗑</IconeLixeira>
                                    <IconeFavorito onClick={handleFavoritar}>❤️</IconeFavorito>

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
