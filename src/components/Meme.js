import React from "react";
import memesData from "../memesData"
export default function Meme() {

/*   const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg") */
const [meme, setMeme] = React.useState({
                              topText: "",
                              bottomText: "", 
                              randomImage: "http://i.imgflip.com/1bij.jpg"
                            })

const [allMemeImages,setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
   const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const memeUrl = memesArray[randomNumber].url
    setMeme(prevMeme =>({
      ...prevMeme,
      randomImage: memeUrl
    }))
  }


  return (
    <div className="Meme">
      <div className="meme--form">
        <input className="meme--text" type="text" placeholder="One does not simply" />
        <input className="meme--text" type="text" placeholder="Walk into Mordor" />
        <button className="meme--button" onClick={getMemeImage}> Get a brand-frickin'-new meme image </button>
        <img src={meme.randomImage} className="meme--image" />
      </div>
    </div>
  );
}
