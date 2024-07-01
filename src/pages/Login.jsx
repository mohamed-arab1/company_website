import LOGIN from "../assets/Illustration login.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputAuth from "../elements/InputAuth";



export default function Login() {   
  const {
    register,
    handleSubmit,
  formState: { errors },
} = useForm();

    return (
        <>
       <div className="login " >
          <div className="flex">
            <div className="hidden lg:flex bg-[#F4F4F4] h-[100vh] w-[50%]">
              <img
                src={LOGIN}
                alt="img"
               className="w-[100%] h-[600px] mt-[55px]"
              ></img>
            </div>
            <div className="mx-auto px-[20px]">
            <form
              onSubmit={handleSubmit}            

              className="w-[50%] mt-[150px]  relative border-[#ECECF0] border-b-[2px]"
            >
                <div>
                  <h1 className="font-bold text-3xl text-[#002f69] mb-4">Login</h1>
                  <p className="text-[#002f69] mb-[40px]">
                    Please fill your information below
                  </p>
                </div>
                <InputAuth register={register} label="E-mail:"  required="E-mail is required" type="email"
            name="email" placeholder="Enter your Email"
       
            />
                {errors.email && <p>Please enter your email.</p>}

                <InputAuth register={register} label="password:"  required="password is required" type="text"
                minLength={{ value: 3, message: "password must be at least 3 characters" }} name="password" placeholder="Enter your password" 
               
                />
                
                <button type="submit" className="w-[500px] h-[40px] bg-[#002f69] text-[#ffffff] font-bold block rounded-lg text-lg hover:bg-[#ffffff] hover:text-[#002f69]  hover:border-[#002f69] border cursor-pointer button mb-[30px]">Login</button>

            </form>
            <div className="mt-[30px] flex items-center	justify-center">
            <p >Don’t an account you can Register here! <Link to='/registration' className="text-[#002f69] ml-[130px] cursor-pointer">Register</Link></p>

              </div>

            </div>

          </div>
      </div>
        </>
    );
}
