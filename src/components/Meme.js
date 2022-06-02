import React from "react";
import memesData from "../memesData.js"


export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")
    // let url =

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
       <main>
           <div action="" className="form" >
               <input type="text" className="form--input" placeholder="top"/>
               <input type="text" className="form--input" placeholder="bottom"/>
               <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
           </div>
           <img src={memeImage} className="meme--image" alt=""/>
       </main>
    )
};