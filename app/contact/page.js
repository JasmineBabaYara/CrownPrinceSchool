import React from 'react';
import Image from "next/image";
import Navigation from '@/components/navigation/page';
import Footer from "@/components/footer/page";
export default function page() {
  return (
    <>
      <Navigation />
      <section className="sm:pt-28 pt-20 w-full">
        <p className="bg-[#213e8c] text-center text-white text-6xl font-bold p-16">Contact</p>
      </section>
      <section className="flex items-center justify-center gap-4 bg-white">
        <div className='w-full'>
          <p className="text-4xl font-semibold font-mono text-center capitalize text-black mb-4">Get in Touch</p>
          <p className='text-gray-600 text-center font-light text-lg'>Ghana - Kumasi, Buokrom Estate</p>
          <p className='text-gray-600 text-center font-light text-lg'>crownprinceschool@gmail.com | +233551507812</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-light_blue w-full">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place
  ?key=YOUR_API_KEY
  &q=Eiffel+Tower,Paris+France`}
            height="450"
            style={{ border: '0' }}
            allowFullscreen=""
            loading="lazy"
            className="w-full"></iframe>
        </div>
      </section>
      <Footer />
    </>
  )
}
