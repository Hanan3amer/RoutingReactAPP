import React from "react";
export default function About() {
    return (
        <>
           <div className="p-48">
           <h1>About Component</h1>
            <div className="star flex flex-row justify-center gap-5">
                <div className="line1 bg-white h-1 w-[80px]"></div>
                <i className="fa-solid fa-star "></i>
                <div className="line1 bg-white h-1 w-[80px]"></div>
            </div>
            <div className="flex flex-row justify-center gap-5 p-10 abc">
                <p className="w-1/2 ab">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className="w-1/2 ab">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
           </div>
        </>
    )
}