import Image from "next/image";
import React from "react";

import { FaChartLine, FaCreditCard, FaWallet } from "react-icons/fa";

import style from "../styles/process.module.css";

const Process = () => {
  const process = [
    {
      image: (
        <FaCreditCard className="w-[20%] h-[30%] tablet:w-[10%]  tablet:h-[10%] laptop:w-[20%] laptop:h-[20%]  text-[#83ecff] mb-[10px] " />
      ),
      title: "Deposit",
      description:
        "Deposit funds into your real account and start earning, we support several payment methods and accept bitcoin.",
    },
    {
      image: (
        <FaChartLine className="w-[20%] tablet:w-[10%] h-[30%] tablet:h-[10%]  laptop:w-[20%] laptop:h-[20%]  text-[#ff87a3] mb-[10px] " />
      ),
      title: "Trade",
      description:
        "Trade on several assets upto 200 stocks and also crypto trading.",
    },
    {
      image: (
        <FaWallet className="w-[20%] tablet:w-[10%] h-[30%] tablet:h-[10%]  laptop:w-[20%] laptop:h-[20%] text-[#8BC34A] mb-[10px] " />
      ),
      title: "Withdraw",
      description:
        "Get instant withdraw of profits processed to your accounts within 2 business days.",
    },
  ];

  return (
    <div
      className={`flex flex-col laptop:flex-row gap-5  -mt-[1rem] w-[70%] mx-auto`}
    >
      {process.map((data, index) => (
        <div
          key={index}
          className={`${style.processContainer} relative flex-1 bg-white p-5 ${
            index < 1 ? "h-auto" : "h-[14rem]"
          } rounded-lg  border-solid border-2 border-#eaeef1] `}
        >
          <div className=" flex flex-col text-center w-full justify-center items-center tablet:items-start">
            {data.image}{" "}
            <h2 className="text-[17px] font-bold mb-[0.5rem] font-poppins ">
              {data.title}
            </h2>
          </div>

          <p className="font-quicksand "> {data.description} </p>
        </div>
      ))}
    </div>
  );
};

export default Process;
