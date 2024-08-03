import React, { useRef, useState } from 'react';
import img1 from "../assets/poert1.png";
import img2 from "../assets/port2.png";
import img3 from "../assets/port3.png";

export default function Portfolio() {
  let [toggle, setToggle] = useState(false);
  let [imgsrc, setImgSrc] = useState('');

  let toggleLightbox = (src) => {
    setToggle(!toggle);
    setImgSrc(src);
  };
  let boximg = useRef(null)
  let closeImg = (e) => {
    if (boximg.current == e.target) {
      setToggle(false);
    }
  };

  return (
    <>
      <style>{'body { background-color: white; }'}</style>
      <section>
        <div className="top mt-24">
          <h1 className='text-[#2c3e50]'>PORTFOLIO COMPONENT</h1>
          <div className="star flex flex-row justify-center gap-5">
            <div className="line1 bg-[#2c3e50] h-1 w-[80px]"></div>
            <i className="fa-solid fa-star text-[#2c3e50]"></i>
            <div className="line1 bg-[#2c3e50] h-1 w-[80px]"></div>
          </div>
        </div>
        <div className="row flex justify-center align-middle my-5">
          <div className="img w-1/3 relative" onClick={() => toggleLightbox(img1)}>
            <div className="over-lay absolute mb-5 flex justify-center align-middle text-center">
              <i className="fa-solid fa-plus fa-3x"></i>
            </div>
            <img src={img1} alt="Portfolio Image" className='w-full' />
          </div>
          <div className="img w-1/3 relative" onClick={() => toggleLightbox(img2)}>
            <div className="over-lay absolute mb-5 flex justify-center align-middle text-center">
              <i className="fa-solid fa-plus fa-3x"></i>
            </div>
            <img src={img2} alt="Portfolio Image" className='w-full' />
          </div>
          <div className="img w-1/3 relative" onClick={() => toggleLightbox(img3)}>
            <div className="over-lay absolute mb-5 flex justify-center align-middle text-center">
              <i className="fa-solid fa-plus fa-3x"></i>
            </div>
            <img src={img3} alt="Portfolio Image" className='w-full' />
          </div>
        </div>
        <div className="row flex justify-center align-middle my-5">
          <div className="img w-1/3 relative" onClick={() => toggleLightbox(img1)}>
            <div className="over-lay absolute mb-5 flex justify-center align-middle text-center">
              <i className="fa-solid fa-plus fa-3x"></i>
            </div>
            <img src={img1} alt="Portfolio Image" className='w-full' />
          </div>
          <div className="img w-1/3 relative" onClick={() => toggleLightbox(img2)}>
            <div className="over-lay absolute mb-5 flex justify-center align-middle text-center">
              <i className="fa-solid fa-plus fa-3x"></i>
            </div>
            <img src={img2} alt="Portfolio Image" className='w-full' />
          </div>
          <div className="img w-1/3 relative" onClick={() => toggleLightbox(img3)}>
            <div className="over-lay absolute mb-5 flex justify-center align-middle text-center">
              <i className="fa-solid fa-plus fa-3x"></i>
            </div>
            <img src={img3} alt="Portfolio Image" className='w-full' />
          </div>
        </div>
        <div id="lightBox" className={`fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.7)] justify-center text-center ${toggle ? 'flex' : 'hidden'}`}
        ref={boximg} onClick={closeImg}>
          <div id="lightBox-item" className='h-[70vh] w-[50%]'>
            {toggle && <img src={imgsrc} className="w-full h-full" />}
          </div>
        </div>
      </section>
    </>
  );
}