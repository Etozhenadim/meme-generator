import React from "react";


export default function Meme(){

    return(
       <main>
           <form action="" className="form" >
               <input type="text" className="form--input" placeholder="top"/>
               <input type="text" className="form--input" placeholder="bottom"/>
               <button className="form--button">Get a new meme image 🖼</button>
           </form>
       </main>
    )
};