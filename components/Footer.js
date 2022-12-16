import React from "react";
import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className="bg-[#33334f]">
      <div className={`${style.footer_inner} w-[70%] mx-auto `}>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-[24px] text-white pb-[20px] ">Quick Links</h1>
            <div className="text-[#969cc1] text-[14px] ">
              <ul>
                <li>Guide</li>
                <li>Regulation</li>
                <li>Login</li>
                <li>Get Started</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div>
            <h1>secure and contact</h1>
            <div>
              Images
              <span>this is for demo reasons only</span>
            </div>
            <div>Contact</div>
          </div>
        </div>
        <div>Footer</div>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default Footer;
