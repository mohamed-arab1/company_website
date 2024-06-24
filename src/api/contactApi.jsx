import { toast } from "react-toastify";

const contactURL =  `${import.meta.env.VITE_BASE_URL}/contact`

export const onSubmit = async(data) => {
  try{
    toast.info("Processing your request...",);
    const res = await axios.post(contactURL, data)
    toast.success("your message send Successfully");
  }catch (error){
    toast.error("Something went wrong");
  }
}