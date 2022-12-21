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
      <div className="flex flex-col gap-[2rem] h-auto mt-[10%] ">
        <div className="w-[70%] mx-auto ">
          <h5 className="flex flex-col gap-[2rem] justify-between ">
            <span className="text-[#bed1d9] font-bold text-center mb-[2rem] ">
              <p className="text-center mt-[3rem] ">
                {day + " " + date + " " + time}
              </p>
            </span>
            <span className="text-left text-white font-bold ">Login</span>
          </h5>
        </div>

        <div className=" w-[70%] mx-auto my-[2rem] py-[2rem] px-[2rem] ">
          <Form />
        </div>
      </div>
    </Layout>
  );
};

export default Login;

const Form = () => {
  return (
    <div className="py-10 px-7 w-[60%] h-auto  ">
      <h2 className=" font-bold text-white text-[30px] ">
        Fill in your correct details
      </h2>
      <form className=" ">
        <div
          class={`${style.inputContainer} relative w-full  flex flex-col my-[1.5rem] `}
        >
          <input
            type="text"
            id="email"
            className={`${style.inputField} py-3 px-3`}
          />
          <label
            htmlFor="email"
            className="absolute px-4 py-4   duration-300 text-[13px]"
          >
            Enter your email
          </label>
        </div>

        <div
          className={`${style.inputContainer} relative w-full  flex flex-col my-[1.5rem] `}
        >
          <input
            type="password"
            id="password"
            className={`${style.inputField} py-3 px-3`}
            required
          />
          <label
            htmlFor="password"
            className="absolute  px-4 py-4  duration-300 text-[13px]"
          >
            Enter your password
          </label>
        </div>

        <button className="w-full h-[40px] font-medium uppercase font-poppins bg-[#04a9f5b0] hover:bg-[#04a9f5] text-white mt-[1rem] rounded-lg tracking-wider ">
          Login
        </button>
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
