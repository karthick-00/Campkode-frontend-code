import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import {
  Button
} from "@/components/ui/button";
  import React from 'react';
import Link from 'next/link';
  export default function SheetComponent(){
    return(<>
    <Sheet>
      <div className="flex flex-row gap-16">
      <SheetTrigger>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg></SheetTrigger>
      
      </div>
  
  <SheetContent>
    <SheetHeader >
      
      <SheetTitle>
        <div className="text-red bg-blue-800 flex mx-auto">DashBoard</div></SheetTitle>
      <SheetClose>
            <button className="text-white hover:text-gray-200 focus:outline-none mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </SheetClose>
    </SheetHeader>
    <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-center gap-4">
            <Link href='/myCourses'>My Courses</Link>
            <Link href='/'>My Certification</Link>
            <Link href='/'>Results</Link>
          </div>
        </div>
  </SheetContent>
</Sheet>

    </>)
  }