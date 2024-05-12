"use client"
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useFormContext} from '@/components/formContext';
import Link from 'next/link';
export default function ExamCenter(){
    const router=useRouter();

    const { formData, setFormData } = useFormContext();
    console.log(formData);
    const handleChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setFormData({
            ...formData,
            centerSelection: {
                ...formData.centerSelection,
                [e.target.name]: e.target.value,
            },
        });
        console.log(formData);
      };
    

    const handleSubmit=(e)=>{
        e.preventDefault();
      
        if (formData.centerSelection.examCity && formData.centerSelection.examCity !== 'select' && formData.centerSelection.examCenter && formData.centerSelection.examCenter !== 'select') {
            router.push('/preview');
        }
       
    }

  
    return(
        <>
      <div>
      <h1 className="bg-blue-300 text-black text-center h-15 shadow-2xl p-5">EXAM REGISTRATION</h1>
    <div className=" w-[450px] h-full mx-auto  mt-5 bg-blue-200 p-4 rounded-2xl shadow-2xl mb-5">
           
            <form onSubmit={handleSubmit}>
            <h3 className="text-center mt-4">Exam Center Details</h3>
                <label htmlFor="examCity" className="block mb-2">City</label>
                <select name="examCity" id="examCity" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required>
                    <option value="select">Select City</option>
                    <option value="Chennai">Chennai</option>
                </select>


                <label htmlFor="examCenter" className="block mb-2">Center</label>
                <select name="examCenter" id="examCenter" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required>
                    <option value="select">Select Center</option>
                    <option value="Sri Sairam Engineering College">Sri Sairam Engineering College</option>
                </select>
                
                <div className='flex flex-row p-2'>
                     <button className="rounded-xl bg-blue-300 hover:bg-blue-400 px-2 py-2 flex mr-auto" ><Link href="/exam_registration_upload">Back</Link></button>
                    <button type="submit" className="rounded-xl bg-blue-300 hover:bg-blue-400 px-2 py-2 flex ml-auto" >Continue</button>
                     </div>
            </form>
        </div>    
     </div>
        </>
    )
}