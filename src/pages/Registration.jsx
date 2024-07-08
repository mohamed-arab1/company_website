import { Link } from "react-router-dom";
import LOGIN from "../assets/Illustration login.png";
import { useForm } from "react-hook-form";
import InputAuth from "../elements/InputAuth";
import { useState } from "react";
import axios from "axios";
import { REGISTER, baseURL } from "../api/Api";



export default function Registration() {
  
  const [form, setForm] = useState({
    firstName: "",
    lastName :"",
    email: "",
    password: "",
    confirmPassword: "",
});

// const [accept, setAccept] = useState(false);

const [err, setErr] = useState("");

function handleFormChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}

  const {
          register,
          handleSubmit,
        formState: { errors },
      } = useForm();

   
      async function ONSubmit() {
        try {
            const res = await axios.post(`${baseURL}/${REGISTER}`, form);          
            window.location.pathname = `/`;
        } catch (err) {
            if (err.response.status === 400) {
                if (form.confirmPassword !== form.password) {
                  console.log(err)
                     setErr("Password does not match");
                } else {
                    setErr("user already exist!");
                }
            } 
          }
        }

  return (
    <>
      <div className="register">
          <div className="flex flex-wrap">
            <div className="bg-[#F4F4F4] h-[100vh] w-[50%]">
              <img
                src={LOGIN}
                alt="img"
                className="w-[600px] h-[600px] ml-[100px] mt-[55px]"
                ></img>
            </div>
            <div>
            <form
             onSubmit={handleSubmit(ONSubmit)}            
             className="mt-[90px] ml-[100px] relative border-b-[2px] border-[#ECECF0]"
            >
                <div>
                  <h1 className="font-bold text-3xl text-[#002f69] mb-4">Register Now</h1>
                  <p className="text-[#002f69] mb-[40px]">
                    Please fill your information below
                  </p>
                </div>
                <InputAuth register={register} required="firstName is required" type="text"
               minLength={{ value: 3, message: "first Name must be at least 3 characters" }} name="firstName" placeholder="Enter your firstName"
               value={form.firstName}
               onChange={handleFormChange}
               />
                {errors.firstName && <p className="text-rose-700">Please enter your firstName.</p>}

                <InputAuth register={register} required="lastName is required" type="text"
               minLength={{ value: 3, message: "Last name must be at least 3 characters" }} name="lastName" placeholder="Enter your lastName"
               value={form.lastName}
               onChange={handleFormChange}
               />
              {errors.lastName && <p className="text-rose-700">Please enter your lastName.</p>}

                <InputAuth register={register} label="E-mail:"  required="E-mail is required" type="email"
            name="email" placeholder="Enter your Email"
            value={form.email}
            onChange={handleFormChange}
            />
                {errors.email && <p className="text-rose-700">Please enter your email.</p>}

                
                <InputAuth  register={register} label="password:"  required="password is required" type="password"
                minLength={{ value: 3, message: "password must be at least 3 characters" }} name="password" placeholder="Enter your password" 
                value={form.password}
                onChange={handleFormChange}
                
                />
              
              {errors.password && <p className="text-rose-700">Please enter your password.</p>}

                <InputAuth register={register} label="password:"  required="password is required" type="password"
                minLength={{ value: 3, message: "confirmPassword must be at least 3 characters" }} name="confirmPassword" placeholder="Enter your password Confirmation" 
                value={form.confirmPassword}
                onChange={handleFormChange}
                />
                {errors.confirmPassword && <p className="text-rose-700">Please enter your confirmPassword.</p>}

                  {err !== "" && <span className="error text-rose-700">{err}</span>}


                 <button type="submit" className="w-[500px] h-[40px] bg-[#002f69] text-[#ffffff] font-bold block rounded-lg text-lg hover:bg-[#ffffff] hover:text-[#002f69] hover:border-[#002f69] border cursor-pointer	button mt-[25px] mb-[20px] ">Register</button>


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
