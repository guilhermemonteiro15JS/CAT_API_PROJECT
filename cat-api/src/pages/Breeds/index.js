import React, { useEffect, useState, useRef } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { BreedImage, BreedDiv, LinkAllBreeds } from "./styled";
import AllBreeds from "../AllBreeds";

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(0);
  const breedImageRef = useRef(null);
  const breedJsonRef = useRef(null);
  const wikiLinkRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/breeds", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        });

        const result = await response.json();
        console.log(result);
        setBreeds(result.filter((breed) => breed.reference_image_id));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    showBreedImage(selectedBreed);
  }, [selectedBreed, breeds]);

  const showBreedImage = async (index) => {
    console.log({ breeds, index });
    const currentBreed = breeds[index];

    if (!currentBreed) {
      /* 
      console.error("Breed not found"); */
      return;
    }

    const referenceImageId = currentBreed.reference_image_id;

    try {
      const imageResponse = await fetch(
        `https://api.thecatapi.com/v1/images/${referenceImageId}`,
        {
          method: "GET",
          headers: {
            "x-api-key":
              "live_3KWMCoQy0Rnmh2DAnoU9JOkq3TcQspM0shb25IZWCL6hd5FjUKM9y84W8L9lV8sv",
          },
          redirect: "follow",
        }
      );

      const imageResult = await imageResponse.json();

      console.log("Image Result:", imageResult);

      if (imageResult && imageResult.url) {
        console.log("Image URL:", imageResult.url);
        console.log("Temperament:", currentBreed.temperament);
        console.log("Wikipedia URL:", currentBreed.wikipedia_url);

        breedImageRef.current.src = imageResult.url;
        breedJsonRef.current.textContent = currentBreed.temperament;
        wikiLinkRef.current.href = currentBreed.wikipedia_url;
        wikiLinkRef.current.innerHTML = currentBreed.wikipedia_url;
      } else {
        console.error("A URL da imagem é undefined.");
      }
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  return (
    <BreedDiv>
      <LinkAllBreeds>
        <p> Queres ver apenas fotos de gatos, clica aqui:</p>
        <Link to="/AllBreeds"> All Breeds</Link>
      </LinkAllBreeds>

      <select
        onChange={(e) => setSelectedBreed(e.target.value)}
        value={selectedBreed}
        name="breed_selector"
        id="breed_selector"
      >
        {breeds.map((breed, index) => (
          <option key={index} value={index}>
            {breed.name}
          </option>
        ))}
      </select>

      <div>
        <a ref={wikiLinkRef} target="_blank"></a>
        <div ref={breedJsonRef}></div>
      </div>

      <div>
        <BreedImage ref={breedImageRef} alt="Breed Image" />
      </div>
    </BreedDiv>
  );
};

export default Breeds;
