"use client"
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import axios from 'axios';
import { getUserId } from '@/utils/getUser';
import Link from 'next/link';
// CourseCard component
const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded-md p-4">
    <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
    <p className="text-gray-600">{course.description}</p>
    <Link href={`/viewCourse/${course._id}`}> <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      View Course
    </button>
    </Link>
  </div>
);

export default function MyCoursesPage() {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    // Fetch course data from backend API
    const fetchCourses = async () => {
      try {
    
        const userId = getUserId();
        console.log(userId);
        if(userId){
        const response = await axios.get(`http://localhost:5500/elearning/users/getregistered-courses/${userId}`); // Replace with your API endpoint
        setRegisteredCourses(response.data);
        setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    const fetchCompletedCourses = async () => {
        try {
      
          const userId = getUserId();
          console.log(userId);
          const response = await axios.get(`http://localhost:5500/elearning/users/getcompleted-courses/${userId}`); // Replace with your API endpoint
          setCompletedCourses(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };

    fetchCourses();
    fetchCompletedCourses();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">My Courses</h1>

        <Tabs defaultValue="enrolled" className="mt-8">
          <TabsList className="flex gap-4">
            <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
            <TabsTrigger value="completed">Completed Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="enrolled">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {registeredCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed">
          {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {completedCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
