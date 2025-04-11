"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState();

  //responsive mode
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  //function to determine whether screen is being scrolled
  // useEffect(() => {
  //   //disable scroll on menu open
  //   if (open === true) {
  //     document.querySelector('body').style.overflow = 'hidden';
  //   } else {
  //     document.querySelector('body').style.overflow = 'scroll';
  //   }
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const shouldAddBackground = scrollPosition > 0;

  //     //if screen is moved add background color
  //     setIsScrolled(shouldAddBackground);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [open]);

  return (
    <div className="fixed z-10 w-full h-32 bg-transparent flex items-center lg:justify-center justify-between p-10  ">
      <div className="sidemenu lg:hidden" onClick={handleOpen}>
        {open ? (
          <FaTimes size={30} color="black" onClick={() => closeMenu()} />
        ) : (
          <FaBars size={30} color="black" />
        )}
      </div>
        <p className='uppercase text-7xl text-black lg:ml-20 lg:mr-20' style={{ fontFamily: 'nautilus_pompilius' }}>CPS</p>
        <div className={open ? "nav-menu active" : 'nav-menu flex lg:items-center lg:justify-center gap-10'}>
          <Link href="/" className={`uppercase text-base text-black relative ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="#about" className={`uppercase text-base text-black relative ${pathname === '#about' ? 'active' : ''}`}>About Us</Link>
          <Link href="#menu" className={`uppercase text-base text-black relative ${pathname === '#menu' ? 'active' : ''}`}>junior school</Link>
          <Link href="#gallery" className={`uppercase text-base text-black relative ${pathname === '#gallery' ? 'active' : ''}`}>senior school</Link>
          <Link href="#order" className={`uppercase text-base text-black relative ${pathname === '/order' ? 'active' : ''}`}>admissions </Link>
          <Link href="/contact" className={`uppercase text-base text-black relative ${pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </div>
    </div>
  );
}
