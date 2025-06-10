import React from 'react';
import Image from "next/image";
import Navigation from '@/components/navigation/page';
import Footer from '@/components/footer/page';

export default function page() {
  return (
    <>
      <Navigation />
      <section className="sm:pt-28 pt-20 w-full">
        <p className="bg-[#213e8c] text-center text-white text-6xl font-bold lg:p-16 p-20">About US</p>
      </section>
      <section className='h-full bg-white pl-60 pr-60 pt-10 pb-10'>
        <p className='text-center text-lg leading-loose text-gray-600'>At Crown Prince School, we are committed to creating a vibrant, nurturing learning environment where every child is encouraged to thrive. Our goal is to ignite a lifelong love for learning by focusing on the unique needs, interests, and potential of each student.
          <br /><br />
          We embrace a child-centered approach that supports both academic excellence and personal growth. Through cross-curricular themes and interactive teaching methods, we help learners make meaningful connections across subjects, build critical thinking skills, and develop a deep understanding of the world around them.

          Our dedicated team of educators works collaboratively to ensure that students are not only prepared for academic success, but also equipped with the confidence, creativity, and character needed to flourish in life. At Crown Prince School, we believe that education should be joyful, purposeful, and transformative."</p>
      </section>
      <section>
        <div className="bg-[#e63888] p-10 text-white text-3xl font-medium text-center">
          <p>The focus must always be in learning.</p>

          <p>The fundamental tool for that is collaboration.</p>
        </div>
      </section>
      <section className="bg-white grid grid-cols-2 text-black">
        <div >
          <p>Our Vision</p>
          <p>Finland International School Maldives is built on experiences and know-how from the Finnish education system in respect of Maldivian culture to cherish students’ joy of learning and to encourage teachers’ pedagogical collaboration leading to success.</p>
       <img src="/images/" alt="vision"/>
        </div>
      </section>

      <Footer />
    </>
  )
}
