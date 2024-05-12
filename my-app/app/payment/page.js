"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RazorpayButton from '@/components/Razorpay';
import Link from 'next/link';


export default function Payment() {
  const router = useRouter();


  return (
    <>
      <div className='flex justify-center  align-middle p-4 items-center h-screen'>
        <div className='rounded-lg p-6 w-[30vw] flex justify-center items-center flex-col shadow-xl bg-blue-50'>
          <p className='mb-8   text-xl'>Click here to Proceed </p>
          <RazorpayButton />

        </div>
      </div>
    </>
  )
}