import React from 'react';
import Link from 'next/link';
export default async function AdminPage(){
    return(
        <>
        <div className='flex justify-center '>
            <button>
            <Link href='/addCourse' >Add course</Link>
            </button>
        </div>
        </>
    )
}