import React from "react";
import Bgimg from "../assets/pictures/login_bg.jpg";
import Logo from "../assets/pictures/logo.png";

function Login() {
  return (
    <div
      className="w-screen h-screen flex bg-cover bg-center text-center text-black"
      style={{
        backgroundImage: `url(${Bgimg})`,
      }}
    >
      <div className="flex justify-center items-center bg-black h-full w-full opacity-80">
        <div className="h-1/2 w-1/4">
          <form>
            <div className="flex justify-center">
              <img src={Logo} className="h-1/4 w-1/4" alt="starbuck-logo" />
            </div>
            <div>
              <h1 className="text-3xl font-inter font-semibold text-green">
                Log into your Account
              </h1>
              <p className="font-inter text-sm text-white">
                Welcome back! Please enter your details!
              </p>
            </div>
            <div className="pt-6">
              <input
                className="bg-black border border-green h-[40px] w-3/4 rounded-lg text-center placeholder:text-center placeholder:text-green placeholder:font-inter placeholder:text-sm focus:bg-grey focus:border-2 focus:text-white focus:placeholder:text-white"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="pt-6">
              <input
                className="bg-black border border-green h-[40px] w-3/4 rounded-lg text-center placeholder:text-center placeholder:text-green placeholder:font-inter placeholder:text-sm focus:bg-grey focus:border-2 focus:text-white focus:placeholder:text-white"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="pt-5">
              <button className="text-white font-inter font-semibold bg-green h-[35px] w-2/5 rounded-lg shadow-grey shadow-md hover:shadow-grey hover:shadow-lg">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
