import React, { useState } from 'react'
import { useEffect } from 'react';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowButton(scrollTop > 300); // Show button when scrolling beyond 100 pixels
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
    <button onClick={scrollToTop} className={`back-to-top ${showButton ? 'show font-bold text-2xl bg-slate-400 rounded-full fixed bottom-16 max-[820px]:bottom-10 max-[391px]:bottom-5 max-[391px]:right-6 max-[391px]:text-xl max-[391px]:w-10 max-[391px]:h-10 z-10 right-16 w-12 h-12 leading-12' : ''}`} style={{backgroundColor:'#4cd6ff'}}>
      <i class="  fa fa-arrow-up" style={{color:'#fff'}}></i>
    </button>
    
    </>
   
  )
}

export default BackToTop