/* eslint-disable react/no-unescaped-entities */
"use client";
import useSWR from "swr";
import Image from "next/image";
import Navbar from "./component/navbar";
import BlurBg from "./component/blurbg";
import { IoLogoLinkedin, IoArrowDown, IoLogoGithub } from "react-icons/io5";
import { UnderLine, UnderLineLg } from "./component/hr";
import { useRef } from "react";
import TechCard from "./component/tech_card";
import fetcher from "./util/fetcher";

interface Quote {
  quote: string;
  author: string;
}

export default function Home() {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const { data, error, isLoading } = useSWR<Quote>(
    "https://strangerthingsquotes.shadowdev.xyz/api/quotes",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col relative px-8 lg:px-28 mt-8 overflow-x-hidden mb-10">
        <Navbar />
        <BlurBg background="#A469FC" pxBlur="100" x="300" y="200" />
        <BlurBg background="#FC6969" pxBlur="80" x="1400" y="200" />
        <Image
          src="/assets/img/profile.png"
          width={400}
          height={200}
          className="absolute right-0 animate-fade-left duration-500 hidden lg:flex top-24"
          alt="Picture of the author"
        />
        <div className="mt-32 animate-fade-right duration-500 flex relative font-bold flex-col text-[60px] leading-snug">
          RICKY <br />
          TRIYOGA <br />
          WARDHANA <br />
          <p className="text-base font-medium px-2">
            Full Stack Developer Enthusiast
          </p>
          <div className="icon flex space-x-4 py-8 px-4">
            <a href="https://www.linkedin.com/in/rickyeeez/" target="_blank">
              <IoLogoLinkedin className="w-[40px] shadow cursor-pointer hover:text-slate-400  h-[40px]"></IoLogoLinkedin>
            </a>
            <a href="https://github.com/rickyeeez" target="_blank">
              <IoLogoGithub className="w-[40px] shadow cursor-pointer hover:text-slate-400 h-[40px]"></IoLogoGithub>
            </a>

            <a
              href="/cv"
              target="_blank"
              className="border-white border-2 rounded shadow cursor-pointer hover:text-slate-400 hover:border-slate-400 text-sm px-2 py-2"
            >
              CV
            </a>
          </div>
          {isLoading ? (
            <p className="text-start text-base italic font-medium text-slate-300">
              Loading quote....
            </p>
          ) : error ? (
            <p>Failed to load quote</p>
          ) : (
            <p className="text-start text-base italic font-medium text-slate-300">
              "{data?.quote}" - {data?.author}
            </p>
          )}
          <div className="w-full flex flex-col relative justify-center">
            <div
              className="flex flex-col w-fit absolute left-1/2 top-10  animate-bounce animate-infinite cursor-pointer hover:opacity-60 transition-opacity text-2xl items-center"
              onClick={scrollToAbout}
            >
              Down
              <IoArrowDown className=" text-[60px]"></IoArrowDown>
            </div>
          </div>
          <Image
            src="/assets/img/fox.png"
            width={200}
            height={123}
            className="absolute -z-10 left-52 top-10"
            alt="Picture of the author"
          />
        </div>
        <div className=" flex flex-col mt-36" ref={aboutRef}>
          <h3 className="text-[46px]  font-bold py-0"> About</h3>
          <UnderLine />
          <div className="py-4 text-justify text-[#E5E5E5]">
            My Name Is <b>Ricky Triyoga Wardhana</b> an Informathics Engineering
            Student From <b>University Of Muhammadiyah Malang</b>, I live and
            born in
            <b>Jombang</b>, and now I am <b>21 years old</b>. Having been
            interested in the world of programming since I was in middle school
            until now, I am determined to continue to deepen my knowledge about
            programming. With the learning by doing method that I use, I am
            dedicated to creating a new application that aims to improve my{" "}
            <b>personal and interpersonal qualities</b>. I always like to invite
            people around me to do things similar to me, this makes me have a{" "}
            <b>leadership</b> spirit because I always guide my peers to build
            their projects. I enjoy deepening all my knowledge about
            programming, such as{" "}
            <b>
              Front End Developer, Back End Developer and becoming a Cloud
              Engineer
            </b>
            , starting from{" "}
            <b>Mobile Apps platforms, Websites Apps and Desktop Applications</b>
            . This makes me highly dedicated to becoming a{" "}
            <b>Full Stack Developer</b>.
          </div>
        </div>
        <div className=" flex flex-col mt-16 relative">
          <h3 className="text-[46px]  font-bold py-0"> Tech Skills</h3>
          <UnderLineLg />
          <div className="w-full relative flex justify-center text-lg mb-4 overflow-hidden">
            <span className="w-32 h-8 absolute bg-cyan-800 blur-xl "></span>
            <h3 className="backdrop-blur-none">Frame Work</h3>
          </div>
          <BlurBg background="#52EFEF" pxBlur="100" x="120" y="40" />
          <div className="flex justify-end items-center w-full">
            <div className="py-4 grid grid-cols-2 lg:grid-cols-4 w-full px-4 lg:px-12 mb-12">
              {[...Array(12)].map((x, i) => (
                <TechCard count={(i + 1).toString()} key={i} />
              ))}
            </div>
          </div>
          <div className="w-full relative flex justify-center text-lg mb-4 overflow-hidden">
            <span className="w-32 h-8 absolute bg-cyan-800 blur-xl "></span>
            <h3 className="backdrop-blur-none">Programming Language</h3>
          </div>
        </div>
        <div className="flex justify-end items-center w-full mb-32">
          <div className="py-4 grid grid-cols-2 lg:grid-cols-4 w-full px-4 lg:px-12 mb-12">
            {[...Array(6)].map((x, i) => (
              <TechCard count={`p_${(i + 1).toString()}`} key={i} />
            ))}
          </div>
        </div>
        <div className="w-screen h-screen absolute -z-10  bottom-0 overflow-hidden">
          <BlurBg background="#C2BD47" pxBlur="100" x="800" y="200" />
        </div>

        <div className=" justify-center items-center flex flex-col z-10 lg:px-48 text-center ">
          <p className="text-[#D4CECE] ">
            {" "}
            Designed in{" "}
            <a
              className="hover:text-white"
              href="https://www.figma.com/design/VPllrhKIQCEmAyqls4ARGC/Untitled?node-id=0-1&t=3vK120MutGEUhegV-1"
            >
              <b>Figma</b>
            </a>{" "}
            for a visually appealing and modern user experience. Built with{" "}
            <a href="" className="hover:text-white font-bold">
              JavaScript and TypeScript
            </a>{" "}
            for a robust and scalable foundation. Powered by{" "}
            <a
              href="https://nextjs.org/"
              className="hover:text-white font-bold"
            >
              Next.js
            </a>{" "}
            Framework for efficient server-side rendering and performance
            optimization. Styled with{" "}
            <a
              href="https://tailwindcss.com/"
              className="font-bold hover:text-white"
            >
              Tailwind CSS
            </a>{" "}
            for a utility-first approach to clean and responsive design.
            Deployed with{" "}
            <a href="" className="font-bold hover:text-white">
              Vercel
            </a>{" "}
            for effortless deployment and global edge distribution.
          </p>
          <p className="py-2">© 2024, Ricky Triyoga Wardhana</p>
        </div>
      </main>
    </>
  );
}
