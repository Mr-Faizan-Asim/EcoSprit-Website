import heroimg from "../assets/logo.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/hero.png";


import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";

const heroapi = {
  title: "Quantum Interface",
  subtitle: "Exploring the Software",
  img: heroimg,
  btntext: "Explore Softwares",
  
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Website Frontend",
      text: "React JS",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "3000",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Website Development",
      text: "MERN",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "30000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Open CV Projects",
      text: "Python",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "3000",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "Your IT Consulting Partner!",
  text: " ",
  btn: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btn: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "programming Assistant",
      text: "All Languages",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "3000",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Console Based Application",
      text: "All Languages",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "3000",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Desktop Application",
      text: "C++ and C#",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "3000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Object Oriented Projects",
      text: "All Languages",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "3000",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Game In Unity",
      text: "C# & Unity",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "3000",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Online Portfolio",
      text: "",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "3000",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Graphic Designer",
      text: "",
      rating: "5+",
      btn: "Buy Now",
      img: "https://clipart-library.com/image_gallery2/Graphic-Design.png",
      price: "3000",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Assembly Language Projects",
      text: "",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "3000",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Backend Development",
      text: "Node JS & Express",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "5000",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
  ],
};


const story = {
  title: "Coming Soon",
  news: [
    
  ],
};


const footerAPI = {
  titles: [ {title: "About EcoSpirt"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
   
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
