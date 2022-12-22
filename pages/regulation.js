import React, { useState } from "react";
import Layout from "../components/Layout";

import moment from "moment/moment";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useEffect } from "react";
import Link from "next/link";

const Regulation = () => {
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
    <Layout>
      <main className="flex flex-col gap-[3rem] h-auto z-10 mt-[10%]">
        <div className="w-[70%] mx-auto ">
          <h2 className="text-center text-[1.75rem] font-bold mb-[5rem] ">
            Regulation
          </h2>
          <div className="font-quicksand">
            <h3 className="flex flex-col text-left text-[15px] w-[50%] ">
              <span className="text-[#bed1d9] font-bold text-center mb-[2rem] ">
                {day + " " + date + " " + currentTime}
              </span>
              <span className="font-[700] text-white ">
                <Link href="/" className="text-[blue] hover:text-[#007bff]  ">
                  Homepage
                </Link>
                {" - Guide"}
              </span>
            </h3>

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

        <div className="w-[70%] mx-auto my-[8rem] ">
          <div>
            <Link href="#">Legal</Link> /<Link href="/aboutus"> Company</Link> /
            <span> Regulation</span>
          </div>

          <div className="flex flex-col gap-[.5rem] ">
            <h2 className="font-[900] font-quicksand text-[16px] uppercase mt-[.5rem] ">
              License
            </h2>

            <p>
              erovelyntrades Limited is licensed and regulated by the Cyprus
              Securities and Exchange Commission (CySEC) under license number
              2178/07.
            </p>

            <p>
              erovelyntrades is licensed by CySEC to offer the following
              Investment and Ancillary Services:
            </p>

            <ul className="list-disc px-[3rem] ">
              <li>
                Reception and transmission of orders in relation to one or more
                financial instruments
              </li>
              <li>Execution of Orders on Behalf of Clients</li>
              <li>
                Safekeeping and administration of financial instruments,
                including custodianship and related services
              </li>
              <li>
                Granting credits or loans to one or more financial instruments,
                where the firm granting the credit or loan is involved in the
                transaction
              </li>
              <li>
                Foreign exchange services where these are connected to the
                provision of investment services
              </li>
            </ul>
          </div>

          <div className="mt-[2rem] ">
            <h2 className="font-bold text-[16px] uppercase ">Registrations</h2>

            <p>
              As an investment firm authorised by a regulator of an EU Member
              State, erovelyntrades Limited is allowed to offer its services on
              a cross border basis to the EU Member States that permit the
              provision of our services in their jurisdictions and we are duly
              registered with their respective competent authorities
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Regulation;
