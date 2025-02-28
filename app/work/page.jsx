"use client";

import { motion } from "framer-motion";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Library management",
    description:
      "The Library Management system is designed to streamline the process of managing library operations. It includes features for cataloging books, tracking loans, and managing user accounts.",
    stack: [
      { name: "ReactJs" },
      { name: "TailwindCSS" },
      { name: "Java" },
      { name: "Spring boot" },
    ],
    image: "/assets/work/login.jpg",
    live: "",
    github: "https://github.com/DevNguyenPhuong/library-management",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Wild oasis",
    description:
      "Wild Oasis is a cabin management project designed to streamline the booking and maintenance processes of luxury cabins. It offers an intuitive interface for users to reserve cabins, manage check-ins and check-outs, and track maintenance requests.",
    stack: [
      { name: "HTML 5" },
      { name: "Styled component" },
      { name: "NextJs" },
      { name: "ReactJs" },
    ],
    image: "/assets/work/wildOasis.jpg",
    live: "the-wild-oasis-study.vercel.app",
    github: "https://github.com/DevNguyenPhuong/wild-oasis",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Natour",
    description:
      "Natour is a comprehensive website designed for booking tours, offering users an intuitive interface to explore various travel options. From guided adventures to self-paced explorations, our platform provides detailed itineraries, customer reviews, and easy booking features, ensuring a seamless travel planning experience.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/natours.jpg",
    live: "",
    github: "https://github.com/DevNguyenPhuong/Natour",
  },
  {
    num: "04",
    category: "frontend",
    title: "Virtual gaming",
    description:
      "Virtual Gaming is an engaging website that showcases immersive gaming experiences, utilizing GSAP to deliver stunning animations and a beautiful user interface. Users can enjoy a seamless browsing experience enhanced by dynamic transitions and effects.",
    stack: [{ name: "TailwindCSS" }, { name: "GSAP" }, { name: "NextJs" }],
    image: "/assets/work/zentry.jpg",
    live: "",
    github: "https://github.com/DevNguyenPhuong/virtual-gaming-GSAP-",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                <Link target="_blank" href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] w-full relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={project.image}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        alt={`Project ${project.name || index + 1}`}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
