import React from "react";
import memesData from "../memesData"
export default function Meme() {

  const [memeImage, setMemeImage] = React.useState("")



  function getMemeImage() {
   const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }


  return (
    <div className="Meme">
      <div className="meme--form">
        <input className="meme--text" type="text" placeholder="One does not simply" />
        <input className="meme--text" type="text" placeholder="Walk into Mordor" />
        <button className="meme--button" onClick={getMemeImage}> Get a brand-frickin'-new meme image </button>
        <img src={memeImage} className="meme--image" />
      </div>
    </div>
  );
}
