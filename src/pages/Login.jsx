import  "./auth.css";
import LOGIN from "../assets/Illustration login.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";

export default function Login() {
    const {
          register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    
    return (
        <>
        {/* <Navbar></Navbar> */}
       <div className="login" id="login">
          <div className="content">
            <div className="loginImg">
              <img
                src={LOGIN}
                alt="img"
                style={{
                  width: "600px",
                  height: "600px",
                  marginLeft: "100px",
                  marginTop: "55px",
                }}
              ></img>
            </div>
            <div>
            <form
              onSubmit={handleSubmit((data) => console.log(data))}
              className="form"
            >
                <div>
                  <h1 className="title-login">Sign In</h1>
                  <p className="login-titlep">
                    Please fill your information below
                  </p>
                </div>
                <input {...register("email")} label="E-mail:"  required="E-mail is required" type="email"
            name="email" placeholder="Enter your Email"
             pattern={{ value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Enter a valid email Ex:(email@example.com)"
            }}/>
                {errors.email && <p>Please enter your email.</p>}

                <input label="password:"  required="password is required" type="text"
                minLength={{ value: 3, message: "password must be at least 3 characters" }} name="password" placeholder="Enter your password" />
                
                <input type="submit" className="button"/>

            </form>
            <div className="afterForm">
            <p >Don’t an account you can Register here! <Link to='/registration' className="link">Sign Up</Link></p>

              </div>

            </div>
          
          </div>
      </div>
        </>
    );
}
