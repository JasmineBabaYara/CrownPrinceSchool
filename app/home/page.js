import React from 'react';
import Link from 'next/link';
import Image from "next/image";
// import logo from "../../public/images/logo.jpg"

export default function page() {
  return (
    <div className="sm:pt-20 pt-10 h-screen bg-white flex items-center justify-center content-center header">
      <section className="">
        <div className='block'>
        {/* <Image src={logo} alt="logo" width="500" height="500" className='' /> */}
        <p className="capitalize text-center text-2xl text-[#280250] font-sans">Crown Prince school</p>
        <p className="text-[#280250] lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-black font-mono uppercase text-center mt-10"> admissions <br />2025</p>
    <Link className="flex justify-center mt-16 capitalize text-center p-6 w-full rounded-full bg-[#efd22d] text-[#fffdba] font-bold font-mono text-4xl" href="/admissions">apply now</Link>
        </div>
      </section>
    </div>
  )
}
