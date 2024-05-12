"use client"
import React, { useEffect } from 'react'
import './Team.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Team(){
  useEffect(() => {
    AOS.init()}, []);
  return (
    <>
    
    <div class="wrapper" data-aos="fade-up">
        <div class="cardT">
            <img src="dummy.jpg" alt=""/>
            <div class="infoT">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, nulla vitae dictum fermentum, diam purus maximus orci, ut euismod dolor lectus ac nibh</p>
                <a href="#popup" class="btn">Read More</a>
            </div>
        </div>
            <div class="cardT">
                <img src="dummy.jpg" class="imgg"/>
                <div class="infoT">
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, nulla vitae dictum fermentum, diam purus maximus orci, ut euismod dolor lectus ac nibh</p>
                    <a href="#popup" class="btn">Read More</a>
                </div>
            </div>
</div>
    <div id="popup">
        <div class="popup-content">
            
            <img src="dummy.jpg" class="image"/>
            <h1 class="teamname">This is title</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, nulla vitae dictum fermentum, diam purus maximus orci, ut euismod dolor lectus ac nibh
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, nulla vitae dictum fermentum, diam purus maximus orci, ut euismod dolor lectus ac nibh
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, nulla vitae dictum fermentum, diam purus maximus orci, ut euismod dolor lectus ac nibh
            </p>
            <a href='#' class="close-popup">&times;</a>
        </div>
    </div>


    </>
  )
}
