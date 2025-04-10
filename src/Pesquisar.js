import React, { useState } from "react";
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
    BarraPesquisa,
    TitleCategorias,
    Categorias,
    CategoriaContainer,
    TextoSobreposto,
    CategoriasImg
} from "./components/pesquisarestrutura";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        { name: "Sobrancelhas", img: "/img/categoria_sobrancelha.jpg"},
        { name: "Unhas", img: "/img/categoria_unhas.avif" },
        { name: "Coloração", img: "/img/categoria_coloracao.webp" },
        { name: "Tranças", img: "/img/categoria_trancas.webp" },
        { name: "Extensão de cílios", img: "/img/categoria_cilios.jpg" },
    ];

    // Filtrar categorias com base no termo de pesquisa
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Background>
            <Header>
                <LogoContainer>
                    <ImgLogo src="/img/new_logo.jpg" alt="Logo" />
                </LogoContainer>

                <Tres>&#9776;</Tres>

                <Perfil>
                    <PerfilLink>
                        <ImgPerfil src="/img/perfil.eu.jpg" />
                    </PerfilLink>
                </Perfil>

                <BotaoPerfil>Seu perfil</BotaoPerfil>
            </Header>

            <BarraPesquisa
                type="text"
                placeholder="Pesquisar categorias"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <TitleCategorias>Categorias</TitleCategorias>

            <Categorias>
            {filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => (
                    <CategoriaContainer key={index}>
                        <CategoriasImg src={category.img} alt={category.name} />
                        <TextoSobreposto>{category.name}</TextoSobreposto>
                    </CategoriaContainer>
                ))
            ) : (
            <p style={{ textAlign: 'center', width: '100%' }}>Nenhuma categoria encontrada.</p>
                )}
            </Categorias>
        </Background>
    );
};

export default SearchPage;
