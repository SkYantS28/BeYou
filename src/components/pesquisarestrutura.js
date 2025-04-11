pesquisarestrututa.js

import styled from "styled-components";

export const Header = styled.header`
    background-image: url("/img/Textura_Rosa.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px 40px;
    border-bottom: 4px solid #e6b2d4;
    border-radius: 0 0 30px 30px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #6c4539;
`;

export const Footer = styled.div`
  background-color: #FFC9E9;
  color: white;
  padding: 40px 80px;
  flex-wrap: wrap;
  border: 3px solid #6c4539;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`;

export const ConteudoFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`;

export const FooterLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;

  &:hover {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 200px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`;

export const Links = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Direitos = styled.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`;

export const Texto = styled.p`
  font-size: 12px;
  color: #6c4539;
`;

export const Logo = styled.img`
  width: 100px;
  margin: 20px 0;
`;

export const TitleFooter = styled.h3`
    text-align: center;
    color: #6c4539;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 40px;
`;
