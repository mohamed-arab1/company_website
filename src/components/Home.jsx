import React from "react";
import logo from '../assets/logo.png'
import home_photo from "../assets/home.png"

export default function Home(){

    return(
        <>
        <section id="home" className="container mx-auto h-screen bg-[#002f69] ">
        <dev   className="grid grid-cols-2 gap-2">
            <dev className=" mt-20 ml-10"> 
                <img src={home_photo}  alt="home photo" />
            </dev>
            <dev className=" mt-20 ml-10 animate__animated animate__fadeIn">
            <dev className="flex items-center gap-3 ">
            <img src={logo} alt=""  />
            <h3 className="text-white" >Vandemar Construction</h3>
            </dev>

            <h2 className="text-[85px] text-white font-bold">
                Let's make your vision come to life
            </h2>
            <button className="bg-[#387fd1] p-4 cursor-pointer btn font-bold text-[#ffffff]">Learn More</button>          
            </dev>
        </dev>
        </section>
        </>

    )
}
