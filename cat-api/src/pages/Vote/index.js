import React, { useState, useEffect } from "react";
import { StyledVoteOptions } from "./styled";

const Vote = ({ showOptions }) => {
  const [showResults, setShowResults] = useState(false);
  const [currentImageToVoteOn, setCurrentImageToVoteOn] = useState({});
  const [historicVotes, setHistoricVotes] = useState([]);

  const API_URL = `https://api.thecatapi.com/v1/`;
  const API_KEY =
    "live_3KWMCoQy0Rnmh2DAnoU9JOkq3TcQspM0shb25IZWCL6hd5FjUKM9y84W8L9lV8sv";

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
        const imageToVoteOn = data[0];
        console.log("Data from API:", data);
        setCurrentImageToVoteOn(imageToVoteOn);
        console.log("Current Image to Vote On:", imageToVoteOn);
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
  useEffect(() => {
    console.log("Imagem Atual para Votar:", currentImageToVoteOn);
  }, [currentImageToVoteOn]);

  return (
    <StyledVoteOptions showOptions={true}>
      {currentImageToVoteOn && currentImageToVoteOn.url ? (
        <>
          <img
            id="imagem-para-votar"
            className="col-lg"
            src={currentImageToVoteOn.url}
            alt="Gato para Votar"
            style={{ border: "1px solid red" }}
          />
          <div>
            <button onClick={() => vote(1)}>
              <i class="bi bi-heart-fill me-1"></i>
              Like
            </button>
            <button onClick={() => vote(-1)}>
            <i class="bi bi-heartbreak-fill me-1"></i>
            Dislike</button>
          </div>
        </>
      ) : (
        <p>No image available</p>
      )}
    </StyledVoteOptions>
  );
};

export default Vote;
