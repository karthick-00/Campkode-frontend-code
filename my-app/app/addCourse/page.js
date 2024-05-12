"use client"

import React,{useState, useEffect} from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function AddCourse(){
  let c=null;
    const [message, setMessage]= useState('');
    const [count,setCount] = useState(0);
    const [formData,setFormData] = useState({
        title:'',
        instructors:'',
        phone:'',
        no_question:0
    });
    const [questions, setQuestions] = useState([1]);

    const handleQuestionChange = (e, index) => {
      const { name, value } = e.target;
      const updatedQuestions = [...questions];
      updatedQuestions[index][name] = value;
      setQuestions(updatedQuestions);
    };
  
    useEffect(() => {
      if(formData.no_question>0){
        setQuestions(new Array(formData.no_question).fill({ question: '', options: [], correctAnswerIndex: 0, description: '' }));
      }
     
    }, [formData.no_question]);
  
    const handleSubmit=(e)=>{

    };
   
    return(
        <>
  <div className='flex justify-center p-4'>
  <Tabs defaultValue="course" className="w-[900px] ">
  <TabsList className="flex">
    <TabsTrigger value="course" className="w-[450px] p-3">Add New Course</TabsTrigger>
    <TabsTrigger value="assignment" className="w-[450px] p-3">Add new Assignment</TabsTrigger>
  </TabsList>
  <TabsContent value="course" className="flex flex-col p-8">
      <fieldset className="flex gap-4 p-4 " >
        <label className="w-[200px]" htmlFor=" Course ID">
          Course ID
        </label>
        <input className="w-[600px]" id="id" />
      </fieldset>
      <fieldset className="flex gap-4 p-4 " >
        <label className="w-[200px]" htmlFor=" Course name">
          Course Name
        </label>
        <input className="w-[600px]" id="name" />
      </fieldset>
      <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="instructors">
          Instructors
        </label>
        <input className="w-[600px]" id="instructors" />
        </fieldset>
        <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="category">
            Category
        </label>
        <input className="w-[600px]" id="category" />
        </fieldset>
        <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="enrollmentstatus">
            Enrollment Status
        </label>
        <input className="w-[600px]" id="enrollmentstatus"/>
        </fieldset>
        <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="duration">
            Duration
        </label>
        <input className="w-[600px]" id="duration"/>
        </fieldset>
        <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="syllabus">
            Syllabus
        </label>
        <input className="w-[600px]" type='file' id="syllabus"/>
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Save changes</button>
      </div>
    </TabsContent>

<TabsContent value="assignment" className="flex flex-col p-8">

<fieldset className="Fieldset">
  <label className="w-[200px] mb-3" htmlFor="questions">
    No of questions
  </label>
  <input className="w-[800px] p-3" id="questions" type='number' value={formData.no_question} onChange={(e) => setFormData({ ...formData, no_question: parseInt(e.target.value) })}/>
</fieldset>
{questions.map((question, index) => (
              <div key={index} className="mt-8">
                <fieldset className="Fieldset">
                  <label className="w-[200px] mb-3" htmlFor={`question${index}`}>
                    Question {index + 1}
                  </label>
                  <input className="w-[800px] p-3" id={`question${index}`} name={`question${index}`} value={question.question} onChange={(e) => handleQuestionChange(e, index)} />
                </fieldset>
                {/* Additional fields for options, correct answer index, and description */}
                {/* Modify these as per your requirement */}
              </div>
            ))}
<div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
  <button className="Button green">Save changes</button>
</div>
</TabsContent>
</Tabs>
</div>

        </>
    )
}



