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
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3962.291812443224!2d-1.5878732!3d6.7342097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb95c0dccd9259%3A0xd6d0c823f4aa8ac5!2sCrown%20Prince%20International%20Schoo!5e0!3m2!1sen!2sgh!4v1747405328879!5m2!1sen!2sgh"
            width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            style={{ border: '0' }} >
          </iframe>

        </div>
      </section>
      <Footer />
    </>
  )
}
