import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./Header";
import Mymovies from "./Mymovies";

const Home = () => {
  return (
    <div>
      <Headerdiv>
        <Header />
      </Headerdiv>
      <div>
        <Mymovies />;
      </div>
    </div>
  );
};

const Headerdiv = styled.div`
  height: 90px;
`;

const Addbutton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 9999px;
  border: none;
  background-color: tomato;
  position: fixed;
  bottom: 60px;
  right: 60px;
`;

export default Home;
