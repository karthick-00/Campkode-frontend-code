"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, {useState,useEffect, useRef} from 'react';
import AutoScroll from "embla-carousel-auto-scroll";


export default function Partners(){
  const Images =[
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam1',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam1',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam1',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam1',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam1',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam',alt:'Logo'},
    {image:'https://th.bing.com/th/id/OIP.TeAPpO3dp1tYfex-FZ-nBQHaHa?w=145&h=180&c=7&r=0&o=5&pid=1.7',name:'Sairam1',alt:'Logo'}
  ]
    const[images,setImages] = useState([]);
  
    useEffect(()=>{
      setImages(Images);
    },[]);

    const carouselRef = useRef(null);

  return (
    <div className="relative flex justify-center">
        
    <Carousel
      className="lg:w-[85%] w-screen m-5 carousel "
      opts={{
        align: "start",
        loop: true,
        axis: "x",
      }}
      plugins={[
        AutoScroll({
          speed: 5,
          startDelay: 0,
          stopOnInteraction: false,
        }),
      ]}
      ref={carouselRef} 
    >
      <CarouselContent>
        {images &&
          images.map((img, index) => (
            <CarouselItem
              className=" md:basis-1/6 basis-1/2 max-w-fit md:pl-10 flex items-center"
              key={index}
            >
              <Image
                src={img.image}
                alt={img.name}
                className="object-contain h-32  p-4 w-fit"
                width={300}
                height={300}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
    </div>
  );
};