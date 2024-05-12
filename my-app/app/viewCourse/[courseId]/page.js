"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewCoursePage = (req,res) => {

  const { courseId } = req.params;
  const [course, setCourse] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/elearning/courses/viewCourse/${courseId}`);
      console.log(response)
     
        await setCourse(response.data[0]);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    if (courseId) {
      fetchCourse();
    }
  }, [courseId]);

  const handleWeekClick = (week) => {
    setSelectedWeek(String(week));
  };

  return (
    <div className="flex">
      {/* Left part for course outline */}
      <div className="w-1/4 p-4">
      
        {course && (
          <>
            <h2 className="text-xl font-semibold mb-2">Course Outline</h2>
            <ul>
              <li>
                <button onClick={() => handleWeekClick('overview')}>Overview</button>
              </li>
              {course.modules.map((module) => (
                <li key={module.week}>
                  <button onClick={() => handleWeekClick(module.week)}>Week {module.week}</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Right part for course content */}
      <div className="w-3/4 p-4">
        {course && selectedWeek && (
          <>
            <h2 className="text-xl font-semibold mb-2">Content for Week {selectedWeek}</h2>
       
            {selectedWeek === 'overview' && (
              <div>
                <h3>{course.title}</h3>
                <p>Instructors: {course.instructors.join(', ')}</p>
                <p>Category: {course.category}</p>
              </div>
            )}
            {selectedWeek !== 'overview' && (
              <div>
               {/* Display content for the selected week */}
               {course.modules.map((module) => (
                  module.week == selectedWeek && (
                    <div key={module.week}>
                      {module.resources && (
                        <>
                          <h3>Resources</h3>
                          <ul>
                            {module.resources.map((resource, index) => (
                              <li key={index}>
                                <p>Title: {resource.title}</p>
                                <p>Description: {resource.description}</p>
                                <p>Video: {resource.video}</p>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {module.lectures && (
                        <>
                          <h3>Lectures</h3>
                          <ul>
                            {module.lectures.map((lecture, index) => (
                              <li key={index}>
                                <p>URL: {lecture.url}</p>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {module.assignment && (
                        <>
                          <h3>Assignment</h3>
                          <p>Title: {module.assignment.title}</p>
                          <ul>
                            {module.assignment.questions.map((question, index) => (
                              <li key={question._id}>
                                <p>Question {index + 1}: {question.question}</p>
                                <ul>
                                  {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                      <p>Option {optionIndex + 1}: {option}</p>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ViewCoursePage;
