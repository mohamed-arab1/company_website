import { Link } from "react-router-dom";
import LOGIN from "../assets/Illustration login.png";
import  "./auth.css";
import { useForm } from "react-hook-form";


export default function registration() {

  const {
          register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  return (
    <>
      <div className="register" id="register">
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
                  <h1 className="title-login">Register Now</h1>
                  <p className="login-titlep">
                    Please fill your information below
                  </p>
                </div>
                <input {...register("Name")} label="Name:"  required="name is required" type="text"
               minLength={{ value: 3, message: "Last name must be at least 3 characters" }} name="Name" placeholder="Enter your name" />
                {errors.Name && <p>name is required.</p>}

                <input {...register("email")} label="E-mail:"  required="E-mail is required" type="email"
            name="email" placeholder="Enter your Email"
            />
                {errors.email && <p>Please enter your email.</p>}

                
                <input  {...register("password")} label="password:"  required="password is required" type="text"
                minLength={{ value: 3, message: "password must be at least 3 characters" }} name="password" placeholder="Enter your password" />
                {errors.password && <p>Please enter your password</p>}

                <input {...register("passwordCO")} label="password:"  required="password is required" type="text"
                minLength={{ value: 3, message: "password must be at least 3 characters" }} name="password" placeholder="Enter your password Confirmation"  />

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
