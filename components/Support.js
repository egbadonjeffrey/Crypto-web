import Image from "next/image";
import React, { useState } from "react";
import style from "../styles/support.module.css";

import supportBg from "../public/img/bg/b_bg_02.jpg";
import qualityBadge from "../public/img/hover-box-svgs/quality-badge.svg";
import responsive from "../public/img/hover-box-svgs/big-telephone.svg";
import direct from "../public/img/hover-box-svgs/inclined-paper-plane.svg";
import support from "../public/img/hover-box-svgs/headphones-with-thin-mic.svg";
import secured from "../public/img/hover-box-svgs/big-lifesaver.svg";
import educative from "../public/img/hover-box-svgs/big-light.svg";
import community from "../public/img/hover-box-svgs/public-speech.svg";
import innovative from "../public/img/hover-box-svgs/inclined-rocket.svg";

const Support = () => {
  const [tab, setTab] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  const [tab5, setTab5] = useState(false);
  const [tab6, setTab6] = useState(false);
  const [tab7, setTab7] = useState(false);
  const [tab8, setTab8] = useState(false);

  const checkHover = () => {};

  return (
    <section className={style.support}>
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full max-h-[200px]">
        <Image src={supportBg} className="w-full h-[50%]" alt="support bg" />
      </div>
      <div className="container flex tablet:flex-row gap-[2rem] w-full  tablet:w-[70%]  phone:w-full mx-auto">
        <div className="flex-1  px-[10%]">
          <h2 className="text-[27px] text-[#2e2f38] mb-[20px] font-bold">
            We are with you ,<br /> every step of the way
          </h2>
          <p className="text-[#72818e] text-[17px] mb-[1rem] ">
            Our platforms are fast and our signals are accurate, we give you
            live data on the market.
            <b className="font-bold">
              Our approach to brokage isn&apos;t fixed, we grow our business to
              suit you.{" "}
            </b>
            Simplicity is key, that&apos;s why we have done all the hard job so
            you can trade without stress.
          </p>
          <p>
            <button className={style.support_button}>start with us now</button>
          </p>
        </div>
        <div className="flex-1 hidden laptop:block max-w-[41.667%]  ">
          <div className={`${style.hover_box_container} relative`}>
            <a
              href="#tab1"
              className={`${style.display_onhover_box_item} ${
                tab ? style.active : style.itsnot
              } `}
              onMouseEnter={() => {
                setTab(true);
                setTab2(false);
                setTab3(false);
                setTab4(false);
                setTab5(false);
                setTab6(false);
                setTab7(false);
                setTab8(false);
              }}
              z
            >
              <Image src={qualityBadge} className="w-[35px]" alt="tab1" />
            </a>
            <a
              href="#tab2"
              className={`${style.display_onhover_box_item}  ${
                tab2 ? style.active : style.itsnot
              } `}
              onMouseEnter={() => {
                setTab(false);
                setTab2(true);
                setTab3(false);
                setTab4(false);
                setTab5(false);
                setTab6(false);
                setTab7(false);
                setTab8(false);
              }}
            >
              <Image src={responsive} className="w-[35px]" alt="tab1" />
            </a>
            <a
              href="#tab3"
              className={`${style.display_onhover_box_item}  ${
                tab3 ? style.active : style.itsnot
              } `}
              onMouseEnter={() => {
                setTab(false);
                setTab2(false);
                setTab3(true);
                setTab4(false);
                setTab5(false);
                setTab6(false);
                setTab7(false);
                setTab8(false);
              }}
            >
              <Image src={direct} className="w-[35px]" alt="tab1" />
            </a>
            <a
              href="#tab4"
              className={`${style.display_onhover_box_item}  ${
                tab4 ? style.active : style.itsnot
              } `}
              onMouseEnter={() => {
                setTab(false);
                setTab2(false);
                setTab3(false);
                setTab4(true);
                setTab5(false);
                setTab6(false);
                setTab7(false);
                setTab8(false);
              }}
            >
              <Image src={support} className="w-[35px]" alt="tab1" />
            </a>
            <a
              href="#tab5"
              className={`${style.display_onhover_box_item}  ${
                tab5 ? style.active : style.itsnot
              } `}
              onMouseEnter={() => {
                setTab(false);
                setTab2(false);
                setTab3(false);
                setTab4(false);
                setTab5(true);
                setTab6(false);
                setTab7(false);
                setTab8(false);
              }}
            >
              <Image src={secured} className="w-[35px]" alt="tab1" />
            </a>
            <a
              href="#tab6"
              className={`${style.display_onhover_box_item}  ${
                tab6 ? style.active : style.itsnot
              } `}
              onMouseEnter={() => {
                setTab(false);
                setTab2(false);
                setTab3(false);
                setTab4(false);
                setTab5(false);
                setTab6(true);
                setTab7(false);
                setTab8(false);
              }}
            >
              <Image src={educative} className="w-[35px]" alt="tab1" />
            </a>
            <a
              href="#tab7"
              className={`${style.display_onhover_box_item}  ${
                tab7 ? style.active : style.itsnot
              } `}
              onMouseEnter={() => {
                setTab(false);
                setTab2(false);
                setTab3(false);
                setTab4(false);
                setTab5(false);
                setTab6(false);
                setTab7(true);
                setTab8(false);
              }}
            >
              <Image src={community} className="w-[35px]" alt="tab1" />
            </a>
            <a
              href="#tab8"
              className={`${style.display_onhover_box_item}  ${
                tab8 ? style.active : style.itsnot
              } `}
              onMouseEnter={() => {
                setTab(false);
                setTab2(false);
                setTab3(false);
                setTab4(false);
                setTab5(false);
                setTab6(false);
                setTab7(false);
                setTab8(true);
              }}
            >
              <Image src={innovative} className="w-[35px]" alt="tab1" />
            </a>

            <div className={`${style.display_onhover_box_content} relative`}>
              <div className={`${style.display_onhover_box_content_items}`}>
                <div
                  id="tab1"
                  className={`tab_content_hover ${tab ? "block" : "hidden"}`}
                >
                  <h5 className="font-quicksand text-[16px] font-bold">
                    We are renowed
                  </h5>
                  <p className="font-quicksand text-[13px]">
                    Award winning and Industry leading roles.
                  </p>
                </div>
                <div
                  id="tab2"
                  className={`tab_content_hover ${tab2 ? "block" : "hidden"}`}
                >
                  <h5 className="font-quicksand text-[16px] font-bold">
                    Responsive
                  </h5>
                  <p className="font-quicksand text-[13px]">
                    Our Platform is built for every device.
                  </p>
                </div>
                <div
                  id="tab3"
                  className={`tab_content_hover ${tab3 ? "block" : "hidden"}`}
                >
                  <h5 className="font-quicksand text-[16px] font-bold">
                    Direct
                  </h5>
                  <p className="font-quicksand text-[13px]">
                    We are direct, less Paper works.
                  </p>
                </div>
                <div
                  id="tab4"
                  className={`tab_content_hover ${tab4 ? "block" : "hidden"}`}
                >
                  <h5 className="font-quicksand text-[16px] font-bold">
                    24/7 support
                  </h5>
                  <p className="font-quicksand text-[13px]">
                    Come and experience our wonderful customer support.
                  </p>
                </div>
                <div
                  id="tab5"
                  className={`tab_content_hover ${tab5 ? "block" : "hidden"}`}
                >
                  <h5 className="font-quicksand text-[16px] font-bold">
                    Secured
                  </h5>
                  <p className="font-quicksand text-[13px]">
                    We are secured, your data, and funds are secured with us.
                  </p>
                </div>
                <div
                  id="tab6"
                  className={`tab_content_hover ${tab6 ? "block" : "hidden"}`}
                >
                  <h5 className="font-quicksand text-[16px] font-bold">
                    Educative
                  </h5>
                  <p className="font-quicksand text-[13px]">
                    We take out time to enlighten you of the market.
                  </p>
                </div>
                <div
                  id="tab7"
                  className={`tab_content_hover ${tab7 ? "block" : "hidden"}`}
                >
                  <h5 className="font-quicksand text-[16px] font-bold">
                    Great community
                  </h5>
                  <p className="font-quicksand text-[13px]">
                    Our platform is used by millions of traders. 2,546,905+
                    accounts created
                  </p>
                </div>
                <div
                  id="tab8"
                  className={`tab_content_hover ${tab8 ? "block" : "hidden"}`}
                >
                  <h5 className="font-quicksand text-[16px] font-bold">
                    Innovative
                  </h5>
                  <p className="font-quicksand text-[13px]">
                    We are innovative and novel. .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
