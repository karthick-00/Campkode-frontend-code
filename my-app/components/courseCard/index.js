import React from 'react'
import "@/app/Course/Course.css"
import { Link } from 'react-router-dom';

export default function CourseCard ({title,name,duration}){
  return (
    <div className="box">
   <div className="tutor">
      <img src="images/pic-2.jpg" alt=""/>
      <div className="info">
         <h3>{name}</h3>
         
      </div>
   </div>
   <div class="thumb">
      <img src="images/thumb-1.png" alt=""/>
      <span>{duration} Weeks</span>
   </div>
   <h3 class="title">{title}</h3>
   <a href='/exam_registration' class="inline-btn">View Course</a>
   
</div>

  );
}

 