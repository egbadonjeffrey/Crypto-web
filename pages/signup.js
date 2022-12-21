import React, { useState, useEffect } from "react";
import Link from "next/link";

import style from "../styles/contact.module.css";

import moment from "moment/moment";
import Layout from "../components/Layout";

const Signup = () => {
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
    <Layout title="Sign up">
      <div className="flex flex-col gap-[2rem] h-auto mt-[10%] ">
        <div className="w-[70%] mx-auto ">
          <h5 className="flex flex-col gap-[2rem] justify-between ">
            <span className="text-[#bed1d9] font-bold text-center mb-[2rem] ">
              <p className="text-center mt-[3rem] ">
                {day + " " + date + " " + time}
              </p>
            </span>
            <span className="text-left text-white font-bold ">Sign up</span>
          </h5>
        </div>

        <div className=" w-[70%] mx-auto my-[2rem] py-[2rem] px-[2rem] ">
          <Form />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;

const Form = () => {
  return (
    <div className="py-10 px-7 w-[60%] h-auto  ">
      <h2 className=" font-bold text-white text-[30px] ">
        Fill in your correct details
      </h2>
      <form className="text-[#767676] ">
        <div class="relative">
          <input
            type="text"
            id="firstname"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="firstname"
            class="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Enter your First Name
          </label>
        </div>

        <div class="relative">
          <input
            type="text"
            id="lastname"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="lastname"
            class="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Enter your Last Name
          </label>
        </div>

        <div class="relative">
          <input
            type="phone"
            id="phone"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="phone"
            class="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Enter your Phone Number
          </label>
        </div>

        <div class="relative">
          <input
            type="text"
            id="state"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="state"
            class="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            State
          </label>
        </div>

        <div class="relative">
          <input
            type="email"
            id="email"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="email"
            class="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Enter your Email
          </label>
        </div>

        <div class="relative">
          <input
            type="text"
            id="dateofbirth"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="dateofbirth"
            class="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            DOB dd/mm/yy
          </label>
        </div>

        <div class="relative">
          <input
            type="password"
            id="password"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="password"
            class="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Password
          </label>
        </div>

        <div class="relative">
          <input
            type="password"
            id="confirmpassword"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            for="confirmpassword"
            class="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Re-Enter Password
          </label>
        </div>

        <button className="w-full h-[40px] font-medium uppercase font-poppins bg-[#04a9f5b0] hover:bg-[#04a9f5] text-white mt-[1rem] rounded-lg tracking-wider ">
          Sign up
        </button>
      </form>
      <div className="flex flex-row gap-[1rem] w-full mt-[2rem] px-[1rem] ">
        <span className="text-[#222425] ">Already have an account ?</span>
        <Link href="/login" className="text-[#04a9f5] hover:underline ">
          Login Here...
        </Link>
      </div>
    </div>
  );
};
