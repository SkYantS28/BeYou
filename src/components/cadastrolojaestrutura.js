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
  margin: 35px;
  margin-right: 150px;
  max-width: 500px;
  padding: 20px;
  background-color: white;
  color: black;
  border: solid 2px #6c4539;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 10px 0;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 50px;

  &:focus {
    background-color: #ffecfc;
    outline: none;
  }
`;

const Checkbox = styled.div`
  color: #f45bf4;
  font-style: none;
  display: block;
  text-align: center;
  text-decoration: none;
`;

const CheckboxInput = styled.input`
  margin-top: 10px;
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 15px;
`;

const CheckboxLink = styled.a`
  color: #f45bf4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;

const BotaoCadastrar = styled.button`
  background-color: #f45bf4;
  color: white;
  padding: 15px 20px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 60%;
  opacity: 0.8;
  font-size: 20px;
  margin-top: 15px;
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
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
  CheckboxLink,
  BotaoCadastrar
};
