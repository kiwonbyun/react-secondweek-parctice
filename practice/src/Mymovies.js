import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { completeMovie, deleteMovie } from "./redux/modules/movieredux";

const Mymovies = (props) => {
  const movieArr = useSelector((state) => state.movieredux.list);
  const history = useHistory();
  const dispatch = useDispatch();
  const complete = (index) => {
    dispatch(completeMovie(index));
  };
  const deleteCard = (index) => {
    dispatch(deleteMovie(index));
  };
  return (
    <Container>
      {movieArr.map((list, index) => {
        return (
          <MovieCard key={index} completed={list.completed}>
            <Info completed={list.completed}>
              <img
                src={list.medium_cover_image}
                onClick={() => history.push(`/movie/${index}`)}
              ></img>
              <h1 onClick={() => history.push(`/movie/${index}`)}>
                {list.title}({list.rating})
              </h1>
              <p>
                {list.summary.length > 300
                  ? `${list.summary.slice(0, 300)}...`
                  : list.summary}
              </p>
            </Info>
            <div>
              <span>내평점: {list.평점}</span>
              <span>내 코멘트: {list.후기}</span>
              <button onClick={() => complete(index)}>시청완료</button>
              <button onClick={() => deleteCard(index)}>완전삭제</button>
            </div>
          </MovieCard>
        );
      })}
    </Container>
  );
};

const MovieCard = styled.div`
  margin: auto;
  border-radius: 20px;
  width: 330px;
  transition: 0.3s;
  background-color: ${(props) => (props.completed ? "darkblue" : "aliceblue")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 70%;
  }
  h1 {
    font-size: 30px;
    color: ${(props) => (props.completed ? "white" : "black")};
  }
  p {
    color: ${(props) => (props.completed ? "white" : "black")};
  }
`;

export default Mymovies;
