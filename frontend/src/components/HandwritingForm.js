import React, { useState } from "react";
import axios from "axios";

function HandwritingForm() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/generate",
        { text },
        { responseType: "blob" }
      );
      const imageURL = URL.createObjectURL(response.data);
      setImage(imageURL);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
        ></textarea>
        <br />
        <button type="submit">Generate Handwriting</button>
      </form>
      {image && (
        <div>
          <img src={image} alt="Handwriting" />
        </div>
      )}
    </div>
  );
}

export default HandwritingForm;
