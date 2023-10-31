import React from "react";
import {HomeContainer, ClassHome, KeyParagraph} from "./styled";
import ImageSlider from "../../components/imageSlider";



const Home = () => {
  return (
    <HomeContainer>
      <ClassHome>
      <KeyParagraph>This is my API Key {process.env.REACT_APP_API_KEY}</KeyParagraph>
      <p> Aqui verás tudo acerca de Gatos</p>
      <ImageSlider/>
      </ClassHome>
    </HomeContainer>
  );
};

export default Home;