"use client"
import React,{useState, useEffect} from 'react'
import "./Course.css"
import CourseCard from '@/components/courseCard';
import Navbar from '@/components/NavBar/page';

export default function Profile() {
   
const [courses, setCourses]=useState([]);

const fetchData = async()=>{
   const response = await fetch('http://localhost:5500/elearning/courses/viewAllCourses');
   const data = await response.json();
   setCourses(data);

   console.log(data,"jlsd");

   // data.forEach(element => {
   //   const {title, instructors}=element;
   //   console.log(title, instructors);
   //   setCourses(element);
   // });

}

useEffect(()=>{
   fetchData();
},[])

   return (
   <>
   <Navbar/>
   <body>
  



 



<section className="courses">

<h1 class="heading">our courses</h1>

<div className="box-container">

{courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            title={course.title}
                            name={course.instructors[0]}
                            duration={course.duration}
                        />
                    ))}

</div>

</section>
</body>

   </>
  )
}
