import React from "react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setBackToTopButton(true);
      }
      else { setBackToTopButton(false); }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 150,
      behavior: "smooth"
    })
  }
//dang thu crad
  return (
    <div className="App">
        {backToTopButton && (
        <button className='btn-backToTop' onClick={scrollUp} style={{
          position: "fixed",
          bottom:"50px",
          right:"50px",
          height:"50px",
          fontSize:"20px"
        }}><i class="fas fa-arrow-circle-up"></i></button>)}
    </div> 
  )
}
