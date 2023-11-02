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
  display: ${props => (props.showResults ? "none" : "block")};
  
`;

export const StyledVoteResults = styled.div`
  display: ${props => (props.showResults ? "block" : "none")};
  /* Add other styling as needed */
`;