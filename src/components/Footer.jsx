import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <div className=" foot bg-[#2c3e50]  flex justify-between align-middle absolute left-[50%] translate-x-[-50%] w-full p-28">
          <div className="w-1/3 my-5 item">
            <h3>LOCATION</h3>
            <p>2215 John Daniel</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="w-1/3  my-5 item">
            <h3>AROUND THE WEB</h3>
            <ul className='list-none flex justify-center gap-5'>
              <li><i className='fa-brands fa-facebook'></i></li>
              <li><i className='fa-brands fa-twitter'></i></li>
              <li><i className='fa-brands fa-linkedin'></i></li>
              <li><i className='fa-solid fa-globe'></i></li>
            </ul>
          </div>
          <div className="w-1/3  my-5 item">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
          <div className="copy-right bg-[#1a252f] absolute left-[50%] translate-x-[-50%] w-full bottom-0 p-4">
            <p className='mx-auto'>Copyright © Your Website 2021</p>
          </div>
        </div>
      </footer>
    </>
  )
}
