import React, { useState } from "react";
import { ContainerFile, InputFile, ButtonFile, TextDescription, All, BodyContainer, Container } from "./styled";

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    setPreviewImage(file ? URL.createObjectURL(file) : null);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch(
        "https://api.thecatapi.com/v1/images/upload",
        {
          method: "POST",
          headers: {
            "x-api-key":
              "live_3KWMCoQy0Rnmh2DAnoU9JOkq3TcQspM0shb25IZWCL6hd5FjUKM9y84W8L9lV8sv",
          },
          body: formData,
        }
      );

      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <BodyContainer>
    <All>
      <Container>
      <TextDescription>
        <div>
          <p>
            Se não encontraste aqui a imagem perfeita do teu 
            gato ou tens uma foto engraçada do teu, 
            faz upload da tua imagem e contribui para a
            coleção de momentos adoráveis e divertidos 
            do mundo felino.
          </p>
          <p>
            Vamos criar juntos um espaço cheio de charme e travessuras dos
            nossos queridos amigos de quatro patas. Mal podemos esperar para ver
            as tuas contribuições felinas!
          </p>
        </div>
      </TextDescription>
      </Container>

      <ContainerFile>
        <InputFile type="file" onChange={handleFileChange} />
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "200px", margin: "20px 0" }}
          />
        )}
        <ButtonFile onClick={handleUpload}>Submeter</ButtonFile>
      </ContainerFile>
    </All>
    </BodyContainer>
  );
};

export default Uploader;
