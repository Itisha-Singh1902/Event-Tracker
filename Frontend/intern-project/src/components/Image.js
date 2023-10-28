import React from "react";


export default function Image(props) {
   
    if (props.image) {
      return <img className="seatmap" src={props.image} alt="No image"></img>
    }
     return <h2>Not Available</h2>;
  }