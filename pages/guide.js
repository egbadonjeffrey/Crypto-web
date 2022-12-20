import Link from "next/link";
import React, { useState } from "react";
import Layout from "../components/Layout";

import moment from "moment/moment";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useEffect } from "react";

const GuidePage = () => {
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
    <Layout title="Guide">
      <main className="flex flex-col gap-[3rem] h-auto z-10 mt-[10%]">
        <div className="w-[70%] mx-auto ">
          <h2 className="text-center text-[1.75rem] font-bold mb-[5rem] ">
            Guide To Trade
          </h2>
          <div className="font-quicksand">
            <h3 className="flex flex-col text-left text-[15px] w-[50%] ">
              <span className="text-[#bed1d9] font-bold text-center mb-[2rem] ">
                {day + " " + date + " " + currentTime}
              </span>
              <span className="font-[700] ">
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
        <div className="description flex flex-col gap-[2rem] w-[70%] mt-[4rem] mx-auto ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            distinctio sequi omnis est quibusdam at possimus ipsam corrupti
            deleniti ratione eum accusamus neque alias pariatur, corporis,
            officia ad, beatae quasi unde aut! Repellendus eligendi consequatur
            laudantium laboriosam natus fugit quasi?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            distinctio sequi omnis est quibusdam at possimus ipsam corrupti
            deleniti ratione eum accusamus neque alias pariatur, corporis,
            officia ad, beatae quasi unde aut! Repellendus eligendi consequatur
            laudantium laboriosam natus fugit quasi?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            distinctio sequi omnis est quibusdam at possimus ipsam corrupti
            deleniti ratione eum accusamus neque alias pariatur, corporis,
            officia ad, beatae quasi unde aut! Repellendus eligendi consequatur
            laudantium laboriosam natus fugit quasi?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            distinctio sequi omnis est quibusdam at possimus ipsam corrupti
            deleniti ratione eum accusamus neque alias pariatur, corporis,
            officia ad, beatae quasi unde aut! Repellendus eligendi consequatur
            laudantium laboriosam natus fugit quasi?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            distinctio sequi omnis est quibusdam at possimus ipsam corrupti
            deleniti ratione eum accusamus neque alias pariatur, corporis,
            officia ad, beatae quasi unde aut! Repellendus eligendi consequatur
            laudantium laboriosam natus fugit quasi?
          </p>

          <h3 className="font-bold text-[1.5rem] text-[500] mb-[0.5rem] ">
            Pages available in the Guide section include
          </h3>

          <p>
            <span className="font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              natus:{" "}
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ea soluta nesciunt mollitia sequi id aliquid officiis totam rem.
            Autem sint nostrum nulla qui. Fugiat ea sed quod fugit neque!
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            quaerat quis beatae amet? Similique ipsam voluptates nihil,
            necessitatibus error quidem.
          </p>

          <p>
            <span>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              fugit:{" "}
            </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed a
            quibusdam eveniet nihil accusamus consequuntur, sit eum obcaecati
            modi placeat debitis, ea dolorum aut praesentium ab non beatae. Vel
            aut, nostrum nulla accusantium voluptatem tempore ipsam quis maiores
            perferendis doloribus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            enim magni! Enim sunt suscipit ipsum omnis quod placeat expedita ex
            modi qui molestiae quae dolorum illo, nam inventore eaque ab?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            earum eligendi laboriosam nobis et at quasi doloribus rerum soluta
            minima distinctio culpa inventore fugiat voluptatem sed, explicabo
            amet. Enim vel quaerat vero hic? Voluptas, natus.
          </p>

          <div className="mb-[10rem] "></div>

          <div className="absolute bottom-0 mt-[150vp] p-4 w-[70%] mx-auto border-4 border-solid  ">
            <h1 className="text-[1.5rem] font-bold">Acoount Manager</h1>
            <p>To verify your account manager please write us at</p>

            <p className="font-bold">
              <span>Email: </span>
              mail@alphfxtradings.com
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default GuidePage;
