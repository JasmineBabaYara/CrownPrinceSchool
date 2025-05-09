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
  <section className="flex items-center justify-center gap-4">
    <div>
      <p>Get in Touch</p>
      <p></p>
    </div>
    <div className="overflow-hidden rounded-xl border border-light_blue laptop:w-2/3 w-full">
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
