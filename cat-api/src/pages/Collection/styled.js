import styled from "styled-components";

export const StyledVoteResults = styled.div`
  margin-top: 20px;
`;

export const TitleCollection = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  div {
    height: 200px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    height: 80%;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  button {
    height: 20%;
    flex-shrink: 0;
  }
`;
