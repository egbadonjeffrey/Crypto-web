import Image from "next/image";
import React from "react";
import style from "../styles/footer.module.css";

import { FaGlobeAsia } from "react-icons/fa";

import Logo from "../public/img/header/logo-w.png";
import Flag from "../public/img/flags/usa.png";
import secureImage from "../public/img/footer/secure.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#33334f]">
      <div
        className={`${style.footer_inner} flex flex-col justify-between gap-[1rem] w-[70%] mx-auto  text-[#969cc1] `}
      >
        <div className="flex flex-col tablet:flex-row gap-[1rem] justify-between  ">
          <div className="flex flex-col flex-[0.6] ">
            <h1 className="text-[24px] text-white pb-[20px] ">Quick Links</h1>
            <div className="flex tablet:flex-col  justify-between text-[#969cc1] text-[14px] ">
              <ul>
                <li className={`${style.item}`}>
                  <Link href="/guide">Guide</Link>
                </li>
                <li className={`${style.item}`}>
                  <Link href="/regulation">Regulation</Link>
                </li>
                <li className={`${style.item}`}>
                  <Link href="/login">Login</Link>
                </li>
                <li className={`${style.item}`}>
                  <Link href="/signup">Get Started</Link>
                </li>
              </ul>
              <ul>
                <li className={`${style.item}`}>
                  <Link href="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col  justify-between">
            <h1 className="text-[24px] text-white pb-[20px] ">
              secure and contact
            </h1>
            <div className="flex flex-col justify-between gap-[1rem] ">
              <div className={`${style.imageContainer}`}>
                <Image src={secureImage} alt="secure" />
              </div>
              <span className="text-[14px]">this is for demo reasons only</span>
            </div>
            <div>
              {[
                {
                  description: "email us :",
                  contact: "mail@alphfxtrading.com",
                },
                {
                  description: "call us :",
                  contact: "+1 (202) 516 6279",
                },
              ].map((contact, index) => (
                <Link
                  href="#"
                  className="flex flex-col bg-white rounded-lg relative mt-[20px] pt-[8px] px-[20px] tracking-[0.5px] "
                  key={index}
                >
                  <span className="uppercase text-[14px] font-[600] mb-[5px] text-[#607D8B] ">
                    {contact.description}
                  </span>
                  <span className="uppercase text-[14px] font-[600] mb-[10px] text-[#607D8B] ">
                    {contact.contact}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] mx-auto tablet:mx-0   tablet:justify-between w-[50%] my-[1rem]">
          <Image src={Logo} alt="Logo" width={100} height={100} />
          <div className="flex flex-row gap-[.5rem]">
            <Image
              src={Flag}
              alt="usa flag"
              className="w-[14px] h-[14px] rounded-full "
            />
            <Image
              src={Flag}
              alt="usa flag"
              className="w-[14px] h-[14px] rounded-full "
            />
            <Image
              src={Flag}
              alt="usa flag"
              className="w-[14px] h-[14px] rounded-full "
            />
            <Image
              src={Flag}
              alt="usa flag"
              className="w-[14px] h-[14px] rounded-full "
            />
            <Image
              src={Flag}
              alt="usa flag"
              className="w-[14px] h-[14px] rounded-full "
            />
            <Image
              src={Flag}
              alt="usa flag"
              className="w-[14px] h-[14px] rounded-full "
            />
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row justify-between items-center">
          <div className="text-[13px] text-[300]">
            &copy; copyright 2022 alphfxtradings{" "}
          </div>
          <div className="flex flex-row gap-[1rem] justify-between ">
            <div className="flex flex-row gap-[.5rem] justify-between items-center">
              <FaGlobeAsia />
              <span>English</span>
            </div>

            <div className="flex flex-row gap-[.5rem]  justify-between items-center">
              <Image
                src={Flag}
                alt="usa flag"
                className="w-[14px] h-[14px] rounded-full "
              />
              <span>United States</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
