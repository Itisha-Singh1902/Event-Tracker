import React from "react";
import { Link } from "react-router-dom";




function Favourites(){
    return(
        <>
            <div className="navbar">
            <Link to="/" className="search" ><span className="spsearch">Search</span></Link>
            <Link to="/favourites" className="favourite" ><span className="spfavourite">Favourites</span></Link>
            </div>
            <div className="favbox">
                <p className="favtext">No favourite events to show</p>
            </div>
        </>
    );
}

export default Favourites;