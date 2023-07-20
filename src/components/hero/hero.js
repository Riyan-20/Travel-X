import React from 'react'
import HeroImg from './img.png'
import './Hero.css'

const hero = () => {
  return (
    <div>

{/* <!-- Hero Section --> */}
<div class="hero">
    {/* <!-- Left Text --> */}   
        <img src={HeroImg} alt="" />
        {/* <!-- ----------------------------  --> */} 
        <div class="leftSideHero">

        <div class="mainText">
            <h1>Santroni,</h1>
            <h2>Greece</h2>   
        </div>

        <div class="captionText">
            <h3 >Santroni - one of the Cycladic islands belonging to Greece in the Aegean Sea. The hilly landscape <br/> 
            of the island was formed as a result of the strongest volcanic eruption in the XVI century BC.  </h3>
        </div>
        <div class="GetStartedButton">
            <button> Explore More <i class="fa-solid fa-circle-right"></i></button>
        </div>
    </div>
</div>

    </div>
  )
}

export default hero