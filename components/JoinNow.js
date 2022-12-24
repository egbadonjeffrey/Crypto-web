import Link from "next/link";
import React from "react";

const JoinNow = () => {
  return (
    <div className=" py-[70px] bg-[#2d2d44] text-white ">
      <div className="flex flex-col tablet:flex-row gap-[1rem] justify-between items-center w-[70%] mx-auto">
        <div className="flex justify-between flex-col flex-1 ">
          <h1 className="capitalize text-[20px] font-bold">
            Join Now and Enjoy financial freedom
          </h1>
          <p className="text-[16px]">
            Risk warning: Trading CFDs, Forex, Cryptocurrency has associated
            risks to them, only invest as you can, and allow experts to manage
            your accounts.
          </p>
        </div>
        <div className="flex justify-between items-center">
          {[
            {
              link: "/signup",
              name: "signup",
            },
            {
              link: "/login",
              name: "login",
            },
          ].map((join, index) => (
            <Link
              key={index}
              href={join.link}
              className={`uppercase flex justify-center w-[100px] h-[40px] ${
                index < 1 ? "bg-[#8065ff]" : "bg-[#fff]"
              }
              ${index > 0 && "text-[#8065ff]"}
               ${
                 index < 1 ? "hover:bg-[#8165ff81]" : "hover:bg-[#ccc]"
               }   text-center items-center text-[13px]  mx-[5px] my-[5px] rounded-full `}
            >
              {join.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
