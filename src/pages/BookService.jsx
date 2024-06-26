import BookServiceSection from "../components/BookServiceSection"

import web from '../assets/web.png'
import mobile from '../assets/mobile.png'
import desktop from '../assets/desktop.png'

const BookServiceArray = [
  {id:1, title:"Web Applications",img:web,toggleColor: true, rtl: false, dec:"Our web application development services are designed to deliver high-performance, scalable, and secure solutions that meet your business objectives. Utilizing the latest technologies and frameworks, we create responsive and intuitive web applications that offer a superior user experience. From e-commerce platforms to complex enterprise solutions, our web applications are built to drive growth and efficiency."},
  {id:2, title:"Mobile Applications",img:mobile,toggleColor: false, rtl: true, dec:"With the proliferation of smartphones, having a mobile presence is more critical than ever. We specialize in developing both native and cross-platform mobile applications that are optimized for performance and user engagement. Our mobile apps are crafted to provide a seamless experience on both iOS and Android devices, ensuring that your brand stays connected with users on the go. Whether it's a consumer-facing app or an internal tool for your team, we create mobile solutions that deliver real value."},
  {id:3, title:"Desktop  Applications",img:desktop,toggleColor: true, rtl: false, dec:"For businesses requiring powerful and feature-rich desktop applications, our development team offers expertise in creating custom solutions tailored to your specific needs. Our desktop applications are designed to run efficiently on Windows, macOS, and Linux, providing robust functionality and superior performance. From productivity tools to complex data management systems, we build desktop applications that enhance your operational capabilities."},
]
const BookService = () => {
  return (
    <>
        {
          BookServiceArray.map(({id,title,img,dec,toggleColor,rtl})=>(
            <BookServiceSection key={id} title={title} img={img} dec={dec} toggleColor={toggleColor} rtl={rtl}/>
          ))
        }
    </>

  )
}

export default BookService
