"use client"
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useRouter} from 'next/navigation';
import {setToken} from '@/utils/getUser';
import {setUserId} from '@/utils/getUser';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    let token=null;
    let userId=null;
    // const history = useHistory();
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send a request to verify the password
        try {
            // Replace this with your actual API call to verify the credentials
            const response = await fetch('http://localhost:5500/elearning/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.status==200) {
                token = data.data.token;
                userId = data.data.userId;
                setToken(token);
                setUserId(userId);
                alert('Login Successful!!');
                router.push('/');
            } else if (response.status === 401) {
                  if (data.message === 'Invalid Password') {

                    setMessage('Invalid password. Please try again.');
                  } else if (data.message === 'Account not verified. Verification email sent.') {
               
                    setMessage('Your account is not verified. A verification email has been sent. Please verify your email.');
                  } 
            }
            else if(response.status === 404){
                setMessage('User does not exist');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }

    return (
        <div className='login-container' style={{ backgroundImage: "url('https://5.imimg.com/data5/SELLER/Default/2023/5/309688873/VV/II/TU/8675179/online-exam-software.jpg')" ,backdropFilter: "blur(20px)"}}>
            <div className='flex justify-center mt-8'>
                <div className="register-box">
                    <form className='flex flex-col gap-4 justify-center items-center align-middle' onSubmit={handleSubmit}>
                        <h1 className='text-lg font-bold'>Welcome Learners!!</h1>
                        <h4>Enter your Credentials to login</h4>
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input type="text" id="email" name="email" placeholder="Enter your username" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="submit-button" type="submit">LOGIN</button>
                        <a href="/forgotPass"><strong>Forgot Password?</strong></a>
                        <h3>Don't have an account? <a href="/signUp">Signup</a></h3>
                    </form>
                    <p className="mt-4 text-sm font-bold text-red-700">{message}</p>
                </div>
            </div>
        </div>
    );
}


