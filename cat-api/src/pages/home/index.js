import React from "react";
import {HomeContainer, ConstructionText} from "./styled";
import ImageSlider from "../../components/imageSlider";



const Home = () => {
  return (
    <HomeContainer>
      <p> Aqui verás tudo acerca de Gatos</p>
      <ImageSlider/>
    </HomeContainer>
  );
};

export default Home;