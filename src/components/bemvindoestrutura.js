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
  justify-content: flex-end; 
  align-items: center; 
`;

export const Formulario = styled.div`
  margin: 35px; 
  max-width: 850px; 
  padding: 30px; 
  background-color: white;
  color: black;
  border: solid 2px #6c4539;
  border-radius: 10px; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333; /* Cor do título */
`;

export const BotaoCadastrar = styled.button`
  background-color: #f45bf4;
  color: white;
  padding: 10px 15px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 50%;
  opacity: 0.8;
  font-size: 18px; 
  margin-top: 15px;
  border-radius: 25px; 

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
  }
`;