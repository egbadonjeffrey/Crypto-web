import Image from "next/image";
import React from "react";

const Devices = () => {
  return (
    <div className="flex justify-between w-[70%] mx-auto my-[3rem]  ">
      <div className="devices flex flex-col justify-between items-center">
        <Image src="" alt="Andriod" />
        <span>Andriod</span>
      </div>
      <div className="evices flex flex-col justify-between items-center">
        <Image src="" alt="Windows" />
        <span>Windows</span>
      </div>
      <div className="evices flex flex-col justify-between items-center">
        <Image src="" alt="IOS" />
        <span>IOS</span>
      </div>
      <div className="evices flex flex-col justify-between items-center">
        <Image src="" alt="MacOS" />
        <span>MacOS</span>
      </div>
    </div>
  );
};

export default Devices;
