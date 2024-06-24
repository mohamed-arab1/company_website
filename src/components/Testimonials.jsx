import React from "react";
export default function Testimonials(){
    return(
        <>
        <section id="testimonials" className="container mx-auto h-screen bg-[#d9dcde]">
            <h2 className="text-[40px] font-bold text-[#002f69] pl-10 pt-5">Client Testimonials</h2>
            <div className="grid grid-cols-3 gap-3 pt-20 pl-20 ">
                <div>
                    <div className="h-1 w-20 bg-[#002f69]"> </div>
                    <p className="pt-10 text-[#002f69] text-[20px]">
                        Boost your product and <br/> service's credibility by adding <br/> testimonials from your clients. <br/>
                        people love recommendations <br/> so feedback from others who've <br/> tried it is invaluable.
                    </p>
                    <p className="pt-5 text-[#002f69] font-bold text-[25px]">
                        Tristan clousso,shutter <br/> club NY
                    </p>
                </div>
                <div>
                <div className="h-1 w-20 bg-[#002f69]"> </div>
                    <p className="pt-10 text-[#002f69] text-[20px]">
                        Boost your product and <br/> service's credibility by adding <br/> testimonials from your clients. <br/>
                        <p className="pt-3">
                            people love recommendations <br/> so feedback from others who've <br/> tried it is invaluable.
                        </p>
                    </p>
                    <p className="pt-5 text-[#002f69] font-bold text-[25px]">
                        Shani Mensah, Vivarily
                    </p>
                </div>
                <div>
                <div className="h-1 w-20 bg-[#002f69]"> </div>
                    <p className="pt-10 text-[#002f69] text-[20px]">
                        Boost your product and <br/> service's credibility by adding <br/> testimonials from your clients. <br/>
                        people love recommendations <br/> so feedback from others who've <br/> tried it is invaluable.
                        <p className="pt-3">
                            add them here!
                        </p>
                         
                    </p>
                    <p className="pt-5 text-[#002f69] font-bold text-[25px]">
                        Paisley Finwood
                    </p>
                </div>

            </div>

            

        </section>
        </>
    )
}