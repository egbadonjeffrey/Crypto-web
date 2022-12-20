import Image from "next/image";
import React from "react";

import { FaChartLine, FaCreditCard, FaWallet } from "react-icons/fa";

import Deposit from "../public/images/background/bg-9.jpg";
import style from "../styles/process.module.css";

const Process = () => {
  const process = [
    {
      image: (
        <FaCreditCard className="w-[30%] h-[30%] text-[#83ecff] mb-[10px] " />
      ),
      title: "Deposit",
      description:
        "Deposit funds into your real account and start earning, we support several payment methods and accept bitcoin.",
    },
    {
      image: (
        <FaChartLine className="w-[30%] h-[30%] text-[#ff87a3] mb-[10px] " />
      ),
      title: "Trade",
      description:
        "Trade on several assets upto 200 stocks and also crypto trading.",
    },
    {
      image: <FaWallet className="w-[30%] h-[30%] text-[#8BC34A] mb-[10px] " />,
      title: "Withdraw",
      description:
        "Get instant withdraw of profits processed to your accounts within 2 business days.",
    },
  ];

  // console.log(process);
  return (
    <div className={`flex gap-5 -mt-[1rem] w-[70%] mx-auto`}>
      {process.map((data, index) => (
        <div
          key={index}
          className={`${style.processContainer} relative flex-1 bg-white p-5 ${
            index < 1 ? "h-auto" : "h-[14rem]"
          } rounded-lg  border-solid border-2 border-#eaeef1] `}
        >
          {data.image}
          <h2 className="text-[17px] font-bold mb-[0.5rem] font-poppins ">
            {data.title}
          </h2>
          <p className="font-quicksand "> {data.description} </p>
        </div>
      ))}
    </div>
  );
};

export default Process;
