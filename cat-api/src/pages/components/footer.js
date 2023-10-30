import React from "react";
import { StyledFooter, StyledGit, GitHubLink } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>"Mundo Felino" - O Seu Destino Online para Tudo Sobre Gatos!</p>
      <p>Desenvolvido por: </p>
      <StyledGit>
        <p>
          Guilherme Monteiro
          <GitHubLink href="https://github.com/guilhergemonteiro15JS">
            <i className="bi bi-github"></i>
          </GitHubLink>
        </p>
        <p>
          César Ramos
          <GitHubLink href="https://github.com/devCesarRamos">
            <i className="bi bi-github"></i>
          </GitHubLink>
        </p>
      </StyledGit>
    </StyledFooter>
  );
};

export default Footer;
