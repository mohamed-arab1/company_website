import LOGINIMG from "../assets/Illustration login.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputAuth from "../elements/InputAuth";
import { useState } from "react";
import axios from "axios";
import { baseURL, LOGIN } from "../api/Api";
import Cookie from 'cookie-universal';




export default function Login() { 
  const [form, setForm] = useState({
    email: "",
    password: "",
});  
const [err, setErr] = useState("");

  const {
    register,
    handleSubmit,
  formState: { errors },
} = useForm();

function handleFormChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}
const cookie = Cookie();

//Handle Submit
async function ONSubmit() {
  try {
      const res = await axios.post(`${baseURL}/${LOGIN}`, form);
      console.log(res)
      const token = res.data.access_token;
      cookie.set("companyWebsite", token);
      window.location.pathname = `/`;
  } catch (err) {
      if (err.response.status === 400 ) {
          setErr("Wrong Email or Password");
      } 
  }
}

    return (
        <>
       <div className="login " >
          <div className="flex flex-wrap">
            <div className="bg-[#F4F4F4] h-[100vh] w-[50%] ">
              <img
                src={LOGINIMG}
                alt="img"
               className="w-[600px] h-[600px] ml-[100px] mt-[55px]"
              ></img>
            </div>
            <div>
            <form
              onSubmit={handleSubmit(ONSubmit)}            

              className="mt-[150px] ml-[100px] relative border-[#ECECF0] border-b-[2px]"
            >
                <div>
                  <h1 className="font-bold text-3xl text-[#002f69] mb-4">Login</h1>
                  <p className="text-[#002f69] mb-[40px]">
                    Please fill your information below
                  </p>
                </div>
                <InputAuth register={register} label="E-mail:"  required="E-mail is required" type="email"
            name="email" placeholder="Enter your Email"
            value={form.email}
            onChange={handleFormChange}
       
            />
                {errors.email && <p className="text-rose-700">Please enter your email.</p>}

                <InputAuth register={register} label="password:"  required="password is required" type="password"
                minLength={{ value: 3, message: "password must be at least 3 characters" }} name="password" placeholder="Enter your password" 
                value={form.password}
                onChange={handleFormChange}
                />
                {errors.password && <p className="text-rose-700">Please enter your password.</p>}

                {err !== "" && <span className="text-rose-700">{err}</span>}

                <button type="submit" className="w-[500px] h-[40px] bg-[#002f69] text-[#ffffff] font-bold block rounded-lg text-lg hover:bg-[#ffffff] hover:text-[#002f69]  hover:border-[#002f69] border cursor-pointer button mt-[25px] mb-[20px] ">Login</button>

            </form>
            <div className="mt-[30px] flex items-center	justify-center	ml-[100px]">
            <p >Don’t an account you can Register here! <Link to='/registration' className="text-[#002f69] ml-[130px] cursor-pointer">Register</Link></p>

              </div>

            </div>

          </div>
      </div>
        </>
    );
}
