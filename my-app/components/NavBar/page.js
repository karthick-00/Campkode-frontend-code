import React from 'react'
import './Navbar.css'
export default function Navbar(){
  return (
    <div>
    <nav class="nav-main">
        <img class="incubator-logo" src="" alt="CampKode" />
        <div class="nav-btns">
          <div class="nav-slider"></div>
          <a class="nav-link" href="/">HOME</a>
          <a class="nav-link" href="/Course">COURSES</a>
          <a class="nav-link" href="#voucher">BLOG</a>
          <a class="nav-link" href="index.html#about-us">ABOUT US</a>
          <a class="nav-link" href="#footer">CONTACT</a>
          {/* <button className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white' > */}
          {/* <Link href={"/Login"} className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'>Login</Link> */}
          {/* </button> */}
          {/* <Link href="/signUp" className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'>Signup</Link> */}
        </div>
        <button className="hamburger" onclick="menuToggle()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

    </div>
  )
}
