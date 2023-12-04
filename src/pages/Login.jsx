import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bgimg from "../assets/pictures/login_bg.jpg";
import Logo from "../assets/pictures/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already authenticated
    const isAuthenticated = localStorage.getItem("gmail");
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const signin = () => {
    if (email === "deelaka@gmail.com" && pw === "123") {
      console.log("Login success!");
      localStorage.setItem("gmail", true); // Save authentication token to indicate that the user is authenticated
      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password!");
    }
  };

  return (
    <div
      className="w-screen h-screen flex bg-cover bg-center text-center text-black"
      style={{
        backgroundImage: `url(${Bgimg})`,
      }}
    >
      <div className="flex justify-center items-center bg-black h-full w-full opacity-80">
        <div className="tablet:w-4/6 laptop:w-3/5 desktop:w-1/2">
          <div className="flex justify-center">
            <img
              src={Logo}
              className="tablet:h-1/3 tablet:w-1/3 laptop:h-1/4 laptop:w-1/4 desktop:h-1/5 desktop:w-1/5"
              alt="starbuck-logo"
            />
          </div>
          <div>
            <h1 className="tablet:text-4xl laptop:text-3xl desktop:text-2xl font-inter font-semibold text-green">
              Log into your Account
            </h1>
            <p className="font-inter tablet:text-lg laptop:text-sm text-white tablet:pt-2 laptop:pt-1">
              Welcome back! Please enter your details!
            </p>
          </div>
          <div className="tablet:pt-7 laptop:pt-5 desktop:pt-4">
            <input
              className="bg-black tablet:border border-green text-green tablet:text-lg laptop:text-sm tablet:h-[45px] laptop:h-[40px] desktop:h-[38px] tablet:w-5/6 laptop:w-1/2 rounded-lg text-center placeholder:text-center placeholder:text-green placeholder:font-inter tablet:placeholder:text-lg laptop:placeholder:text-sm focus:bg-grey focus:border-white focus:border-2 focus:text-white focus:placeholder:text-white"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="tablet:pt-3 laptop:pt-2">
            <input
              className="bg-black tablet:border border-green text-green tablet:text-lg laptop:text-sm tablet:h-[45px] laptop:h-[40px] desktop:h-[38px] tablet:w-5/6 laptop:w-1/2 rounded-lg text-center placeholder:text-center placeholder:text-green placeholder:font-inter tablet:placeholder:text-lg laptop:placeholder:text-sm focus:bg-grey focus:border-white focus:border-2 focus:text-white focus:placeholder:text-white"
              placeholder="Password"
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              required
            />
          </div>
          <div className="text-red">{error}</div>
          <div className="tablet:pt-7 laptop:pt-5 desktop:pt-4">
            <button
              type="submit"
              onClick={signin}
              className="text-white tablet:text-[23px] laptop:text-[18px] desktop:text-[15px] p-2 font-inter font-semibold bg-green tablet:h-[50px] laptop:h-[40px] desktop:h-[38px] tablet:w-2/5 laptop:w-1/3 desktop:w-[28%] rounded-lg shadow-grey shadow-md hover:shadow-grey hover:shadow-lg"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
