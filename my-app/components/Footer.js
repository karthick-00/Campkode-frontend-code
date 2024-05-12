import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
    return(
        <>
        <div className='flex flex-row justify-between align-middle items-center bg-zinc-300 px-4 py-2 text-blue-800'>
            <div className='justify-start'> <p>&copy; 2024 Your Company Name. All rights reserved.</p></div>
            <div className='flex align-middle items-center ml-auto  gap-4 '>
               <div> <Link href='#'><Image src='/fb.jpg' width={30} height={20}></Image></Link></div>
               <div> <Link href='#'><Image src='/twit.png' width={30} height={20}></Image></Link></div>
               <div> <Link href='#'><Image src='/insta.jpg' width={30} height={20}></Image></Link></div>
               <div>  <Link href='#'><Image src='/linkedin.jpg' width={30} height={20}></Image></Link></div>
            </div>
        </div>
        </>
    )
}