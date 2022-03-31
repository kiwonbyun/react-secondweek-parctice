import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { saveMovie } from "./redux/modules/movieredux";

const Detail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const movieArr = useSelector((state) => state.movieredux.list);
  const params = useParams();
  const index = params.index;
  const thismovie = movieArr[index];

  const 평점 = React.useRef("");
  const 후기 = React.useRef("");
  if (movieArr.length === 1) {
    return null;
  }

  const saveMovieComment = (id) => {
    dispatch(
      saveMovie({
        평점: 평점.current.value,
        후기: 후기.current.value,
        id: id,
      })
    );
    history.goBack();
  };
  console.log(movieArr);

  return (
    <div>
      <div>
        <Bgimg src={thismovie.background_image_original}></Bgimg>
      </div>
      <Poster>
        <img src={thismovie.large_cover_image}></img>
        <Textdiv>
          <Subsc>
            <h1 style={{ marginBottom: "10px" }}>{thismovie.title}</h1>
            <span>평점 {thismovie.rating}</span>
            {thismovie.genres.map((v, i) => {
              return <span key={i}>{v}</span>;
            })}
            <hr />
            <span>{thismovie.synopsis}</span>
          </Subsc>
          <form>
            <label htmlFor="score">내 평점</label>
            <select id="score" ref={평점}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <label htmlFor="comment">내 후기</label>
            <input
              id="comment"
              placeholder="후기를 남겨주세요"
              ref={후기}
            ></input>
          </form>
          <Btndiv>
            <button
              onClick={() => {
                saveMovieComment(thismovie.id);
              }}
            >
              저장하기
            </button>
            <button onClick={() => history.goBack()}>뒤로가기</button>
          </Btndiv>
        </Textdiv>
      </Poster>
    </div>
  );
};

const Bgimg = styled.img`
  width: 100vw;
  height: 100vh;
  z-index: -9999;
`;
const Poster = styled.div`
  position: absolute;
  top: 15px;
  left: 100px;
  display: flex;
  align-items: center;
  h1 {
    font-size: 50px;
    color: white;
  }
  div {
    margin-left: 40px;
  }
`;

const Textdiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 500px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
  form {
    margin-top: 30px;
    margin-left: 40px;
  }
`;
const Subsc = styled.div`
  margin: auto;
`;

const Btndiv = styled.div`
  margin-top: 30px;
  button {
    margin-right: 20px;
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 10px;
  }
`;
export default Detail;
