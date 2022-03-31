import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Title>
        <img src="https://www.creativosonline.org/wp-content/uploads/2018/04/futuro-extra%C3%B1o.jpg"></img>
      </Title>
      <Buttons>
        <button>로그인</button>
        <button>회원가입</button>
        <button>My page</button>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 0px 20px;
`;
const Title = styled.div`
  img {
    height: 100%;
  }
`;
const Buttons = styled.div``;
export default Header;
