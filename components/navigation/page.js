"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
// import logo from "../../public/images/logo.jpg"

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState();

  //responsive mode
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const closeMenu = () => setOpen(false);


  return (
    <div className="fixed z-10 w-full h-32 bg-white flex items-center lg:justify-center justify-between p-10 border-b-2 border-gray-20 navbar">
      <div className="sidemenu lg:hidden" onClick={handleOpen}>
        {open ? (
          <FaTimes size={30} color="black" onClick={() => closeMenu()} />
        ) : (
          <FaBars size={30} color="black" />
        )}
      </div>
      <Image src="/images/logo.jpg" alt="logo" width="200" height="200"  />
        <div className={open ? "nav-menu active" : 'nav-menu flex lg:items-center lg:justify-center gap-10'}>
          <Link href="/" className={`uppercase text-base text-black relative hover:text-[#d8bf30] ${pathname === '/' ? 'active' : ''}`} onClick={() => closeMenu()} >Home</Link>
          <Link href="/#about" className={`uppercase text-base text-black relative hover:text-[#d8bf30] ${pathname === '#about' ? 'active' : ''}`}>About Us</Link>
          <Link href="/#menu" className={`uppercase text-base text-black relative hover:text-[#d8bf30] ${pathname === '#menu' ? 'active' : ''}`}>junior school</Link>
          <Link href="/#gallery" className={`uppercase text-base text-black relative hover:text-[#d8bf30] ${pathname === '#gallery' ? 'active' : ''}`}>senior school</Link>
          <Link href="/admissions" className={`uppercase text-base text-black relative hover:text-[#d8bf30] ${pathname === '/admissions' ? 'active' : ''}`}>admissions </Link>
          <Link href="/contact" className={`uppercase text-base text-black relative hover:text-[#d8bf30] ${pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </div>
    </div>
  );
}
