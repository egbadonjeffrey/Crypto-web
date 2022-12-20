import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

import style from "../styles/contact.module.css";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useEffect } from "react";

const Contactus = () => {
  return (
    <Layout title="Contact us">
      <main className="flex flex-col gap-[3rem] h-[80vh] z-10 mt-[10%]">
        <div className="flex flex-row justify-between gap-[1rem] w-[70%] mx-auto ">
          <div className="flex-[41.7] my-[7rem] text-left ">
            <h5 className="flex flex-col gap-[.7rem] font-poppins text-4xl font-extrabold text-white  ">
              <span className="text-[15px] font-bold text-[#aebfc7] ">
                You still got questions ?
              </span>
              You Can talk to us.
            </h5>

            <div className="my-[1rem] ">
              <span className="font-[700] mb-[.7rem] text-white ">
                <Link href="/" className="text-[blue] hover:text-[#007bff]  ">
                  Homepage
                </Link>
                {" - contact us"}
              </span>

              <div className="flex gap-[1.5rem] w-[40%] ">
                <Link
                  href="#"
                  className="relative rounded-full bg-[#007bff] w-[30px] h-[30px] my-[1rem]  "
                >
                  <BsFacebook className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto text-[#fff] object-cover w-full h-full" />
                </Link>
                <Link
                  href="#"
                  className="relative rounded-full bg-[#fff] w-[30px] h-[30px] my-[1rem]   "
                >
                  <RiInstagramFill className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto text-[#d11030e1] object-cover w-[20px] h-[20px] " />
                </Link>
                <Link
                  href="#"
                  className="relative rounded-full bg-[#fff] w-[30px] h-[30px] my-[1rem] overflow-hidden  "
                >
                  <BsTwitter className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto text-[#007bff] object-cover w-[20px] h-[20px] " />
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${style.contactForm} flex-[58.3] bg-white mt-[5rem] h-[60vh] py-7 px-7  `}
          >
            <Form />
          </div>
        </div>

        <section className=" w-[70%] mx-auto  -mt-[7rem]  ">
          <div className="flex flex-col gap-[1rem] text-left w-[35%]">
            <h3 className="font-bold text-[20px]  ">
              Need some help immediately ?
            </h3>
            <p className="text-[14px]">our support team here for you 24/7</p>
            <div className="flex flex-col justify-between">
              <Link
                href="#"
                className="font-bold font-poppins text-[#03A9F4] text-[15px] "
              >
                +1 333 888 9999
              </Link>
              <Link
                href="#"
                className="font-bold font-poppins text-[#03A9F4] text-[15px] "
              >
                support@alphfxtradings.com
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contactus;

const Form = () => {
  return (
    <div className="py-10 px-7 h-auto  ">
      <h3 className="flex flex-col text-[20px] text-[#2f3538] font-[900] font-poppins ">
        Get in Touch
        <span className="text-[14px] font-normal ">
          Discover How Can Our Services Grow Your Business.
        </span>
      </h3>
      <form className="text-[#]">
        <div
          class={`${style.inputContainer} relative w-full  flex flex-col my-[2rem] `}
        >
          <input
            type="text"
            id="name"
            className={`${style.inputField} py-3 px-3`}
          />
          <label
            htmlFor="name"
            className="absolute px-4 py-4   duration-300 text-[13px]"
          >
            Enter your name
          </label>
        </div>

        <div
          className={`${style.inputContainer} relative w-full  flex flex-col my-[2rem] `}
        >
          <input
            type="email"
            id="email"
            className={`${style.inputField} py-3 px-3`}
            required
          />
          <label
            htmlFor="email"
            className="absolute  px-4 py-4  duration-300 text-[13px]"
          >
            Enter your email
          </label>
        </div>

        <div
          className={`${style.messageContainer} relative w-full  flex flex-col mt-[1.5rem] `}
        >
          <textarea
            name="message"
            id="message"
            className={`${style.messageField} w-full h-[10rem] py-3 px-3`}
            required
          ></textarea>

          <label
            htmlFor="message"
            className="absolute  px-4 py-4  duration-300 text-[13px]"
          >
            Enter your message
          </label>
        </div>

        <button className="w-[130px] h-[40px] font-bold uppercase font-poppins bg-[#00d463] text-white mt-[2rem] rounded-full tracking-wider ">
          Send
        </button>
      </form>
    </div>
  );
};
