import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  font-weight: bold;
  justify-content: center;
  background: #ff69b4;
  color: #fff;
  display: flex;
  padding: 20px;
  font-size: 2rem;
`;

const Header = () => {
  return <HeaderBar>Testes em Front no PelotasJS</HeaderBar>;
};

export default Header;
