import React from "react";
import { Stylecontainer, Styleheading, Styleparagraph, StylelistItem,GitHubLink } from "./styled";


const About = () => {
  return (
    <Stylecontainer>
      <Styleheading>Bem-vindo ao "Mundo Felino" - O Seu Destino Online para Tudo Sobre Gatos!</Styleheading>
      <Styleparagraph>
        Você entrou no portal dedicado exclusivamente aos amantes de gatos, onde a elegância e a fofura dos felinos são celebradas. Prepare-se para mergulhar em um universo repleto de informações fascinantes, conselhos práticos e, é claro, muitas fotos adoráveis de nossos amigos peludos.
      </Styleparagraph>

      <Styleheading>Explorando o Universo Felino:</Styleheading>
      <Styleparagraph>
        Seja você um veterano na arte de conviver com gatos ou esteja prestes a adotar seu primeiro felino, nosso site é o seu guia confiável. Nossa equipe de especialistas em comportamento felino, saúde e cuidados traz para você dicas valiosas e informações atualizadas para garantir que você proporcione a melhor vida possível para seu gato.
      </Styleparagraph>

      <Styleheading>O que Você Encontrará:</Styleheading>
      <ul>
        <StylelistItem>Artigos Informativos: De curiosidades intrigantes sobre a história dos gatos a conselhos práticos sobre como lidar com comportamentos específicos, nossos artigos cobrem uma ampla gama de tópicos para enriquecer sua compreensão sobre esses seres encantadores.</StylelistItem>
        <StylelistItem>Galeria de Fofura: Uma coleção cuidadosamente selecionada de fotos irresistíveis de gatos. De gatinhos sonolentos a poses majestosas, essa seção é garantia de sorrisos e "awnnns".</StylelistItem>
        <StylelistItem>Cuidados e Saúde: Guias abrangentes sobre nutrição adequada, dicas de higiene e conselhos de especialistas em saúde felina. Mantenha seu gato feliz, saudável e mimado.</StylelistItem>
        <StylelistItem>Comunidade Felina: Conecte-se com outros amantes de gatos, compartilhe histórias, faça perguntas e mergulhe em discussões animadas. Afinal, quem mais entenderia melhor a paixão por gatos do que nossa comunidade?</StylelistItem>
      </ul>

      <Styleheading>Por que "Mundo Felino"?</Styleheading>
      <ul>
        <StylelistItem>Paixão Pura: Somos apaixonados por gatos tanto quanto você. Cada artigo, foto e conselho reflete nosso amor incondicional por esses seres incríveis.</StylelistItem>
        <StylelistItem>Confiança e Credibilidade: Nossas informações são respaldadas por especialistas no campo. Queremos garantir que você tome decisões informadas e promova uma vida saudável e feliz para seu gato.</StylelistItem>
        <StylelistItem>Diversidade de Conteúdo: Do iniciante ao entusiasta experiente, nosso site oferece algo para todos. Explore, aprenda e divirta-se enquanto se aprofunda no vasto mundo dos gatos.</StylelistItem>
      </ul>

      <Styleparagraph>Então, prepare-se para se perder no fascinante "Mundo Felino"! Seja bem-vindo, amigo felino. 🐾</Styleparagraph>
      <Styleheading>Este projecto foi criado por:</Styleheading>
      <ul>
        <StylelistItem>Guilherme Monteiro 
          <GitHubLink href="https://github.com/guilhergemonteiro15JS">
            <i className="bi bi-github"></i>
          </GitHubLink></StylelistItem>
        <StylelistItem>
         Ricardo Oliveira
          <GitHubLink href="https://github.com/ricardoszs">
            <i className="bi bi-github"></i>
          </GitHubLink>
        </StylelistItem>
        
      </ul>
    </Stylecontainer>
    
  );
}

export default About;
