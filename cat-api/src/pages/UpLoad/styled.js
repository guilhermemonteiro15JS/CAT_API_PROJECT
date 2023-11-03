import styled from 'styled-components';


export const All = styled.div`
  height: 100%;
  width: 100%;
  border: 0px;
  margin: 0px;
`;
export const BodyContainer = styled.body`
  margin: 0;
  height: 80vh;
  background: url("https://static.vecteezy.com/ti/fotos-gratis/p2/26646288-gato-ilustracao-fundo-papel-de-parede-projeto-lindo-colorida-gatinha-arte-gatinho-desenhando-gratis-foto.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const ContainerFile = styled.div`
  text-align: center;
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;
`;

export const InputFile = styled.input`
margin-left: 5px;
  margin-bottom: 20px;
`;

export const ButtonFile = styled.button`
display: flex;
align-items: left;
justify-content: left;
font-size: 14px;
margin-left: 5px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  max-width: 600px; 
  margin-right: auto;
`;

export const TextDescription = styled.button`
display: flex;
align-items: flex-start;
justify-content: left; 
flex-direction: column;
background-color: transparent;
border: none;
outline: none;
margin-top: 20px;
`;