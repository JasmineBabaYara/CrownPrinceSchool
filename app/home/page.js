"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PiStudentBold } from "react-icons/pi";
import { HiOutlineFlag } from "react-icons/hi2";
import { MdOutlineCastForEducation } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import Swiper from "./components/swiper.js";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="sm:pt-20 pt-10 bg-white"
    >
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        className="h-screen bg-white flex items-center justify-center content-center header"
      >
        <div className="block text-center">
          <motion.p className="capitalize text-2xl text-[#280250] font-sans">
            Crown Prince School
          </motion.p>
          <motion.p className="text-[#280250] lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-black font-mono uppercase mt-10">
            admissions <br /> 2025
          </motion.p>
          <motion.div
            className="flex justify-center mt-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link href="/admissions" className="capitalize text-center p-6 w-full rounded-full bg-[#efd22d] text-[#fffdba] font-bold font-mono text-4xl">
              apply now
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Info + Stats */}
      <section className="xl:grid flex flex-col grid-cols-2 mt-2 gap-2">
        <motion.div
          className="flex items-center justify-center homeSecond w-full"
          variants={fadeInLeft}
          viewport={{ once: true }}
        >
          <p className="sm:text-xl text-lg font-mono text-black font-semibold p-12 leading-loose italic text-center">
            At Crown Prince School, we are a committed learning community focused on empowering every student to thrive academically and personally. Guided by a passion for excellence in education, we believe every child deserves a strong foundation for a bright and successful future.
          </p>
        </motion.div>

        <motion.div variants={fadeInRight}>
          <img src="/images/homeSecond.jpg" width="100%" />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="bg-black grid lg:grid-cols-5 grid-cols-1 col-span-2 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
              }
            }
          }}
        >
          {[
            { icon: <PiStudentBold size="60" />, value: "380+", label: "Students", bg: "#e63888" },
            { icon: <LiaPeopleCarrySolid size="60" />, value: "45+", label: "Pedagogical Staff", bg: "#00ade6" },
            { icon: <HiOutlineFlag size="60" />, value: "13+", label: "Nationalities", bg: "#fbd200" },
            { icon: <MdOutlineCastForEducation size="60" />, value: "20+", label: "Ghanaian Educators", bg: "#7f35b2" },
            { icon: <PiUsersBold size="60" />, value: "1 : 16", label: "Ratio of Educators Per Students", bg: "#ace152" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="h-80 p-2 flex flex-col items-center justify-center"
              style={{ backgroundColor: item.bg }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              {item.icon}
              <p className="font-bold text-5xl mt-4">{item.value}</p>
              <p className="font-light text-lg">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Highlights */}
      <motion.section
        className="w-full pt-10 bg-[#eef4ff]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="lg:text-6xl text-4xl text-black font-medium font-sans text-center">Highlights</p>
        <p className="text-grey-200 text-center font-mono xl:pl-40 xl:pr-40 p-2 xl:mt-6 mt-0">
          Explore the vibrant life at Crown Prince School through our key initiatives and activities that foster creativity, innovation, and holistic student development.
        </p>
        <Swiper />
      </motion.section>

      {/* Footer */}
      <motion.section
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#0e2973]">
          <p className="lg:text-2xl text-lg text-white font-medium font-mono text-center lg:p-20 p-6 leading-loose">
            At Crown Prince School, we strive to ignite a lifelong passion for learning. Our child-centered approach fosters creativity and critical thinking. We emphasize cross-curricular themes and collaborative teaching to ensure each learner's success and growth.
          </p>
        </div>
        <img src="/images/homefooter.jpg" width="auto" className='' />
      </motion.section>
    </motion.div>
  );
}
