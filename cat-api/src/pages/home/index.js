import React from "react";
import {HomeContainer, ConstructionText} from "./styled";
import ImageSlider from "../../components/imageSlider";



const Home = () => {
  return (
    <HomeContainer>
      <div className="home">
      <p>This is my API Key {process.env.REACT_APP_API_KEY}</p>
      <p> Aqui verás tudo acerca de Gatos</p>
      <ImageSlider/>
      </div>
    </HomeContainer>
  );
};

export default Home;