import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/pictures/logo.png";
import User from "../assets/pictures/user.jpg";

function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("gmail");
    navigate("/");
  };
  return (
    <div className="bg-green tablet:w-full tablet:h-[100px] laptop:h-[110px] desktop:h-[60px] flex">
      <div className="h-full w-1/3 flex justify-left items-center tablet:pl-4 laptop:pl-8">
        <img
          src={Logo}
          alt="Logo"
          className="tablet:h-[60px] tablet:w-[120px] laptop:h-[75px] laptop:w-[150px] desktop:h-[65px] desktop:w-[130px]"
        />
      </div>
      <div className="h-full w-1/3 flex justify-center items-center">
        <p className="font-inter font-semibold text-white tablet:text-[18px] laptop:text-[22px] desktop:text-[18px]">
          04/12/2023 | Sunday
        </p>
      </div>
      <div className="h-full w-1/3 flex">
        <div className="h-full w-2/4 flex justify-left items-center pl-2">
          <p className="font-inter text-white tablet:text-[15px] laptop:text-[18px] desktop:text-[14px]">
            Good Morning! Peter Jhon
          </p>
        </div>
        <div className="h-full w-1/4 tablet:p-2 flex items-center justify-center">
          <div className="bg-white tablet:h-[55px] tablet:w-[55px] desktop:h-[44px] desktop:w-[44px] rounded-full shadow-black shadow-sm flex items-center justify-center">
            <img
              src={User}
              alt="user"
              className="tablet:h-[53px] tablet:w-[53px] desktop:h-[42px] desktop:w-[42px] rounded-full"
            />
          </div>
        </div>
        <div className="h-full w-1/4 flex items-center justify-center">
          <button onClick={logout} className="bg-red tablet:h-[35px] tablet:w-[50px] tablet:text-[12px] laptop:h-[40px] laptop:w-[60px] laptop:text-[15px] text-white rounded-lg shadow-black shadow-sm">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
