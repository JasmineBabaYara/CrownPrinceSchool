import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { PiStudentBold } from "react-icons/pi";
import { HiOutlineFlag } from "react-icons/hi2";
import { MdOutlineCastForEducation } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
// import logo from "../../public/images/logo.jpg"

export default function page() {
  return (
    <div className="sm:pt-20 pt-10 bg-white">
      <section className=" h-screen bg-white flex items-center justify-center content-center header">
        <div className='block'>
          {/* <Image src={logo} alt="logo" width="500" height="500" className='' /> */}
          <p className="capitalize text-center text-2xl text-[#280250] font-sans">Crown Prince school</p>
          <p className="text-[#280250] lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-black font-mono uppercase text-center mt-10"> admissions <br />2025</p>
          <Link className="flex justify-center mt-16 capitalize text-center p-6 w-full rounded-full bg-[#efd22d] text-[#fffdba] font-bold font-mono text-4xl" href="/admissions">apply now</Link>
        </div>
      </section>
      <section className='xl:grid flex flex-col grid-cols-2 mt-2 gap-2'>
        <div className="flex items-center justify-center homeSecond w-full">
          <p className="sm:text-xl text-lg font-mono text-black font-semibold p-12 leading-loose italic text-center">At Crown Prince School, we are a committed learning community focused on empowering every student to thrive academically and personally. Guided by a passion for excellence in education, we believe every child deserves a strong foundation for a bright and successful future.</p>
        </div>
        <div>
          <img src="/images/homeSecond.jpg" width="100%"  />
        </div>
        <div className='bg-black grid lg:grid-cols-5 grid-cols-1 col-span-2 text-white'>
          <div className="bg-[#e63888] h-80 p-2 flex flex-col items-center justify-center">
            <PiStudentBold color='white' size="60" />
            <p className="font-bold text-5xl mt-4">380+</p>
            < p className="font-light text-lg">Students</p>
          </div>
          <div className="bg-[#00ade6] h-80 p-2 flex flex-col items-center justify-center">
            <LiaPeopleCarrySolid color='white' size="60" />
            <p className="font-bold text-5xl mt-4">45+</p>
            < p className="font-light text-lg">Pedagogical Staff</p>
          </div>
          <div className="bg-[#fbd200] h-80 p-2 flex flex-col items-center justify-center">
            <HiOutlineFlag color='white' size="60" />
            <p className="font-bold text-5xl mt-4">13+</p>
            < p className="font-light text-lg">Nationalities</p>
          </div>
          <div className="bg-[#7f35b2] h-80 p-2 flex flex-col items-center justify-center">
            <MdOutlineCastForEducation color='white' size="60" />
            <p className="font-bold text-5xl mt-4">20+</p>
            < p className="font-light text-lg">Ghanaian Educators</p>
          </div>
          <div className="bg-[#ace152] h-80 p-2 flex flex-col items-center justify-center">
            <PiUsersBold color='white' size="60" />
            <p className="font-bold text-5xl mt-4">1 : 16</p>
            < p className="font-light text-lg">Ratio of Educators Per Students</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-8">
        <p className="text-6xl text-black font-medium font-sans">Highlights</p>
      </section>
      <section className="flex flex-col items-center mt-6">
        <div className="bg-[#0e2973]">
          <p className="lg:text-2xl text-lg text-white font-medium font-mono text-center lg:p-20 p-2 leading-loose">At Crown Prince School, we aim to spark a lifelong love for learning. Our child-centered approach, guided by the Finnish curriculum, emphasizes cross-curricular themes and collaborative teaching to support every learner’s growth</p>
        </div>
        <img src="/images/homefooter.jpg" width="auto" height="" className='' />
      </section>
    </div>
  )
}
