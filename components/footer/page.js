import React from 'react';
import Image from "next/image";
import Link from 'next/link';
// import logo from "../../public/images/logo.jpg";

export default function page() {
  return (
    <div className="relative bottom font-sans">
            <div className="grid lg:grid-cols-3 grid-cols-1 place-items-start bg-white p-20">
                <div>
                <Image src="/images/logo.png" alt="logo" width="120" height="120" className='' />
                <p className="text-black text-xl font-bold font-sans">Crown Prince School</p>
               <div className="text-black text-base flex items-center gap-2 mt-4 font-mono"> <p className="font-semibold">Email: </p><a href="mailto:crownprinceschool@gmail.com">crownprinceschool@gmail.com</a> </div>
               <div className="text-black text-base flex items-center gap-2 mt-1 font-mono"> <p className="font-semibold">Call: </p><a href="tel:+233551507812">+233551507812</a> </div>
               <p className="text-black text-base mt-3 font-mono">Ghana - Kumasi, Buokrom Estate</p>
                </div>
                <div>
                  <div className='flex items-center gap-8'></div>
                  <div className='flex items-center gap-4'></div>
                </div>
                <div className='flex flex-col gap-2 mt-10'>
                  <p className='text-xl text-black font-semibold capitalize font-sans'>Qiuck links</p>
                  <Link href="/"  className='text-base text-black capitalize font-mono mt-4'>Home</Link>
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
