import React, { useEffect, useState } from "react";
import "./Meme.css";

const Meme = () => {
  // state to display the [ INPUT TEXT & RANDOM IMAGES ]
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
    randomImageURL: "https://i.imgflip.com/9ehk.jpg",
  });
  // state to [ STORE MEMES ]
  const [meme, setMeme] = useState([]);

  // function to change [ MEME IMAGES ]
  const handleClick = () => {
    const memeArr = meme.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArr.length);
    const url = memeArr[randomIndex].url;
    setFormData((prevState) => ({
      ...prevState,
      randomImageURL: url,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // side effect to get [ MEMES DATA ]
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMeme(data);
      });
  }, []);

  //
  return (
    <div className="memes-section">
      <h1 className="meme--title">
        Make Your Meme Dreams a Reality: Create Hilarious Memes in No Time
      </h1>

      <div className="meme--form">
        <center>
          <input
            type="text"
            id="topText"
            placeholder="Top Text..."
            className="meme--input"
            value={formData.topText}
            name="topText"
            onChange={handleChange}
          />

          <input
            type="text"
            id="bottomText"
            placeholder="Bottom Text..."
            className="meme--input"
            value={formData.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
        </center>
        {/* End center inputs */}

        <center>
          <button className="meme--button" onClick={handleClick}>
            Get a new meme image 🖼️
          </button>
        </center>
      </div>
      {/* End meme--form */}

      <div className="meme">
        <center>
          <img
            src={formData.randomImageURL}
            className="meme--image"
            alt="memeImage"
          />
        </center>
        <h2 className="meme--text top">{formData.topText}</h2>
        <h2 className="meme--text bottom">{formData.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
