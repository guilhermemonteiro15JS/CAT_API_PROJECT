import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BreedImage,
  BreedInformation,
  BreedDiv,
  LinkAllBreeds,
} from "./styled";

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [selectedBreedImage, setSelectedBreedImage] = useState("");

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
        const filteredBreeds = result.filter(
          (breed) => !!breed.reference_image_id
        );

        setBreeds(filteredBreeds);
        setSelectedBreed(filteredBreeds[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchSelectedBreedImage() {
      const referenceImageId = selectedBreed.reference_image_id;

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
          setSelectedBreedImage(imageResult.url);
        } else {
          console.error("A URL da imagem é undefined.");
        }
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    }

    if (selectedBreed) {
      fetchSelectedBreedImage();
    }
  }, [selectedBreed]);

  return (
    <BreedDiv>
      <LinkAllBreeds>
        <p>Queres ver apenas fotos de gatos, clica aqui:</p>
        <Link to="/all-breeds"> All Breeds</Link>
      </LinkAllBreeds>

      <select
        onChange={(e) => {
          setSelectedBreed(breeds.find(({ id }) => id === e.target.value));
        }}
        value={selectedBreed?.id}
        name="breed_selector"
        id="breed_selector"
      >
        <option value="" disabled selected>
          Select breed
        </option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>

      {selectedBreed && (
        <>
          <BreedInformation>
            <a href={selectedBreed.wikipedia_url} target="_blank">
              {selectedBreed.wikipedia_url}
            </a>
            <div>{selectedBreed.temperament}</div>
          </BreedInformation>

          <div>
            {selectedBreedImage && (
              <BreedImage src={selectedBreedImage} alt="Breed Image" />
            )}
          </div>
        </>
      )}
    </BreedDiv>
  );
};

export default Breeds;
