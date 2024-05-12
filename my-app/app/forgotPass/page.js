"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5500/elearning/auth/forgetPass', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                // // Redirect to reset password page
                // router.push('/resetPassword');
            } else {
                setMessage(data.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Internal Server Error');
        }
    };

    return (
        <div>
            <h1 className="text-center mt-8">FORGOT PASSWORD</h1>
            <div className="w-96 mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Email" className="block"><strong>Email</strong></label>
                    <input
                        type="email"
                        id="Email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}
