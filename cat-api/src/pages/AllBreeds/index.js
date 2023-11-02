
import React, { useState, useEffect } from "react";
import { Container, CatImage, Pagination } from "./styled";

const IMAGES_PER_PAGE = 9;

const AllBreeds = () => {
  const [catImages, setCatImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "x-api-key",
          "live_3KWMCoQy0Rnmh2DAnoU9JOkq3TcQspM0shb25IZWCL6hd5FjUKM9y84W8L9lV8sv"
        );

        let requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&limit=${IMAGES_PER_PAGE}&page=${currentPage}`,
          requestOptions
        );

        const result = await response.json();
        setCatImages(result);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const totalImages = catImages.length;
  console.log(totalImages);
  const totalPages = Math.ceil(totalImages / IMAGES_PER_PAGE);
  console.log(totalPages)

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      <Container>
        {catImages.map((catImage) => (
          <CatImage key={catImage.id} src={catImage.url} alt="Cat" />
        ))}
      </Container>
      <Pagination>
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages || 1}`}</span>
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>
          Next
        </button>
      </Pagination>
    </div>
  );
};


export default AllBreeds;