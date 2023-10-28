import React from "react";
import '../App.css';
import axios from "axios";
import Geocode from 'react-geocode';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Card from "./Card";



function Home(){
  const [table , setTable] = useState([]);
  const [cardInfo, setCardInfo] = useState({})
  const [card , setCard] = useState(false);
  const [formData, setFormData] = useState({
    keyword: '',
    distance: '',
    category: '',
    location: '',
  });
  const onClick = () => {
    
  };

  // const displayCard = () =>{
  //   setCard(true);
  // }


  const InputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

function geocodeAPI() {
  const location = document.getElementById('location');
  Geocode.setApiKey("AIzaSyCcW_UZqctzXOT-8KUqeTNBqNhX3Lg5kNw");
  Geocode.setLanguage("en");
  Geocode.enableDebug();
  Geocode.fromAddress(location.value).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      const geohash = require('ngeohash');
      const hash= geohash.encode(lat, lng);
      console.log(hash);
    },
    (error) => {
      console.error(error);
    }
  );   
} 
function ipinfo(){
  if(document.getElementById("location1").checked){
    fetch('https://ipinfo.io/json?token=d0f76a198630b7')
      .then(response => response.json())
      .then(data => {
        const loc= data.loc;
        const locc= loc.split(',');
        const latitude = locc[0];
        const longitude = locc[1];
        console.log(`latitude: ${latitude}, longitude: ${longitude}`);
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
      });
  }
  }

  const Submit = (event) => {
    console.log(formData)
    event.preventDefault();
    axios({
      method: 'post',
      //  headers: {
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json',
      //   // 'Access-Control-Allow-Credentials': 'false'
      // },
      url: 'http://127.0.0.1:8000/ticketapi/result',
      data: formData,
    }).then(function (response) {
      console.log(response.data);
      setTable(response.data._embedded.events);
    })
  };

    return(
        <>
          <div className="navbar">
          <Link to="/" className="nav-search"><span className="span-search">Search</span></Link>
          <Link to="/favourites" className="nav-favourite"><span className="span-favourite">Favourites</span></Link>
        </div>
<div className="main-body">
  <div className="text-container">
   <span className="heading">Event Search</span>
   <hr className="hor-line">
   </hr>
  <form style={{height:"100%", width:"100%"}} method="POST" onSubmit={Submit}>
  <p className="h-1">Keyword<span className="require">*</span></p>
  <input className="keybox" type="text"  id="keyword" value={formData.keyword} name="keyword"  required  onChange={InputChange}></input>
  <div className="h-2">
  <div>
  <p className="h2-1">Distance(miles)<span className="require">*</span></p>
  <input className="distbox" type="text" id="distance" name="distance" value={formData.distance} required onChange={InputChange} ></input>
  </div>
  <div style={{marginLeft:"60px"}}>
  <p className="h2-2">Category</p>
  <select name="category" className="ctgbox" id="category" value={formData.category} onChange={InputChange}>
        <option value="default">Default</option>
        <option value="KZFzniwnSyZfZ7v7nJ">Music</option>
        <option value="KZFzniwnSyZfZ7v7nE">Sports</option>
        <option value="KZFzniwnSyZfZ7v7na">Art & Theatre</option>
        <option value="KZFzniwnSyZfZ7v7nn">Film</option>
        <option value="KZFzniwnSyZfZ7v7n1">Miscellaneous</option>
      </select>
  </div>
  </div>
  <p className="h-1">Location</p>
  <input className="lcnbox"  type="text" id="location" name="location" value={formData.location}  onChange={InputChange}></input>
  <div className="h-3">
  <input id="location1" type="checkbox" className="location1" onClick={ipinfo} ></input>
   <label for="label" className="label"> Auto-detect your location</label>
   </div>
   
   <div className="button">

    <button className="button1" onClick={geocodeAPI}>SUBMIT</button>

    <button className="button2"  >CLEAR</button>
    
   </div>
   </form>
   <div className="tablecard">
   {
    card? (
        <Card
          cardInfo = {cardInfo}
        />
    ):(
      <div className="table">
   <table id="eventtable">
     <thead>
      <tr>
        <th>Date/Time</th>
        <th>Icon</th>
        <th>Event</th>
        <th> Genre</th>
        <th>Venue</th>
      </tr>
     </thead>
     <tbody>
     {table.map(events =>{
      
    return   <tr onClick={()=>{{setCard(true)};setCardInfo(events)}}>
          <td>{events.dates.start.dateTime}</td>
          <td><img style={{height:"50px",width:"50px"}} src={events.images[0].url}></img></td>
          <td>{events.name}</td>
          <td>{events.classifications[0].genre.name}</td>
          <td>{events._embedded.venues[0].name}</td>
        </tr>
   })}
      </tbody>

     </table>
   </div>
    )}
   
   </div>
 </div>
  
  </div>
        </>
    );
}

export default Home;