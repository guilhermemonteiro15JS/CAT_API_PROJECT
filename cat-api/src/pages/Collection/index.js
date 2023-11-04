import React, { useState, useEffect } from "react";
import { StyledImageGrid, StyledVoteResults, TitleCollection } from "./styled";

function Collection() {
  const [historicVotes, setHistoricVotes] = useState([]);

  const API_URL = `https://api.thecatapi.com/v1/`;
  const API_KEY =
    "live_3KWMCoQy0Rnmh2DAnoU9JOkq3TcQspM0shb25IZWCL6hd5FjUKM9y84W8L9lV8sv";

  const removeVote = (voteId) => {
    const url = `${API_URL}votes/${voteId}`;

    fetch(url, {
      method: "DELETE",
      headers: {
        "x-api-key": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message === "SUCCESS") {
          setHistoricVotes(historicVotes.filter(({ id }) => id !== voteId));
        }
      });
  };

  useEffect(() => {
    const url = `${API_URL}votes`;

    fetch(url, {
      headers: {
        "x-api-key": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const positiveVotes = data.filter((voteData) => voteData.value > 0);
        setHistoricVotes(positiveVotes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <StyledVoteResults>
        <TitleCollection> As tuas imagens votadas de Gatos</TitleCollection>
        <StyledImageGrid>
          {historicVotes.map((voteData, index) => (
            <div
              key={index}
              className={`${voteData.value < 0 ? "red" : "green"}`}
            >
              <img
                src={voteData.image.url}
                alt={`Historic Vote ${index + 1}`}
              />
              <button onClick={() => removeVote(voteData.id)}>
                Remove vote
              </button>
            </div>
          ))}
        </StyledImageGrid>
      </StyledVoteResults>
    </>
  );
}

export default Collection;
