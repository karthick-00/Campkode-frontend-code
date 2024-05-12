"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPassword(req,res) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Passwords don't match");
            return;
        }
        try {
            const resetToken = req.params.token;
            console.log(resetToken);
            const response = await fetch(`http://localhost:5500/elearning/auth/resetPass/${resetToken}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                // Redirect to login page after successful password reset
                router.push('/Login');
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
            <h1 className="text-center mt-8">RESET PASSWORD</h1>
            <div className="w-96 mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password" className="block"><strong>New Password</strong></label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
                        required
                    />
                    <label htmlFor="confirmPassword" className="block"><strong>Confirm Password</strong></label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
                    >
                        Reset Password
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}
