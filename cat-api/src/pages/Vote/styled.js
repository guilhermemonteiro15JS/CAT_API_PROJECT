

import styled from "styled-components";

export const StyledVoteOptions = styled.div`
  display: ${(props) => (props.showOptions ? "block" : "none")};
  text-align: center;

  button {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
  }

  img {
    width: 80vh;
    height: 80vh;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;