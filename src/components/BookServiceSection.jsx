import { useRef, useState } from "react";
import Button from "../elements/Button";
import PopUpModal from "../elements/PopUpModal";
import { motion, useInView } from 'framer-motion';
export default function BookServiceSection({toggleColor, rtl, title, dec, img}) {
  const [show, setShow] = useState(false)
  const [selectedTitle, setSelectedTitle] = useState('');
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const handleButtonClick = () => {
    setSelectedTitle(title);
    setShow(true);
  };
  
  return (
    <motion.section
    initial={{ opacity: 0}}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 0 }}
    transition={{ duration: 0.6 }}
    ref={ref}
      className={`${
        toggleColor
          ? "bg-[#002f69] text-[#f5f4f4] "
          : "text-[#002f69] bg-[#f5f4f4] "
      } px-2 pt-20`}
    >
      <section className={`container mx-auto  flex  justify-center`}>
        <motion.div
                ref={ref}

          className={`flex flex-wrap  items-center justify-center xl:justify-between ${
            rtl ? "flex-row-reverse" : ""
          }`}
        >
          <motion.div
          ref={ref}
                initial={{ opacity: 0, x: rtl ? 500 : -500 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : rtl ? 500 : -500 }}
                transition={{ duration: 1.3 }}>
          <img src={img} alt={title} width={700} height={500} loading="lazy"/>
          </motion.div>
          <motion.div 
          ref={ref}
                          initial={{ opacity: 0, x: rtl ? -500 : 500 }}
                          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : rtl ? -500 : 500 }}
                          transition={{ duration: 0.6 }}
           className="flex flex-col text-center">
            <h2 className="text-[30px] ">{title}</h2>
            <p className="text-[16px] max-w-[500px] py-10 mx-auto">{dec}</p>
            <Button onClick={handleButtonClick}  style={ rtl && "!bg-[#002f69] text-[#f5f4f4]  hover:!bg-[#f5f4f4] hover:!text-[#002f69] hover:!border-[#002f69]"}>
              Book Service
            </Button>
           {show && <PopUpModal onClose={()=> setShow(false)} selectedTitle={selectedTitle} />} 
          </motion.div>
        </motion.div>
      </section>
    </motion.section>
  );
}
