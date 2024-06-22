import React from "react";
export default function Why_us(){
    return(
        <>
        <section id="whyUs" className="container mx-auto h-screen bg-[#d9dcde] ">
            <div className=" grid grid-rows-2">
            <div className=" mt-28 ml-20 ">
                <div className="h-1 w-1/6 bg-[#002f69] "> </div>
                <p className="text-[43px] font-bold mt-5 text-[#002f69]">
                    Vandemar is built on our <br/>
                    founders' uniqe <br/>
                    outlook on construcrion
                </p>
            </div>
            <div className=" flex justify-end mr-20 mt-5 text-[20px] text-[#002f69]">
            Write a paragraph that talks about your company here.<br/>
             You can talk about your company's background,<br/>
              history, mission, vision, or philosophy. Anything that <br/>
              will introduce your brand's persona to your clients.<br/>
             This will help build a connection between you and <br/>
             them, that hopefully leads to a working relationship.
   
            </div>

            </div>
        </section>
        </>
    )
}