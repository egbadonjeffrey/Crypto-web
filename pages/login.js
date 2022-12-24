import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import moment from "moment/moment";

import style from "../styles/contact.module.css";
import Link from "next/link";

const Login = () => {
  const [currentTime, setCurrentTime] = useState();

  let time = moment().format(" h:mm:ss a");
  let day = moment().format("dddd");
  let date = moment().format("MMMM Do YYYY");

  const updateTime = () => {
    time = moment().format("h:mm:ss a");
    setCurrentTime(time);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <Layout title="Login page">
      <div className="flex flex-col gap-[2rem] h-auto mt-[20%] tablet:mt-[10%] ">
        <div className="w-[90%] tablet:w-[70%] mx-auto ">
          <h5 className="flex flex-col gap-[2rem] justify-between ">
            <span className="text-[#bed1d9] font-bold text-center mb-[2rem] ">
              <p className="text-center mt-[3rem] ">
                {day + " " + date + " " + time}
              </p>
            </span>

            <span className="text-left text-white font-bold ">Login</span>
          </h5>
        </div>

        <div className=" w-[90%] tablet:w-[70%] mx-auto my-[2rem] py-[2rem] px-[1rem] tablet:px-[2rem] -mt-[5%] ">
          <Form />
        </div>
      </div>
    </Layout>
  );
};

export default Login;

const Form = () => {
  return (
    <div className="py-10 px-2 tablet:px-7 w-full h-auto  ">
      <h2 className=" font-bold text-white text-[30px] ">
        Fill in your correct details
      </h2>
      <form className=" ">
        <div className="relative">
          <input
            type="text"
            id="firstname"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="firstname"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Your Email
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="firstname"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="firstname"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Enter your Password
          </label>
        </div>

        <div className="w-full text-center">
          <button className="w-full laptop:w-[50%] h-[40px]   font-medium uppercase font-poppins bg-[#04a9f5b0] hover:bg-[#04a9f5] text-white mt-[1rem] rounded-lg tracking-wider ">
            Login
          </button>
        </div>
      </form>
      <div className="flex flex-row justify-between w-full mt-[2rem] px-[1rem] ">
        <Link href="/signup" className="text-[#04a9f5] hover:underline ">
          Sign Up Here
        </Link>
        <Link href="#" className="text-[#04a9f5] hover:underline ">
          Forgot Password ?
        </Link>
      </div>
    </div>
  );
};
