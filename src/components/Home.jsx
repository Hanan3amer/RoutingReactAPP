import React from 'react';
import avatar from '../assets/avatar.svg';
import { NavLink } from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <header className="bg-[#1abc9c]  h-[100vh] flex justify-center">
                <div className="container text-center absolute top-[30%]">
                    <img src={avatar} alt="Avatar"className='w-[300px] mx-auto'/>
                    <h1>START FRAMEWORK</h1>
                    <div className="star flex flex-row justify-center gap-5">
                        <div className="line1 bg-white h-1 w-[80px]"></div>
                        <i className="fa-solid fa-star "></i>
                        <div className="line1 bg-white h-1 w-[80px]"></div>
                    </div>
                    <div className="info">
                        <p>Graphic Artist- Web Designer - illustrator</p>
                    </div>
                </div>
            </header>
        </>
    );
}