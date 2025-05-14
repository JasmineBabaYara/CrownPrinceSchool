import React from 'react';
import Image from "next/image";
import Navigation from '@/components/navigation/page';
import Footer from "@/components/footer/page";
export default function page() {
  return (
    <>
      <Navigation />
      <section className="sm:pt-28 pt-20 w-full">
        <p className="bg-[#213e8c] text-center text-white text-6xl font-bold lg:p-16 p-20">Contact</p>
      </section>
      <section className="flex xl:flex-row flex-col items-center justify-center gap-4 bg-white p-8">
        <div className='w-full'>
          <p className="xl:text-4xl text-3xl font-semibold font-mono text-center capitalize text-black mb-4">Get in Touch</p>
          <p className='text-gray-600 text-center font-light text-lg'>Ghana - Kumasi, Buokrom Estate</p>
          <p className='text-gray-600 text-center font-light text-lg'>crownprinceschool@gmail.com | +233551507812</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-light_blue w-full">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Eiffel+Tower,Paris+France`}
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
