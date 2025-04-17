import React from 'react';
import Image from "next/image";
import logo from "../../public/images/logo.jpg";

export default function page() {
  return (
    <div className="relative bottom font-sans">
            <div className="grid grid-cols-3 place-items-start bg-white p-20">
                <div>
                <Image src={logo} alt="logo" width="200" height="200" className='' />
                <p className="text-black text-xl font-bold">Crown Prince School</p>
               <div className="text-black text-base flex items-center gap-2 mt-4"> <p className="font-semibold">Email: </p><a href="mailto:crownprinceschool@gmail.com">crownprinceschool@gmail.com</a> </div>
               <div className="text-black text-base flex items-center gap-2 mt-1"> <p className="font-semibold">Call: </p><a href="tel:+233551507812">+233551507812</a> </div>
               <p className="text-black text-base mt-3">Ghana - Kumasi, Buokrom Estate</p>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="flex items-center justify-center bg-[#cd060e] p-4">
                <p className="text-white text-sm font-sans">© 2025 by Crown Prince School | Terms of Use | Privacy Policy</p>
            </div>
        </div>
  )
}
