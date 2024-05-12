"use client"
import React,{useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import { useFormContext } from '@/components/formContext';
import Link from 'next/link';
export default function FileUploads(){
    const router = useRouter();
   
    const { formData, setFormData } = useFormContext();
    console.log(formData);
   
    const [errors, setErrors] = useState({
        photo:'',
        signature:'',
        idProof:''
    });
    const[selectedFile,setSelectedFile] = useState();

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
      
        if (file && file.size <= 20 * 1024 && file.size >=10 * 1024) { 
            setSelectedFile(file);
       
            const base64 = await convertToBase64(file);
            // setSelectedFile({...selectedFile,base64})
            setFormData({
                ...formData,
                fileUploads: {
                    ...formData.fileUploads,
                    [e.target.name]:base64,
                },
                fileNames:{
                    ...formData.fileNames,
                    [e.target.name]:file.name,
                },
                files:{
                    ...formData.files,
                    [e.target.name]:file,
                }
            });
            if(e.target.name==='photo'){
                errors.photo="";
            }
            if(e.target.name==='signature'){
                errors.signature="";
            }
            if(e.target.name==='idProof'){
                errors.idProof="";
            }
            console.log(formData);
        } else {
            setSelectedFile(null);
            console.log('error');
            console.log(e.target.name);
            if(e.target.name==='photo'){
                errors.photo="File size should range between 10kb to 20kb";
            }
            if(e.target.name==='signature'){
                errors.signature="File size should range between 10kb to 20kb";
            }
            if(e.target.name==='idProof'){
                errors.idProof="File size should range between 10kb to 20kb";
            }
        
        }
          
       
      };
    
      useEffect(() => {
    
        setFormData(prevFormData => ({
            ...prevFormData,
            fileUploads: {
                ...prevFormData.fileUploads,
           
            }
        }));
       
        // setSelectedFileNames(prevNames => ({
        //     ...prevNames,
          
        // }));
    }, []);

      function convertToBase64(file){
        return new Promise((resolve, reject)=>{
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = ()=>{
            resolve(fileReader.result)
          };
          fileReader.onerror =(error)=>{
            reject(error)
          }
        })

      }

     

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('called');
        const hasErrors = Object.values(errors).some(error => error !== '');
        if (!hasErrors) {
            router.push('/exam_center');
        } else {
            console.log('setting errors');
            setErrors(errors);
        }
    };


    return (
        <>
    
    <h1 className="bg-blue-300 text-black text-center h-15 shadow-2xl p-5">EXAM REGISTRATION</h1>
    <div className=" w-[450px] h-full mx-auto mt-5 bg-blue-200 p-4 rounded-2xl shadow-2xl mb-5">
         
            <form onSubmit={handleSubmit}>
            <h3 className="text-center mt-4 font-bold">File Uploads</h3>
            <h5 className="text-center mt-4 text-red-500">file size min:10kb max:20kb</h5>
                {/* <div className='flex flex-col items-center'> */}
                <label htmlFor="photo" className="block ">PassPort Size Photo</label>
                <input type="file" accept="image/*" id="photo" name='photo'  onChange={handleFileChange} className="w-[70%] px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 mb-4" required />
                {formData.fileNames.photo && <p>Selected file: {formData.fileNames.photo}</p>}
                {errors.photo && <p className="text-red-500">{errors.photo}</p>}
                    <label htmlFor="signature" className="block">Signature</label>
                    <input type="file" accept="image/*" id="signature" name='signature' onChange={handleFileChange} className="w-[70%] px-4 py-2 rounded-lg border border-gray-300 bg-white  focus:outline-none focus:border-blue-500 mb-4" required/>
                    {formData.fileNames.signature && <p>Selected file: {formData.fileNames.signature}</p>}
                    {errors.signature && <p className="text-red-500">{errors.signature}</p>}
                    <label htmlFor="idProof" className="block">ID Proof</label>   
                  <input type="file" accept="image/*" id="idProof" name='idProof'  onChange={handleFileChange} className="w-[70%] px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 mb-4" required />
                  {formData.fileNames.idProof && <p>Selected file: {formData.fileNames.idProof}</p>}
                  {errors.idProof && <p className="text-red-500">{errors.idProof}</p>}
                {/* </div> */}
                    <div className='flex flex-row'>
                     <button className="rounded-xl bg-blue-300 hover:bg-blue-400 px-2 py-2 flex mr-auto"><Link href="/exam_registration">Back</Link></button>
                    <button type="submit" className="rounded-xl bg-blue-300 hover:bg-blue-400 px-2 py-2 flex ml-auto" >Continue</button>
                     </div>
                    
            </form>
        </div>
  
    </>
    );
}



