import React, { useEffect, useState } from "react";
import { BreedImage } from "./styled";

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=10&page=0", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
        });

        const result = await response.json();
        setBreeds(result.filter(breed => breed.image?.url !== null));

        showBreedImage(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const showBreedImage = async (index) => {
    const currentBreed = breeds[index];

    if (currentBreed && currentBreed.image && currentBreed.image.reference_image_id) {
      const referenceImageId = currentBreed.image.reference_image_id;

      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/${referenceImageId}`, {
          method: 'GET',
          headers: {
            'x-api-key': 'DEMO-API-KEY',
          },
          redirect: 'follow',
        });

        const result = await response.json();
        
        document.getElementById("breed_image").src = result.url;
        document.getElementById("breed_json").textContent = currentBreed.temperament;
        document.getElementById("wiki_link").href = currentBreed.wikipedia_url;
        document.getElementById("wiki_link").innerHTML = currentBreed.wikipedia_url;

        setSelectedBreed(index);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    } else {
      console.error("A raça selecionada, sua imagem ou URL da imagem é undefined.");
    }
  };

  return (
    <div>
      <select onChange={(e) => showBreedImage(e.target.value)} value={selectedBreed} name="breed_selector" id="breed_selector">
        {breeds.map((breed, index) => (
          <option key={index} value={index}>
            {breed.name}
          </option>
        ))}
      </select>

      <div>
        <a id="wiki_link" target="_blank"></a>
        <div id="breed_json"></div>
      </div>

      <div>
        <BreedImage id="breed_image" alt="Breed Image" />
      </div>
    </div>
  );
};

export default Breeds;



