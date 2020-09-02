import React from "react";
import styled from "styled-components";
import Mel from "../img/Mel.png";

const ImagemContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  img {
    max-width: 200px;
  }
`;

const Imagem = () => {
  return (
    <ImagemContainer>
      <img src={Mel} />
    </ImagemContainer>
  );
};

export default Imagem;
