import React, { useState, useEffect } from "react";
import Link from "next/link";

import style from "../styles/contact.module.css";

import moment from "moment/moment";
import Layout from "../components/Layout";

const Country = [
  {
    id: 1,
    name: "Select Your Country",
  },
  {
    id: 2,
    name: "Nigeria",
  },
  {
    id: 3,
    name: "Ghana",
  },
  {
    id: 4,
    name: "Egypt",
  },
  {
    id: 5,
    name: "Morocco",
  },
  {
    id: 6,
    name: "Argentina",
  },
];

const Currency = [
  {
    id: 1,
    name: "Select Your Currency",
    symbol: "",
  },
  {
    id: 2,
    name: "United States Dollar",
    symbol: "$",
  },
  {
    id: 3,
    name: "Australia Dollar",
    symbol: "A$",
  },
  {
    id: 4,
    name: "Canada Dollar",
    symbol: "C$",
  },
  {
    id: 5,
    name: "Euro",
    symbol: "€",
  },
  {
    id: 6,
    name: "United Kingdom Pounds",
    symbol: "£",
  },
  {
    id: 7,
    name: "Japan Yen",
    symbol: "¥",
  },
];

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
        <div className="w-[90%] tablet:w-[70%] mx-auto mt-[5rem] ">
          <h5 className="flex flex-col gap-[2rem] justify-between ">
            <span className="text-[#bed1d9] font-bold text-center mb-[2rem] ">
              <p className="text-center mt-[3rem] ">
                {day + " " + date + " " + time}
              </p>
            </span>
            <span className="text-center text-[1.75rem] font-bold text-[#d1d1d1]  ">
              Sign up
            </span>
          </h5>
        </div>

        <div className="w-full tablet:w-[70%] mx-auto my-[2rem] py-[2rem] px-[2rem] ">
          <Form />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;

const Form = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Select Your Country");
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState("Select Your Currency");

  useEffect(() => {
    setCountries(Country);
  }, []);

  useEffect(() => {
    setCurrencies(Currency);
  }, []);

  const handleCountry = (name) => {
    setCountry(name);
  };

  const handleCurrency = (name) => {
    setCurrency(name);
  };

  return (
    <div className="py-10 px-7 w-full  h-auto  ">
      <h2 className=" font-bold text-[#ebebebc0] text-[30px] -mt-[5rem] ">
        Fill in your correct details
      </h2>
      <form className="text-[#767676] ">
        <div className="relative">
          <input
            type="text"
            id="firstname"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            htmlFor="firstname"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Enter your First Name
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="lastname"
            class={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            htmlFor="lastname"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Enter your Last Name
          </label>
        </div>

        <div className="relative">
          <input
            type="phone"
            id="phone"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Enter your Phone Number
          </label>
        </div>

        <div className="relative">
          <select
            id="country"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            onChange={(e) => handleCountry(e.target.value)}
          >
            {countries && countries !== undefined
              ? countries.map((ctr, index) => {
                  return (
                    <option key={index} value={ctr.name}>
                      {ctr.name}
                    </option>
                  );
                })
              : "No Country"}
          </select>
          <label
            htmlFor="country"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            {country}
          </label>
        </div>

        <div className="relative">
          <select
            id="country"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            onChange={(e) => handleCurrency(e.target.value)}
          >
            {currencies && currencies !== undefined
              ? currencies.map((ctr, index) => {
                  return (
                    <option key={index} value={ctr.name}>
                      {ctr.name + " " + ctr.symbol}
                    </option>
                  );
                })
              : "No Currency Available"}
          </select>
          <label
            htmlFor="country"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            {currency}
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="state"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            htmlFor="state"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            State
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Enter your Email
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="dateofbirth"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            htmlFor="dateofbirth"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Date of Birth dd/mm/yy
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            id="password"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Password
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            id="confirmpassword"
            className={`${style.inputField} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1  border-gray-300  text-white border-gray-600 focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer mt-[2rem] `}
            placeholder=" "
          />
          <label
            htmlFor="confirmpassword"
            className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Re-Enter Password
          </label>
        </div>
        <div className="w-full text-center">
          <button className="w-full laptop:w-[50%] h-[40px]   font-medium uppercase font-poppins bg-[#04a9f5b0] hover:bg-[#04a9f5] text-white mt-[1rem] rounded-lg tracking-wider ">
            Sign up
          </button>
        </div>
      </form>
      <div className="flex flex-col text-center tablet:text-left tablet:flex-row gap-[1rem] w-full mt-[2rem] px-[1rem] ">
        <span className="text-[#222425] ">Already have an account ?</span>
        <Link href="/login" className="text-[#04a9f5] hover:underline ">
          Login Here...
        </Link>
      </div>
    </div>
  );
};
