import { useState } from "react";
import Button from "../elements/Button";
import PopUpModal from "../elements/PopUpModal";
export default function BookServiceSection({toggleColor, rtl, title, dec, img}) {
  const [show, setShow] = useState(false)
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleButtonClick = () => {
    setSelectedTitle(title);
    setShow(true);
  };
  return (
    <section
      className={`${
        toggleColor
          ? "bg-[#002f69] text-[#f5f4f4] "
          : "text-[#002f69] bg-[#f5f4f4] "
      } px-2 pt-20`}
    >
      <section className={`container mx-auto  flex  justify-center`}>
        <div
          className={`flex flex-wrap  items-center justify-center xl:justify-between ${
            rtl ? "flex-row-reverse" : ""
          }`}
        >
          <img src={img} alt={title} width={700} height={500} loading="lazy"/>
          <div className="flex flex-col text-center">
            <h2 className="text-[30px] ">{title}</h2>
            <p className="text-[16px] max-w-[500px] py-10 mx-auto">{dec}</p>
            <Button onClick={handleButtonClick}  style={ rtl && "!bg-[#002f69] text-[#f5f4f4]  hover:!bg-[#f5f4f4] hover:!text-[#002f69] hover:!border-[#002f69]"}>
              Book Service
            </Button>
           {show && <PopUpModal onClose={()=> setShow(false)} selectedTitle={selectedTitle} />} 
          </div>
        </div>
      </section>
    </section>
  );
}
