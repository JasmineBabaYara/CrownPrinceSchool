import React from 'react';
import Image from "next/image";
// import construction from "../../public/images/construction.png";
import Navigation from '@/components/navigation/page';

export default function page() {
  return (
    <>
 <Navigation />
    <div className='flex flex-col items-center justify-center h-screen bg-white'>
       
            <Image src="/images/construction.png" width="700" height="1000" />
            <p className='text-5xl text-[#2c2c2c6e] font-bold mt-8'>COMING SOON</p>
            <p className='text-sm text-[#515151] mt-4'>The page you’re looking for is not available at the moment. Kindly revisit later.</p>
          </div>
          <p>At Crown Prince School, we are committed to creating a vibrant, nurturing learning environment where every child is encouraged to thrive. Our goal is to ignite a lifelong love for learning by focusing on the unique needs, interests, and potential of each student.

We embrace a child-centered approach that supports both academic excellence and personal growth. Through cross-curricular themes and interactive teaching methods, we help learners make meaningful connections across subjects, build critical thinking skills, and develop a deep understanding of the world around them.

Our dedicated team of educators works collaboratively to ensure that students are not only prepared for academic success, but also equipped with the confidence, creativity, and character needed to flourish in life. At Crown Prince School, we believe that education should be joyful, purposeful, and transformative."</p>
          </>
  )
}
