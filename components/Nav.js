import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Menu } from "@headlessui/react";
import { NavLink } from "./NavLink";
import style from "../styles/nav.module.css";
import "../styles/nav.module.css";

import WhiteLogo from "../public/img/header/logo-w.png";
import ColorLogo from "../public/img/header/logo.png";
import DropdownLink from "./DropdownLink";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(WhiteLogo);
  const [transparent, setWhite] = useState(false);
  const [menu, setMenu] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNav(true);
      setLogo(ColorLogo);
      setWhite(true);
    } else {
      setNav(false);
      setLogo(WhiteLogo);
      setWhite(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header
      className={`header ${
        nav ? "bg-white" : ""
      } w-full fixed top-0 left-0 right-0 py-5 h-auto z-50 transition ease-in-out duration-500 `}
    >
      <nav className="flex   justify-between  items-center z-50 w-[90%] tablet:w-[70%] my-[1rem] mx-auto">
        <Link href="/" className={`flex-1`}>
          <Image src={logo} alt="White Logo" width={200} height={100} />
        </Link>

        {isDesktop ? (
          <div
            className={`menu-btn flex justify-between items-center flex-1 gap-15 font-bold text-xs  transition ease-in-out duration-500  ${
              nav ? "text-[#4e585d]" : "text-white"
            }`}
          >
            <NavLink
              href="/"
              exact
              className={`${style.navItem} `}
              transparent={transparent}
            >
              Home
            </NavLink>
            <NavLink
              href="/guide"
              className={`${style.navItem} `}
              transparent={transparent}
            >
              Guide
            </NavLink>
            <NavLink
              href="#"
              className={`${style.navItem} `}
              transparent={transparent}
            >
              Open Trade
            </NavLink>
            <NavLink
              href="#"
              className={`${style.navItem} `}
              transparent={transparent}
            >
              Try demo
            </NavLink>
            <Menu as="div" className=" inline-block">
              <Menu.Button className="relative">Account</Menu.Button>
              <Menu.Items className="absolute top-[80px] w-40 origin-top-right bg-white shadow-lg rounded-lg overflow-hidden z-50">
                <Menu.Item>
                  <DropdownLink href="/login" className="dropdown-link">
                    Login
                  </DropdownLink>
                </Menu.Item>

                <Menu.Item>
                  <DropdownLink href="/signup" className="dropdown-link">
                    Sign up
                  </DropdownLink>
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <NavLink
              href="/contactus"
              className={`${style.navItem} `}
              transparent={transparent}
            >
              Contact us
            </NavLink>
            <Link
              href="/login"
              className="bg-[#FFEB3B] text-[600] text-[13px] text-[#4e585d] px-[30px] py-[5px] rounded-full "
            >
              Login
            </Link>
          </div>
        ) : (
          <div>
            <div className="flex gap-[3rem] justify-center items-center">
              <button
                onClick={() => setMenu(!menu)}
                className={`${style.menuBtn} relative   `}
              >
                <span
                  className={`absolute -top-[10px] ${style.bar1} ${
                    menu && style.open
                  } block h-[2px] w-[30px] border-3 
                  ${
                    transparent ? "bg-[#4e585d]" : "bg-white"
                  } ease-in-out duration-300 `}
                ></span>
                <span
                  className={`absolute -top-[1px] ${style.bar2} ${
                    menu && style.open
                  }  block h-[2px] w-[30px] border-3 ${
                    transparent ? "bg-[#4e585d]" : "bg-white"
                  } ease-in-out duration-300`}
                ></span>
                <span
                  className={`absolute top-[9px] ${style.bar3} ${
                    menu && style.open
                  }  block h-[2px] w-[20px] border-3 ${
                    transparent ? "bg-[#4e585d]" : "bg-white"
                  }  float-right ease-in-out duration-300`}
                ></span>
              </button>
              <Link
                href="/login"
                className="bg-[#FFEB3B] text-[600] text-[13px] text-[#4e585d] px-[30px] py-[5px] rounded-full "
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Starts */}
            <div
              className={`
              bg-[#151621] px-[1rem] py-[2rem] ${
                menu ? "left-0" : "-left-[500px]"
              } text-[10px] tablet:text-[20px] fixed h-full w-[60%] max-w-[30rem] top-0 z-40 ease-in-out duration-300`}
            >
              <ul className="flex flex-col h-[50%] gap-[.5rem] pt-7">
                <Link
                  href="/"
                  className=" text-[#edf1f3] font-bold font-poppins font-[700] py-[0.9rem] px-[0.7rem] pl-[2rem]  border-b-[.1px] tablet:border-b-[.5px] border-[#b0b0b050]  "
                  onClick={() => setMenu(false)}
                >
                  Home
                </Link>
                <Link
                  href="/guide"
                  className=" text-[#edf1f3] font-bold font-poppins font-[700] py-[0.9rem] px-[0.7rem] pl-[2rem]  border-b-[.1px] tablet:border-b-[.5px] border-[#b0b0b050]    "
                  onClick={() => setMenu(false)}
                >
                  Guide
                </Link>
                <Link
                  href="/regulation"
                  className=" text-[#edf1f3] font-bold font-poppins font-[700] py-[0.9rem] px-[0.7rem] pl-[2rem] border-b-[.1px] tablet:border-b-[.5px] border-[#b0b0b050]    "
                  onClick={() => setMenu(false)}
                >
                  Regulation
                </Link>
                <Link
                  href="#"
                  className=" text-[#edf1f3] font-bold font-poppins font-[700] py-[0.9rem] px-[0.7rem] pl-[2rem] border-b-[.1px] tablet:border-b-[.5px] border-[#b0b0b050]    "
                  onClick={() => setMenu(false)}
                >
                  Open Trade
                </Link>
                <Link
                  href="#"
                  className=" text-[#edf1f3] font-bold font-poppins font-[700] py-[0.9rem] px-[0.7rem] pl-[2rem] border-b-[.1px] tablet:border-b-[.5px] border-[#b0b0b050]    "
                  onClick={() => setMenu(false)}
                >
                  Try demo
                </Link>
                <Menu
                  as="div"
                  className="relative inline-block border-b-[.1px] tablet:border-b-[.5px] border-[#b0b0b050] "
                >
                  <Menu.Button className="text-[#edf1f3] font-bold font-poppins font-[700] py-[0.9rem] px-[0.7rem] pl-[2rem] ">
                    Account
                  </Menu.Button>
                  <Menu.Items className="absolute top-10 right-0 w-40 origin-top-left bg-white shadow-lg rounded-lg overflow-hidden z-50">
                    <Menu.Item>
                      <DropdownLink
                        href="/login"
                        className="dropdown-link"
                        onClick={() => setMenu(false)}
                      >
                        Login
                      </DropdownLink>
                    </Menu.Item>

                    <Menu.Item>
                      <DropdownLink
                        href="/signup"
                        className="dropdown-link"
                        onClick={() => setMenu(false)}
                      >
                        Sign up
                      </DropdownLink>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                <Link
                  href="/contactus"
                  className=" text-[#edf1f3] font-bold font-poppins font-[700] py-[0.9rem] px-[0.7rem] pl-[2rem] border-b-[.1px] tablet:border-b-[.5px] border-[#b0b0b050]    "
                  onClick={() => setMenu(false)}
                >
                  Contact us
                </Link>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
