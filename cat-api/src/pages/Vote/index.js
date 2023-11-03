
  import React, { useState, useEffect } from "react";
  import { StyledVoteResults, StyledVoteOptions } from "./styled";
  
  const Vote = () => {
    const [showResults, setShowResults] = useState(false);
    const [currentImageToVoteOn, setCurrentImageToVoteOn] = useState(null);
    const [historicVotes, setHistoricVotes] = useState([]);
  
    const API_URL = `https://api.thecatapi.com/v1/`;
    const API_KEY = "live_3KWMCoQy0Rnmh2DAnoU9JOkq3TcQspM0shb25IZWCL6hd5FjUKM9y84W8L9lV8sv";
  
    useEffect(() => {
      showVoteOptions();
    }, []);
  
    function showHistoricVotes() {
      setShowResults(true);
    
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
      }
  
    function showVoteOptions() {
      setShowResults(false);
      setCurrentImageToVoteOn(null);
      setHistoricVotes([]);
  
      showImageToVoteOn();
    }
  
    function showImageToVoteOn() {
      const url = `${API_URL}images/search`;
  
      fetch(url, {
        headers: {
          "x-api-key": API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCurrentImageToVoteOn(data[0]);
        });
    }
  
    function vote(value) {
      const url = `${API_URL}votes/`;
      const body = {
        image_id: currentImageToVoteOn.id,
        value,
      };
  
      fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "content-type": "application/json",
          "x-api-key": API_KEY,
        },
      }).then(() => {
        showVoteOptions();
      });
    }
    return (
      <>
        <StyledVoteOptions showResults={showResults}>
          <button onClick={() => vote(1)}>Vote Up</button>
          <button onClick={() => vote(-1)}>Vote Down</button>
          <button onClick={() => showHistoricVotes()}>History</button>
          <div>
            {currentImageToVoteOn && (
              <img
                id="image-to-vote-on"
                className="col-lg"
                src={currentImageToVoteOn.url}
                alt="Cat to Vote On"
              />
            )}
          </div>
        </StyledVoteOptions>
  
        <StyledVoteResults showResults={showResults}>
          <button onClick={() => showVoteOptions()}>Show Vote Options</button>
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
  };
  
  export default Vote;
  