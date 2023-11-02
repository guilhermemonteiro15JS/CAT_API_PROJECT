import styled from "styled-components";

export const StyledVoteResults = styled.div`
display: ${props => (props.showResults ? "block" : "none")};
/* Add other styling as needed */
`;