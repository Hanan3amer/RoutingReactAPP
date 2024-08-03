import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Nav() {
    return (
        <nav className='bg-[#2c3e50] flex justify-between align-middle absolute left-[50%] translate-x-[-50%] w-full top-0'>
            <div className="logo">
                <h1>Start Framework</h1>
            </div>
            <div className="links p-[24px]">
                <ul className='flex gap-3 justify-center  p-4'>
                    {/* <li><NavLink to={"/"}>Home</NavLink></li> */}
                    <li><NavLink to={"about"} className='text-white text'>ABOUT</NavLink></li>
                    <li><NavLink to={"portfolio"} className='text-white'>PORTFOLIO</NavLink></li>
                    <li><NavLink to={"contact"} className='text-white'>CONTACT</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
