import React, { useState, useEffect } from "react";
import { StyledVoteOptions } from "./styled";
  
const Vote = ({ showOptions }) => {
  const [showResults, setShowResults] = useState(false);
  const [currentImageToVoteOn, setCurrentImageToVoteOn] = useState(null);
  const [historicVotes, setHistoricVotes] = useState([]);

  const API_URL = `https://api.thecatapi.com/v1/`;
  const API_KEY = "live_3KWMCoQy0Rnmh2DAnoU9JOkq3TcQspM0shb25IZWCL6hd5FjUKM9y84W8L9lV8sv";

  useEffect(() => {
    showVoteOptions();
  }, []);

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
        console.log("Data from API:", data);
        setCurrentImageToVoteOn(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }

  function vote(value) {
    const url = `${API_URL}votes/`;
    const body = {
      image_id: currentImageToVoteOn.id,
      value,
    };
  
    console.log("Voting with body:", body);
  
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
        "x-api-key": API_KEY,
      },
    })
      .then(() => {
        console.log("Vote successful");
        showVoteOptions();
      })
      .catch((error) => {
        console.error("Error voting:", error);
      });
  }

  return (
    <>
      {showOptions && (
        <StyledVoteOptions>
          <button onClick={() => vote(1)}>Vote Up</button>
          <button onClick={() => vote(-1)}>Vote Down</button>
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
      )}
    </>
  );
};

export default Vote;
