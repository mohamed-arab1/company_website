import { Link } from "react-router-dom";
import LOGIN from "../assets/Illustration login.png";
import { useForm } from "react-hook-form";
import InputAuth from "../elements/InputAuth";



export default function registration() {

  const {
          register,
          handleSubmit,
        formState: { errors },
      } = useForm();

   
  return (
    <>
      <div className="register">
          <div className="flex">
            <div className="hidden lg:flex bg-[#F4F4F4] h-[100vh] w-[50%]">
              <img
                src={LOGIN}
                alt="img"
                className="w-[100%] h-[600px]  mt-[55px]"
                ></img>
            </div>
            <div className="mx-auto">
            <form
             onSubmit={handleSubmit}            
             className="w-[50%] mt-[150px]  relative border-b-[2px] border-[#ECECF0] "
            >
                <div>
                  <h1 className="font-bold text-3xl text-[#002f69] mb-4">Register Now</h1>
                  <p className="text-[#002f69] mb-[40px]">
                    Please fill your information below
                  </p>
                </div>
                <InputAuth register={register} required="name is required" type="text"
               minLength={{ value: 3, message: "Last name must be at least 3 characters" }} name="Name" placeholder="Enter your name"
               />
                <InputAuth register={register} label="E-mail:"  required="E-mail is required" type="email"
            name="email" placeholder="Enter your Email"
            />
                {errors.email && <p>Please enter your email.</p>}

                
                <InputAuth  register={register} label="password:"  required="password is required" type="text"
                minLength={{ value: 3, message: "password must be at least 3 characters" }} name="password" placeholder="Enter your password" 
                />
              

                <InputAuth register={register} label="password:"  required="password is required" type="text"
                minLength={{ value: 3, message: "password must be at least 3 characters" }} name="password" placeholder="Enter your password Confirmation" 
              
                />

                 <button type="submit" className="w-[500px] h-[40px] bg-[#002f69] text-[#ffffff] font-bold block rounded-lg text-lg hover:bg-[#ffffff] hover:text-[#002f69] hover:border-[#002f69] border cursor-pointer	button mb-[30px]">Register</button>

              
            </form>
            <div className="mt-[10px] flex items-center	justify-center	ml-[100px]">
            <p >Already have an account you can login here! <Link to='/login' className="text-[#002f69] ml-[130px] cursor-pointer">Login</Link></p>

              </div>
            </div>

          </div>
      </div>
      
   
    </>
  );
}
