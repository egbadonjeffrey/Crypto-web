import Head from "next/head";
import Image from "next/image";
import Aboutus from "../components/Aboutus";
import Devices from "../components/Devices";
import JoinNow from "../components/JoinNow";
import Layout from "../components/Layout";
import Plans from "../components/Plans";
import Process from "../components/Process";
import Support from "../components/Support";
import Testimonials from "../components/Testimonials";
import Video from "../components/Video";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="flex flex-col gap-[3rem] min-h-full z-10 mt-[30%] tablet:mt-[15%] laptop:mt-[12%] desktop:mt-[9%] ">
        <Video />
        <Process />
        <Plans />
        <Aboutus />
        <Support />
        <Testimonials />
        <Devices />
        <JoinNow />
      </div>
    </Layout>
  );
}
