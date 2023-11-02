import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const CatImage = styled.img`
height:30vh;
  width: 30vh;
  border-radius: 8px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  button {
    padding: 8px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    outline: none;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #ccc;
    }
  }
`;