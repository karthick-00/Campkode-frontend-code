"use client"
import React ,{useState, useEffect} from 'react';
import { Country, State, City }  from 'country-state-city';

import { Axios } from 'axios';
import { useRouter } from 'next/navigation';
import { useFormContext } from '@/components/formContext';
import Link from 'next/link';

export default function personalDetails() {
    const router = useRouter();


    const[states,setStates]=useState([]);
    const[cities,setCities] = useState([]);
    const[country,setCountry]=useState('');
    const[state,setState]=useState('');

  
    const { formData, setFormData } = useFormContext();

    const [errors, setErrors] = useState({

            dOB: '',
            phone: '',
            rePhone: '',
            altPhone: ''
    });

    const handleChange = (e) => {
        if(e.target.name==='country'){
            setCountry(e.target.value);
        }
        if(e.target.name==='state'){
            setState(e.target.value);
        }
       
        setFormData({
            ...formData,
            personalDetails: {
                ...formData.personalDetails,
                [e.target.name]: e.target.value,
            },
        });
        console.log("sdfa",formData);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            router.push('/exam_registration_upload');
        } else {
            setErrors(errors);
        }
    };

    const validateForm = () => {
        const errors = {};
        const currentDate = new Date();
        const dobDate = new Date(formData.personalDetails.dOB);
        if(dobDate> new Date(currentDate.getFullYear()-15,currentDate.getMonth(),currentDate.getDate()) || dobDate>currentDate){
            errors.dOB='Invalid DOB'
        }
        if (formData.personalDetails.phone.toString().length!==10) {
            errors.phone = 'Invalid Phone Number';
        }
        if(formData.personalDetails.rePhone.toString()!==(formData.personalDetails.phone).toString()){
            errors.rePhone='Phone Number Mismatched';
        }
        if(formData.personalDetails.altPhone.toString().length!==10){
            errors.altPhone='Invalid Alternate Phone Number';
        }

        return errors;
    };
    // useEffect(()=>{
      
    //     // setCountries(countries);
  
    // },[]);
    const countryObjects = Country.getAllCountries();
    const countries = countryObjects.map(country => ({
        code: country.isoCode,
        name: country.name
      }));

    useEffect(()=>{
        if(country){
        try {
            console.log(country);
            const stateObjects = State.getStatesOfCountry(country);
          
            setStates(stateObjects.map(state=>state.name));
          } catch (error) {
            console.error('Error:', error.message);
          }
        }  
    },[country]);

    useEffect(()=>{
        if(state && country){
            try{
        const stateObjects=State.getStatesOfCountry(country);
        const stateCode = stateObjects.find(s => s.name === state);
                console.log(stateCode.isoCode);
        const cityObjects = City.getCitiesOfState(country, stateCode.isoCode);
        setCities(cityObjects.map(city =>city.name));
            }
            catch(error){
                console.error('Error:',error);
            }
        }
    },[state,country]);
    
    return (
        <div>
            <h1 className="bg-blue-300 text-black text-center h-15 shadow-2xl p-5">EXAM REGISTRATION</h1>
            <div className=" w-[700px] h-full mx-auto mt-5 bg-blue-200 p-4 rounded-2xl shadow-2xl mb-5">
                <form onSubmit={handleSubmit}>
                <h3 className="text-center mt-4">Personal Details</h3>
                    <label htmlFor="fname" className="block">First Name:</label>
                    <input type="text" id="fname" name='fname' value={formData.personalDetails.fname} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />
            
                    <label htmlFor="lname" className="block">Last Name:</label>
                    <input type="text" id="lname" name='lname' value={formData.personalDetails.lname} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required/>
                
                    <label htmlFor="email" className="block">Email:</label>
                    <input type="email" id="email" name='email' value={formData.personalDetails.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />
           
                    <label htmlFor="Date" className="block">Date Of Birth:</label>
                    <input type="date" id="dOB" name='dOB' value={formData.personalDetails.dOB} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />
                    {errors.dOB && <span className="text-red-500">{errors.dOB}</span>}
                    <label htmlFor="Country" className="block">Country:</label>
                    <select name="country" id="country" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required>
                    <option value="">Select Country</option>
                    {countries.map(country => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                    ))}
                    </select>
                    <label htmlFor="State" className="block">State:</label>
                    <select name="state" id="state" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required>
                    <option value="">Select State</option>
                    {states.map((name,index)=> (
                         <option key={index} value={name}>
                                         {name}
                         </option>
                    ))}
                    </select>
                 
                    <label htmlFor="City" className="block">City:</label>
                    <select name="city" id="city" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required>
                    <option value="">Select City</option>
                    {cities.map((name, index) => (
                         <option key={index} value={name}>
                                         {name}
                         </option>
                    ))}
                    </select>
                 
                    <label htmlFor="phone" className="block">Phone Number:</label>
                    <input type="number" id="phone" name='phone' value={formData.personalDetails.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />
                    {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                    <label htmlFor="phone1" className="block">Re-enter Phone Number:</label>
                    <input type="number" id="rePhone" name='rePhone' value={formData.personalDetails.rePhone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />
                    {errors.rePhone && <span className="text-red-500">{errors.rePhone}</span>}
                    <label htmlFor="phone2" className="block">Alternative Number:</label>
                    <input type="number" id="altPhone"name='altPhone' value={formData.personalDetails.altPhone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />
                    {errors.altPhone && <span className="text-red-500">{errors.altPhone}</span>}
                    {/* <label htmlFor="role" className="block">What is your role:</label>
                    <input type="text" id="role" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required /> */}
                     <div className='flex flex-row'>
                     <button className="rounded-xl bg-blue-300 hover:bg-blue-400 px-2 py-2 flex mr-auto" onClick={() => window.history.back()}>Back</button>
                    <button type="submit" className="rounded-xl bg-blue-300 hover:bg-blue-400 px-2 py-2 flex ml-auto" >Continue</button>
                     </div>
                     
                </form>
            </div>
        </div>
    );

    
}

