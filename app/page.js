"use client"
import React, {useState, useEffect} from 'react';
import Navigation from '@/components/navigation/page';
import Footer from '@/components/footer/page';
import Image from "next/image";
// import construction from "../public/images/construction.png";
import  Home  from './home/page';

export default function page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> 
  {
    const timer = setTimeout(()=> setIsLoading(false), 1000);
    return()=> clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading ? 
    <div className='fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center '>
      <img src='/images/logo.png' className="lg:w-80 w-40 animate-pulse"/>
      </div>
    :    
     <>
      <Navigation />
      <Home/>
      <Footer /> 
    </>
    }

    </>
  )
}
