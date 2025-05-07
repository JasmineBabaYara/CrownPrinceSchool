import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import logo from "../../public/images/logo.jpg";

export default function page() {
  return (
    <div className="relative bottom font-sans">
            <div className="grid lg:grid-cols-3 grid-cols-1  bg-white sm:p-20 p-4">
                <div className='flex flex-col items-start'>
                <Image src="/images/logo.png" alt="logo" width="120" height="120" className='' />
                <p className="text-black text-xl font-bold font-sans">Crown Prince School</p>
               <div className="text-black text-base flex items-center gap-2 mt-4 font-mono"> <p className="font-semibold">Email: </p><a href="mailto:crownprinceschool@gmail.com">crownprinceschool@gmail.com</a> </div>
               <div className="text-black text-base flex items-center gap-2 mt-1 font-mono"> <p className="font-semibold">Call: </p><a href="tel:+233551507812">+233551507812</a> </div>
               <p className="text-black text-base mt-3 font-mono">Ghana - Kumasi, Buokrom Estate</p>
                </div>
                <div className='flex flex-col lg:items-center items-start justify-between mt-10'>
                  <div className='flex flex-col lg:items-center items-start'>
                  <p className="text-black text-xl font-bold font-sans">Accredited Member of </p>
                  <div className='flex sm:flex-row flex-col items-center gap-8'>
                    <Image src="/images/GES.jpg" width="250" height="200" />
                    <Image src="/images/nasia.jpg" width="250" height="200" />
                  </div>
                  </div>

                  <div className='flex items-center  gap-4 '>
                  <FaFacebookSquare size={50} color='blue'/>
                  <FaInstagramSquare size={50} color='red' />
                  <FaSquareXTwitter size={50} color='black' />
                  </div>
                </div>
                <div className='flex flex-col lg:items-center items-start gap-2 mt-10'>
                  <p className='text-xl text-black font-semibold capitalize font-sans'>Qiuck links</p>
                  <Link href="/"  className='text-base text-black capitalize font-mono sm:mt-4'>Home</Link>
                  <Link href="/admissions"  className='text-base text-black capitalize font-mono'>admissions</Link>
                  <Link href="/contact"  className='text-base text-black capitalize font-mono'>contact</Link>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#cd060e] p-4">
                <p className="text-white sm:text-sm text-xs font-sans">© 2025 by Crown Prince School | Terms of Use | Privacy Policy</p>
            </div>
        </div>
  )
}
