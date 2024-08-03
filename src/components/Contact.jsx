import React from 'react'

export default function Contact() {
  return (
    <>
      <style >
        {'body { background-color: white; }'}
      </style>
      <h1 className='text-[#2c3e50]'>Contact Section</h1>
      <div className="star flex flex-row justify-center gap-5">
        <div className="line1 bg-[#2c3e50] h-1 w-[80px]"></div>
        <i className="fa-solid fa-star text-[#2c3e50]"></i>
        <div className="line1 bg-[#2c3e50] h-1 w-[80px]"></div>
      </div>
      <section className='form my-5'>
        <form>
          <input type="text" name="Uname" id="Uname" placeholder="userName" />
          <input type="number" name="uage" id="uage" placeholder="userAge" />
          <input type="email" name="uemail" id="uemail" placeholder="userEmail" />
          <input type="password" name="pass" id="pass" placeholder="userPassword" />
        </form>
        <button className='bg-[#1abc9c] px-3 py-2'>Send message</button>
      </section>
    </>
  )
}
