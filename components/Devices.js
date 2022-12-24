import Image from "next/image";
import React from "react";

import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";

const Devices = () => {
  const devices = [
    {
      id: 1,
      image: (
        <MdOutlinePhoneAndroid className="w-[20%]  tablet:w-full laptop:w-full   h-full text-[#5769cc]" />
      ),
      name: "Andriod",
    },
    {
      id: 2,
      image: (
        <FaLaptop className="w-[20%]  tablet:w-full laptop:w-full  h-full text-[#5769cc]" />
      ),
      name: "Windows",
    },
    {
      id: 3,
      image: (
        <MdOutlinePhoneAndroid className="w-[20%]  tablet:w-[4rem] laptop:w-[4rem]  h-full text-[#5769cc]" />
      ),
      name: "IOS",
    },
    {
      id: 4,
      image: (
        <FaLaptop className="w-[20%] tablet:w-[4rem] laptop:w-full  h-full text-[#5769cc]" />
      ),
      name: "MacOS",
    },
  ];

  return (
    <div>
      <h2 className="text-[1.5rem] text-center font-bold capitalize mb-[2rem]">
        made for all devices
      </h2>
      <div className="flex flex-col tablet:flex-row gap-[1rem] justify-between w-[70%] mx-auto my-[3rem]  ">
        {devices.map((device, index) => (
          <div
            key={index}
            className="devices flex flex-col justify-between items-center"
          >
            {device.image}
            <span className="font-bold">{device.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devices;
