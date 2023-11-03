import styled from "styled-components";

export const StyledVoteResults = styled.div`
  display: ${(props) => (props.showResults ? "block" : "none")};
  margin-top: 20px;
`;

export const TitleCollection = styled.h1`
display:flex;
align-items: center;
justify-content: center;
`;

export const StyledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  .col-lg {
    width: 100%;
  }

  img {
    width: 70vh;
    height: 70vh;
    margin-left: 30px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
