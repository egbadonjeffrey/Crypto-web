import Image from "next/image";
import React from "react";

import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";

const Devices = () => {
  const devices = [
    {
      id: 1,
      image: <MdOutlinePhoneAndroid className="w-full h-full text-[#5769cc]" />,
      name: "Andriod",
    },
    {
      id: 2,
      image: <FaLaptop className="w-full h-full text-[#5769cc]" />,
      name: "Windows",
    },
    {
      id: 3,
      image: (
        <MdOutlinePhoneAndroid className="w-[3rem] h-full text-[#5769cc]" />
      ),
      name: "IOS",
    },
    {
      id: 4,
      image: <FaLaptop className="w-full h-full text-[#5769cc]" />,
      name: "MacOS",
    },
  ];

  return (
    <div className="flex justify-between w-[70%] mx-auto my-[3rem]  ">
      {devices.map((device, index) => (
        <div
          key={index}
          className="devices flex flex-col justify-between items-center"
        >
          {device.image}
          <span>{device.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Devices;
