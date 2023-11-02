import React, { useState, useEffect } from "react";
import { StyledVoteResults } from "./styled";
import Vote from "../Vote";

function Collection() {
  const [historicVotes, setHistoricVotes] = useState([]);
  const [showResults, setShowResults] = useState(true);

  const API_URL = `https://api.thecatapi.com/v1/`;
  const API_KEY = "live_3KWMCoQy0Rnmh2DAnoU9JOkq3TcQspM0shb25IZWCL6hd5FjUKM9y84W8L9lV8sv";

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
      <Vote showOptions={false} />
      <StyledVoteResults showResults={showResults}>
      <button onClick={() => setShowResults(true)}>Show Historic Votes</button>
        <div id="grid" className="imgrid">
          {historicVotes.map((voteData, index) => (
            <div key={index} className={`col-lg ${voteData.value < 0 ? "red" : "green"}`}>
              <img src={voteData.image.url} alt={`Historic Vote ${index + 1}`} />
            </div>
          ))}
        </div>
      </StyledVoteResults>
    </>
  );
}

export default Collection;
