import React, { useState } from "react";
import CenteredTabs from "./CenteredTabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
import Image from "./Image";

function Card(props){
    console.log(props.cardInfo)
    // const [image,setImage] = useState(false)
    const image = props.cardInfo.seatmap.staticUrl;
    const date = props.cardInfo.dates.start.dateTime;
    const venue = props.cardInfo._embedded.venues[0].name;
    const genre=  props.cardInfo.classifications[0].subGenre.name;
    const price = props.cardInfo.priceRanges ? `${props.cardInfo.priceRanges[0].min} - ${props.cardInfo.priceRanges[0].max} ${props.cardInfo.priceRanges[0].currency}` : 'N/A';
    const ticket = props.cardInfo.dates.status.code;
    const buy = props.cardInfo.url;
    const address = props.cardInfo._embedded.venues[0].address;
    const city = props.cardInfo._embedded.venues[0].city.name;
    const country = props.cardInfo._embedded.venues[0].country.name;
    const openhrs = props.cardInfo._embedded.venues[0].boxOfficeInfo.openHoursDetail;
    const generalInfo = props.cardInfo._embedded.venues[0].generalInfo.generalRule;
    const childRule  = props.cardInfo._embedded.venues[0].generalInfo.childRule;


    return(
        <>
            <div className="cardtab">
                <p className="textb">Back</p>
                <h2>{props.cardInfo.name}</h2>
                <div className="tabdiv">
                <CenteredTabs
                    date= {date}
                    venue = {venue}
                    genre = {genre}
                    price = {price}
                    ticket = {ticket}
                    buy = {buy}
                    image = {image}
                    address = {address}
                    city = {city}
                    country = {country}
                    openhrs = {openhrs}
                    generalInfo = {generalInfo}
                    childRule = {childRule}
                />
                </div>
                
                <p className="share">Share on: <a href="https://www.twitter.com/{props.cardInfo._embedded.venues[0].social.twitter.handle}" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>   <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>  </p>

            
            </div>
        </>
    );
}

export default Card;