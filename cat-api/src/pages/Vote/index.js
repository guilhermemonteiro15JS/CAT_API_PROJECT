



/* import react, { useState } from "react";
import "./index.css";

function Vote() {
    const [likeCount, setLikeCount] = useState(50);
    const [dislikeCount, setDislikeCount] = useState(25);
  
    const [activeBtn, setActiveBtn] = useState("none");
  
    const handleLikeClick = () => {
      if (activeBtn === "none") {
        setLikeCount(likeCount + 1);
        setActiveBtn("like");
        return;
      }
  
      if (activeBtn === 'like'){
        setLikeCount(likeCount - 1);
        setActiveBtn("none");
        return;
      }
  
      if (activeBtn === "dislike") {
        setLikeCount(likeCount + 1);
        setDislikeCount(dislikeCount - 1);
        setActiveBtn("like");
      }
    };
  
    const handleDisikeClick = () => {
      if (activeBtn === "none") {
        setDislikeCount(dislikeCount + 1);
        setActiveBtn("dislike");
        return;
      }
      
      if (activeBtn === 'dislike'){
        setDislikeCount(dislikeCount - 1);
        setActiveBtn("none");
        return;
      }
  
      if (activeBtn === "like") {
        setDislikeCount(dislikeCount + 1);
        setLikeCount(likeCount - 1);
        setActiveBtn("dislike");
      }
    };
  
  
    return (
      <div className="container">
        <div className="btn-container">
          <button
            className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`}
            onClick={handleLikeClick}
          >
            <span className="material-symbols-rounded">thumb_up</span>
            Like {likeCount}
          </button>
  
          <button
            className={`btn ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
            onClick={handleDisikeClick}
          >
            <span className="material-symbols-rounded">thumb_down</span>
            Dislike {dislikeCount}
          </button>
        </div>
      </div>
    );
  }
  
  export default Vote; */



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
    }, []); // Empty dependency array to run only once on component mount
  
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
  