import React from "react";
import {HomeContainer,TitleCollection} from "./styled";
import ImageSlider from "../../components/imageSlider";

const Home = () => {
  return (
    <HomeContainer>
       <TitleCollection> A tua página favorita sobre Gatos!</TitleCollection>
      <ImageSlider/>
    </HomeContainer>
  );
};

export default Home;