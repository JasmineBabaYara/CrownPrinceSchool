import React from 'react';
import Navigation from '@/components/navigation/page';
import Image from "next/image";
import construction from "../public/images/construction.png";
import  Home  from './home/page';

export default function page() {
  return (
    <div className=' bg-white'>
      <Navigation />
      <Home/>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Image src={construction} width="700" height="1000" />
        <p className='text-5xl text-[#2c2c2c6e] font-bold mt-8'>COMING SOON</p>
        <p className='text-sm text-[#515151] mt-4'>The page you’re looking for is not available at the moment. Kindly revisit later.</p>
      </div>
    </div>
  )
}
