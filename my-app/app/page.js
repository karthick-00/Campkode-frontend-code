
"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Login from './Login/page';
import Link from 'next/link';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SheetComponent from '@/components/sheet';
import ElasticCarousel from '@/components/Carousel';
import { PointCard } from '@/components/PointCard';
import { Mission } from '@/components/PointCard/mission';
import Partners from '@/components/partners';
import { getToken, getUserId } from '@/utils/getUser';
import { Team } from '@/components/Team/Team';
// import InfiniteScroll from 'react-infinite-scroller';

export default function Home() {
  const [section, setSection] = useState('home');

  const handleHeaderClick = (sectionName) => {
    setSection(sectionName);
    // Scroll to the corresponding section using JavaScript
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [data,setData]=useState(Array.from({length:20}))

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AOS.init();
    const token = getToken();

    if (token) {
      // Set the Authorization header with the JWT token for subsequent requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
     
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Set the expiration date of the cookie to a past time
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
  };


  return (
    <>
     
     <nav class="nav-main">
      {isLoggedIn && (<>
        <SheetComponent/>
      </>)}
        <img class="incubator-logo" src="" alt="CampKode"/>
        <div class="nav-btns">
            <div class="nav-slider"></div>
            <a class="nav-link" href="index.html">HOME</a>
            <a class="nav-link" href="/Course">COURSES</a>
            <a class="nav-link" href="#voucher">BLOG</a>            
            <a class="nav-link" href="index.html#about-us">ABOUT US</a>
            <a class="nav-link" href="#footer">CONTACT</a>
            {/* <button className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white' > */}
            {!isLoggedIn && (<>
              <Link href={"/Login"} className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'>Login</Link>
          
            <Link href="/signUp" className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'>Signup</Link>
            </>)}
            {isLoggedIn && (<>
              <button onClick={handleLogout} className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'>
            Logout
          </button>
            </>)}
         
           
        </div>
        <button className="hamburger" onclick="menuToggle()">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
    <ElasticCarousel/>

    <div className='why-incubation'>
    <img loading="lazy" src="10.png" alt="illus" class="mainillus"/>
    <img loading="lazy" src="10.png" alt="illus" class="mainillus2"/>
    <img loading="lazy" src="" alt="CampKodeLogo" class="incubation-main"/>
    <div className="data">
    <h2 data-splitting style={{
      fontFamily: "montserrat, sans-serif",
      fontSize: '4rem',
      fontWeight: 400
    }} data-aos="fade-up"> WHY CAMPKODE?</h2>
          <hr className="underline"/>
            <p className="desc-info" data-aos="fade-up">
            At CampKode, we specialize in certification courses covering both technical and soft skills, taught by experienced faculty. Through collaborations with industry professionals and companies, we ensure our courses align with industry needs. By incorporating real-world insights and practical knowledge, we equip our students with the skills demanded by employers. Our rigorous certification exams serve as a benchmark, certifying students as industry-ready candidates upon completion. With a focus on practical application and industry relevance, CampKode prepares students to excel in their chosen fields and embark on successful careers.
            </p>
    </div>
    </div>

    <section class="incubation-points" data-aos="fade-up">
      <PointCard/>
      <Mission/>
    </section>
    
        
        <h1>OUR TEAM</h1>
        <Team/>
<div className='flex justify-center items-center'>
<Partners/>
    </div>
  
        <section id="footer" class="footer">
        <img loading="lazy" src="9.png" alt="" class="footillus"/>
        <div class="contact-details">
            <img loading="lazy" src="" alt="campKode" class="incub-footer"/>
            <div class="contact-links">
                <div class="contact-phone"><i class="fa fa-phone-alt"></i><a target="_blank" href="tel:+91 7845127111">+91 7845127111</a></div>
                <div class="contact-instagram"><i class="fab fa-instagram"></i><a target="_blank" href="https://www.instagram.com/techno_incubator_sairam/">@techno_incubator_sairam</a></div>
                <div class="contact-mail"><i class="fa fa-envelope"></i><a target="_blank" href="mailto:incubation@sairam.edu.in">incubation@sairam.edu.in</a></div>
                <div class="contact-mail"><i class="fa fa-envelope"></i><a target="_blank" href="mailto:queries.rd@sairam.edu.in">queries.rd@sairam.edu.in</a></div>
        </div>
        <a href="https://sairam.edu.in/"><img loading="lazy" src="clg.png" alt="Sri Sairam Institutions" class="sairam-footer"/></a>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.3507297395254!2d80.05570764064954!3d12.960673804353524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1714639397852!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
  );
}
