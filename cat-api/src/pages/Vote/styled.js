/* * {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
}

.container {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn-container {
  display: flex;
  flex-direction: "row";
  align-items: center;
  background-color: #fff;
  padding: 30px 50px;
  border-radius: 12px;
}

.btn {
  border: none;
  color: #fff;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #bdc0c5;
  border-radius: 4px;
  padding: 6px 15px;
  margin: 0 10px;
}

.like-active {
  background-color: #ff0063;
}

.dislike-active {
  background-color: #394350;
}
 */

import styled from "styled-components";

export const StyledVoteOptions = styled.div`
  display: ${(props) => (props.showResults ? "none" : "block")};
`;

export const StyledVoteResults = styled.div`
  display: ${(props) => (props.showResults ? "block" : "none")};
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
