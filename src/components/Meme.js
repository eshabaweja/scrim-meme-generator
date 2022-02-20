import React from "react";

function Meme() {

  function getMemeImage(){
    console.log(`veronica, open the door`)
    return
  }
  return (
    <div className="Meme">
      <div className="meme--form">
        <input className="meme--text" type="text" placeholder="One does not simply" />
        <input className="meme--text" type="text" placeholder="Walk into Mordor" />
        <button className="meme--button" onClick={getMemeImage}> Get a different meme image </button>
      </div>
    </div>
  );
}

export default Meme;
