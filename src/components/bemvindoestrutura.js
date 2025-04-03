// src/components/bemvindoestrutura.js
import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-image: url("/img/BackgroundImage.jpg"); 
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: flex-end; /* Alinha o conteúdo à direita */
  align-items: center; /* Centraliza verticalmente */
`;

export const Formulario = styled.div`
  margin: 35px; /* Margem ao redor do formulário */
  max-width: 850px; /* Definindo a largura máxima do formulário para 750px */
  padding: 30px; /* Aumentando o padding para mais espaço interno */
  background-color: white;
  color: black;
  border: solid 2px #6c4539;
  border-radius: 10px; /* Adicionando bordas arredondadas */
  display: flex;
  flex-direction: column; /* Alinha os elementos em coluna */
  align-items: center; /* Centraliza os elementos horizontalmente */
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333; /* Cor do título */
`;

export const BotaoCadastrar = styled.button`
  background-color: #f45bf4;
  color: white;
  padding: 10px 15px; /* Reduzindo o padding para um botão menor */
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 50%; /* Ajustando a largura para 50% */
  opacity: 0.8;
  font-size: 18px; /* Reduzindo o tamanho da fonte */
  margin-top: 15px;
  border-radius: 25px; /* Ajustando o raio da borda para um formato mais suave */

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
  }
`;