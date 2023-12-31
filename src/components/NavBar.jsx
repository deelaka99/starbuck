import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/pictures/logo.png";
import User from "../assets/pictures/user.jpg";

function NavBar() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [greet, setGreet] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    var hours = date.getHours();

    if (hours < 12) setGreet("morning");
    else if (hours >= 12 && hours < 17) setGreet("afternoon");
    else if (hours >= 17 && hours <= 24) setGreet("evening");

    return () => {
      clearInterval(timer);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("gmail");
    navigate("/");
  };
  return (
    <div className="bg-green tablet:w-full tablet:h-[6vh] laptop:h-[8vh] desktop:h-[8vh] flex">
      <div className="h-full w-1/3 flex justify-left items-center tablet:pl-4 laptop:pl-8">
        <img
          src={Logo}
          alt="Logo"
          className="tablet:h-[60px] tablet:w-[120px] laptop:h-[50px] laptop:w-[100px] desktop:h-[60px] desktop:w-[120px]"
        />
      </div>
      <div className="h-full w-1/3 flex justify-center items-center">
        <p className="font-inter font-semibold text-white tablet:text-[18px] laptop:text-[18px] desktop:text-[18px]">
          {date.toDateString()}
        </p>
      </div>
      <div className="h-full w-1/3 flex">
        <div className="h-full w-2/4 flex justify-left items-center pl-2">
          <p className="font-inter text-white tablet:text-[15px] laptop:text-[12px] desktop:text-[14px]">
            {"Good "+greet+"! Peter Jhon"}
          </p>
        </div>
        <div className="h-full w-1/4 tablet:p-2 flex items-center justify-center">
          <div className="bg-white tablet:h-[55px] tablet:w-[55px] laptop:h-[42px] laptop:w-[42px] desktop:h-[44px] desktop:w-[44px] rounded-full shadow-black shadow-sm flex items-center justify-center">
            <img
              src={User}
              alt="user"
              className="tablet:h-[53px] tablet:w-[53px] laptop:h-[40px] laptop:w-[40px] desktop:h-[42px] desktop:w-[42px] rounded-full"
            />
          </div>
        </div>
        <div className="h-full w-1/4 flex items-center justify-center">
          <button
            onClick={logout}
            className="bg-red tablet:h-[35px] tablet:w-[50px] tablet:text-[12px] laptop:h-[30px] laptop:w-[60px] laptop:text-[12px] text-white rounded-lg shadow-black shadow-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
