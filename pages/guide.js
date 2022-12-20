import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const GuidePage = () => {
  return (
    <Layout title="Guide">
      <div className="flex flex-col gap-[3rem] h-[100vh] z-10 mt-[10%]">
        <div className="w-[70%] mx-auto ">
          <h2 className="text-center text-[1.75rem] font-bold mb-[5rem] ">
            Guide To Trade
          </h2>
          <div className="font-quicksand">
            <h3 className="flex flex-col text-left text-[15px] w-[50%] ">
              <span className="text-center mb-[2rem] ">Date</span>
              <span className="font-[700] ">
                <Link href="/" className="text-[blue] hover:text-[#007bff]  ">
                  Homepage
                </Link>
                {" - Guide"}
              </span>
            </h3>

            <div className="flex gap-[1.5rem] w-[40%] ">
              <Link
                href="#"
                className="relative rounded-full bg-[#007bff] w-[40px] h-[40px] my-[1rem]  "
              >
                <BsFacebook className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto text-[#fff] object-cover w-[40px] h-[40px]" />
              </Link>
              <Link
                href="#"
                className="relative rounded-full bg-[#fff] w-[40px] h-[40px] my-[1rem]   "
              >
                <RiInstagramFill className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto text-[#d11030e1] object-cover w-[30px] h-[30px] " />
              </Link>
              <Link
                href="#"
                className="relative rounded-full bg-[#fff] w-[40px] h-[40px] my-[1rem] overflow-hidden  "
              >
                <BsTwitter className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto text-[#007bff] object-cover w-[30px] h-[30px] " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GuidePage;
