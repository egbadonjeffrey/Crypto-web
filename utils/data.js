import { BiBuilding } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import Rinda from "../public/images/testimonials/pic1.jpg";
import Ria from "../public/images/testimonials/pic2.jpg";
import Rose from "../public/images/testimonials/pic3.jpg";
import Natis from "../public/images/testimonials/pic4.jpg";

export const Data = {
  Plans: [
    {
      plan: "Basic plan",
      amount: 499.99,
      package: "crypto",
    },
    {
      plan: "Expert plan",
      amount: 999.99,
      package: "crypto",
    },
    {
      plan: "Relluxe plan",
      amount: 4999.99,
      package: "crypto",
    },
    {
      plan: "Basic plan",
      amount: 999.99,
      package: "forex",
    },
    {
      plan: "Expert plan",
      amount: 4999.99,
      package: "forex",
    },
    {
      plan: "Relluxe plan",
      amount: 24999.99,
      package: "forex",
    },
  ],
  Legend: [
    {
      number: 8150,
      image: <BiBuilding style={{ width: "40px", height: "40px" }} />,
      details: "projects completed",
    },
    {
      number: 5223,
      image: <FaUsers style={{ width: "40px", height: "40px" }} />,
      details: "happy clients",
    },
    {
      number: 4522,
      image: <FaUserPlus style={{ width: "40px", height: "40px" }} />,
      details: "workers employed",
    },
  ],
  Testimonials: [
    {
      name: "Rinda Smith",
      image: Rinda,
      statement:
        "The program like erovelyntrades.com enables me to execute the kind of one-on-one business Ive looking for. Its the kind of product that is taking our business to a different level.",
      profession: "Real Estate Agent",
      country: "UK",
    },
    {
      name: "Ria Odonnell",
      image: Ria,
      statement:
        "I've always liked good stylish programs, but never invested quite enough to have a good profit. Now, thanks to erovelyntrades.com, we have a program we can be proud of.",
      profession: "Pro Trader",
      country: "USA",
    },
    {
      name: "Rose Powell",
      image: Rose,
      statement:
        "Your company is exactly what I was looking for – clear, clean, continuous, with a focus on clients. Thank you so much for your work.",
      profession: "Bitcoin Analyst",
      country: "CANADA",
    },
    {
      name: "Natis Owen",
      image: Natis,
      statement:
        "Easy, Fast And reliable. got my profits immediately after trading. erovelyntrades is Awesome.",
      profession: "Artist",
      country: "SOUTH AFRICA",
    },
  ],
};
