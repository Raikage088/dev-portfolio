import { TypeAnimation } from "react-type-animation";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { IconButtons } from "@/components/IconButtons";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedInIcon } from "@/components/LinkedInIcon";
import { FacebookIcon } from "@/components/FacebookIcon";
import { Button } from "@/components/Button";
import { DownloadIcon } from "@/components/DownloadIcon";
import { ArrowIcon } from "@/components/ArrowIcon";

import Portfolio from "../assets/Portfolio.svg";

export const Hero = () => {
  const socialLinks = [
    {
      href: "https://github.com/Raikage088",
      icon: <GithubIcon className="w-7 h-auto" />,
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/xyrus-john-p-vertucio-141358392/",
      icon: <LinkedInIcon className="w-7 h-auto" />,
      label: "Linked In",
    },
    {
      href: "https://www.facebook.com/Saaaaaiiiiiiii/",
      icon: <FacebookIcon className="w-7 h-auto" />,
      label: "Facebook",
    },
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };

  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // 2. Aggressive Range: 25 to 30 degrees is the sweet spot
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 gap-10 items-center px-6 py-20 lg:grid-cols-2 lg:px-20 overflow-x-hidden w-full"
    >
      {/* LEFT SIDE */}
      <div className="grid grid-cols-1 gap-10 w-full min-w-0">
        {/* Headline */}
        <div className="flex flex-col items-center gap-6 w-full max-w-150 min-w-80 mx-auto lg:items-start lg:mx-0 order-2 lg:order-1">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight lg:leading-normal">
            Hi,{" "}
            <span className="inline lg:inline">
              <TypeAnimation
                sequence={[
                  "I'm Xyrus.",
                  2000,
                  "I Build Web Apps.",
                  1500,
                  "I Solve Problems.",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                className="font-bold text-3xl lg:text-5xl"
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[16px] lg:text-3xl text-font-color-secondary text-justify hyphens-auto leading-snug break-words overflow-hidden w-full px-2">
            I am a <span className="font-bold">Computer Engineering</span>{" "}
            undergraduate and aspiring
            <span className="font-bold"> Software Engineer</span> dedicated to
            building high-performance, real-time web and native applications.
          </p>
          <div className="flex gap-10 -ml-1">
            {/* Social Links */}
            {socialLinks.map((social, index) => (
              <a
                href={social.href}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <IconButtons className="text-black border-black transition-colors duration-300 ease-in-out p-0.5 active:bg-black/90 active:text-white lg:hover:bg-black/90 lg:hover:text-white">
                  {social.icon}
                </IconButtons>
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-stretch w-full max-w-md mx-auto lg:max-w-none lg:flex-row lg:gap-19.5">
            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {" "}
              <Button className="group flex justify-center items-center text-black! bg-button-secondary shadow-2xl shadow-black transition-transform duration-300 ease-in-out hover:scale-105 hover:text-white! active:scale-95 w-full">
                LET'S CONNECT
                <span className="flex items-center justify-center ml-2">
                  <ArrowIcon className="w-3 h-auto transition-all duration-300 ease-in-out group-hover:translate-x-1 lg:w-4" />
                </span>
              </Button>
            </a>

            <a
              href="/Resume-Xyrus-Vertucio.pdf"
              download="Resume-Xyrus-Vertucio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contents"
            >
              <Button className="group flex justify-center items-center bg-button-primary shadow-2xl shadow-black transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-button-secondary! hover:text-black! active:scale-95 w-full sm:w-65">
                GET RESUME
                <span className="flex items-center justify-center ml-2">
                  <DownloadIcon className="inline-block w-3 h-auto transition-all duration-300 ease-in-out group-hover:translate-y-0.5 lg:w-4" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE*/}
      <div
        className="relative flex justify-center items-center w-full h-full py-10"
        style={{ perspective: "1500px" }}
      >
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="absolute inset-0 z-50 cursor-pointer"
        />

        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          // Compacted padding (p-8 to p-7) and slightly narrower max-w (max-w-xl to max-w-lg)
          className="w-full max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 lg:p-7 font-mono pointer-events-none relative z-10 origin-center overflow-hidden max-h-[70vh] lg:max-h-[80vh]"
        >
          {/* Header: Exact replica of the macOS style buttons */}
          <div
            style={{ transform: "translateZ(15px)" }}
            className="flex items-center gap-2.5 mb-4 lg:mb-6"
          >
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-auto text-gray-400 text-[11px] font-medium opacity-60 truncate">
              Portfolio.jsx
            </span>
          </div>

          {/* CODE CONTENT: Tightened leading and gaps */}
          <div
            style={{ transform: "translateZ(15px)" }}
            className="text-[11px] sm:text-[13px] lg:text-[14px] leading-tight lg:leading-normal text-[#24292e] font-medium tracking-tight overflow-auto max-h-[55vh] lg:max-h-[65vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right select-none">
                1
              </span>
              <p>
                <span className="text-[#d73a49]">import</span>{" "}
                <span className="font-bold">React</span>{" "}
                <span className="text-[#d73a49]">from</span>{" "}
                <span className="text-[#032f62]">"react"</span>;
              </p>
            </div>

            {/* Reduced empty line height */}
            <div className="flex gap-5 h-[0.5em]">
              <span className="text-gray-300 w-5 text-right opacity-0">2</span>
            </div>

            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">3</span>
              <p>
                <span className="text-[#d73a49]">const</span>{" "}
                <span className="text-[#6f42c1] font-bold">
                  DeveloperProfile
                </span>{" "}
                = () =&gt; {"{"}
              </p>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">4</span>
              <p className="ml-6">
                <span className="text-[#d73a49]">const</span> stack = [
                <span className="text-[#032f62]">
                  "React", "Node.js", "MySQL", "Kotlin"
                </span>
                ];
              </p>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">5</span>
              <p className="ml-6">
                <span className="text-[#d73a49]">const</span> mindset ={" "}
                <span className="text-[#032f62]">
                  "Enterprise Standards &gt; Quick Fixes"
                </span>
                ;
              </p>
            </div>

            <div className="flex gap-5 h-[0.5em]">
              <span className="text-gray-300 w-5 text-right opacity-0">6</span>
            </div>

            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">7</span>
              <p className="ml-6">
                <span className="text-[#d73a49]">return</span> (
              </p>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">8</span>
              <p className="ml-12">
                &lt;<span className="text-[#22863a]">div</span> className=
                <span className="text-[#032f62]">"portfolio-snippet"</span>&gt;
              </p>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">9</span>
              <p className="ml-18">
                &lt;<span className="text-[#22863a]">h1</span>&gt;Hello, I'm
                Xyrus&lt;/<span className="text-[#22863a]">h1</span>&gt;
              </p>
            </div>
            <div className="flex gap-5 text-gray-400">
              <span className="text-gray-300 w-5 text-right">10</span>
              <p className="ml-18">
                &lt;<span className="text-[#22863a]">p</span>&gt;Specializing in{" "}
                {'{stack.join(", ")}'}&lt;/
                <span className="text-[#22863a]">p</span>&gt;
              </p>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">11</span>
              <p className="ml-18">
                &lt;<span className="text-[#22863a]">blockquote</span>&gt;
                {"{mindset}"}&lt;/
                <span className="text-[#22863a]">blockquote</span>&gt;
              </p>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">12</span>
              <p className="ml-18">
                &lt;<span className="text-[#22863a]">Status</span> learning=
                {"{"}
                <span className="text-[#005cc5]">true</span>
                {"}"} building=
                <span className="text-[#032f62]">"Scalable Systems"</span> /&gt;
              </p>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">13</span>
              <p className="ml-12">
                &lt;/<span className="text-[#22863a]">div</span>&gt;
              </p>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">14</span>
              <p className="ml-6">);</p>
            </div>
            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">15</span>
              <p>{"};"}</p>
            </div>

            <div className="flex gap-5 h-[0.5em]">
              <span className="text-gray-300 w-5 text-right opacity-0">16</span>
            </div>

            <div className="flex gap-5">
              <span className="text-gray-300 w-5 text-right">17</span>
              <p>
                <span className="text-[#d73a49]">export default</span>{" "}
                <span className="text-[#6f42c1] font-bold">
                  DeveloperProfile
                </span>
                ;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
