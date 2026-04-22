import { motion, useScroll, useTransform } from "framer-motion";

import mypic from "../assets/image_4.jpg";
import { useRef } from "react";

export const About = () => {
  const stats = [
    {
      value: "3+",
      label: "EXPERIENCE",
    },
    {
      value: "3+",
      label: "PROJECTS",
    },
    {
      value: "20+",
      label: "TECH MASTERED",
    },
  ];

  const sectionScroll = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionScroll,
    offset: ["start end", "center start"],
  });

  // If scroll is 0% - 50% start the opacity animation from 0 - 1
  const opacityControl = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // If scroll is 0% - 50% text animation from left to right
  const textFadeInLeft = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

  // If scroll is 0% - 50% text animation from right to left
  const imageFadeInRight = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <motion.section
      ref={sectionScroll}
      id="about"
      className="flex flex-col lg:items-center lg:flex-row min-h-screen px-5 lg:px-20 gap-5 lg:gap-35 py-20 lg:py-0"
      style={{ opacity: opacityControl }}
    >
      <motion.div
        style={{ x: textFadeInLeft }}
        className="flex flex-col gap-3 w-full lg:w-182.5 order-2 lg:order-1"
      >
        <h1 className="font-bold text-[20px] text-center lg:text-[40px] lg:text-left text-font-color-secondary">
          About <span className="text-black">"The Engineer"</span>
        </h1>
        <p className="text-[16px] text-font-color-secondary text-justify hyphens-auto lg:text-[25px]">
          I am a{" "}
          <span className="font-bold">Computer Engineering Undergraduate</span>{" "}
          and aspiring
          <span className="font-bold"> Software Engineer</span> specializing in
          the integration of{" "}
          <span className="font-bold">
            High-Performance, Real-Time Connectivity, Embedded Systems
          </span>{" "}
          and <span className="font-bold">Technological Innovation</span>. I
          bridge the gap between complex back end architectures and intuitive
          user experiences. By prioritizing{" "}
          <span className="font-bold">Enterprise Standards </span>
          over quick fixes, I ensure that every line of code is built for
          scalability and long-term maintenance.
        </p>
        <div className="flex items-center justify-center gap-15  lg:gap-50 lg:mt-10">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <h1 className="font-bold text-[14px] lg:text-2xl">
                  {stat.value}
                </h1>
                <h3 className="font-bold text-[13px] lg:text-[15px]">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        style={{ x: imageFadeInRight }}
        className="flex justify-center order-1 lg:order-2"
      >
        <img
          src={mypic}
          alt="My Picture"
          className="relative outline-none rounded-lg hover:scale-105 mt-5 w-65 h-auto lg:w-100 transition-transform duration-300"
          style={{ willChange: "transform" }}
        />
      </motion.div>
    </motion.section>
  );
};
