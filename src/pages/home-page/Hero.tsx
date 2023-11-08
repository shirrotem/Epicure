import React from "react";
import './Hero.scss'

const Hero = () => {
    const searchPH = 'Search for restaurant cuisine, chef';
    
    return (
        <div className="hero">
        <div className="hero-search-label">
            <h1 id="hero-header">Epicure works with the top chef restaurants in Tel Aviv</h1>
            <input type="search" placeholder={searchPH}/>
        </div>
        </div>
    );

};

export default Hero;