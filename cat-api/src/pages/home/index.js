import React from "react";
import {HomeContainer, ClassHome, KeyParagraph} from "./styled";
import ImageSlider from "../../components/imageSlider";



const Home = () => {
  return (
    <HomeContainer>
      <ClassHome>
      <p> Aqui verás tudo acerca de Gatos</p>
      <ImageSlider/>
      </ClassHome>
    </HomeContainer>
  );
};

export default Home;