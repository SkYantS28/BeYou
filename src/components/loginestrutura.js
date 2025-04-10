import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url("/img/BackgroundImage.jpg");
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
`;


const Formulario = styled.div`
  position: absolute;
  right: 0;
  margin: 80px;
  margin-right: 150px;
  max-width: 500px;
  padding: 20px;
  background-color: white; 
  color: black;
  border: solid 2px #6c4539;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 50px;

  &:focus {
    background-color: #ffecfc;
    outline: none;
  }
`;

const InputLink = styled.a`
  color: #f45bf4;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;


const EsqueciSenha = styled.div`
  font-size: 20px;
  color: #f45bf4;
  font-style: none;
  display: flex;
  text-align: center;
  text-decoration: none;
  &:focus {
    text-decoration: underline; 
    color: hsl(300, 99%, 64%);
  }
`;

const BotaoLogin = styled.button`
  background-color: #f45bf4;
  color: white;
  padding: 15px 20px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 60%;
  opacity: 0.8;
  font-size: 20px;
  margin-left: 90px;
  margin-top: 20px;
  border-radius: 50px;

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
  }
`;

const BotaoCadastro = styled.button`
  background-color: #f45bf4;
  color: white;
  padding: 15px 20px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 60%;
  opacity: 0.8;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 90px;
  border-radius: 50px;

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
  }
`;

export {
  BackgroundImage,
  Formulario,
  Title,
  Input,
  BotaoCadastro,
  BotaoLogin,
  EsqueciSenha,
  InputLink
};
