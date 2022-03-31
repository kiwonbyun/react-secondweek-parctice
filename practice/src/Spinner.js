import React from "react";
import styled from "styled-components";

const Spinner = (props) => {
  return (
    <Outter>
      <h1>WELCOME MOVIE SERVICE</h1>
      <h2>we are loading...</h2>
    </Outter>
  );
};

const Outter = styled.div`
  background-color: darkblue;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 80px;
    color: wheat;
    font-weight: 700;
  }
  h2 {
    font-size: 50px;
    color: wheat;
    font-weight: 500;
  }
`;

export default Spinner;
