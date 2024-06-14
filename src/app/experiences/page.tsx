/* eslint-disable react/no-unescaped-entities */
"use client";
import useSWR from "swr";
import Image from "next/image";
import Navbar from "../component/navbar";
import BlurBg from "../component/blurbg";
import { IoLogoLinkedin, IoArrowDown, IoLogoGithub } from "react-icons/io5";
import { useRef } from "react";

interface Quote {
  content: string;
  authorSlug: string;
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative px-8 lg:px-28 mt-8 overflow-x-hidden mb-10">
      <Navbar />
      <BlurBg background="#A469FC" pxBlur="100" x="300" y="200" />
      <BlurBg background="#FC6969" pxBlur="80" x="1400" y="200" />
      <div className="mt-32 animate-fade-right duration-500 flex relative justify-center items-center w-full font-bold flex-col text-[60px] leading-snug">
        RICKY TRIYOGA WARDHANA
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
        <h3 className="text-3xl font-medium border-2 border-slate-300 px-2 py-2 rounded">
          Experiences
        </h3>
        <Image
          src="/assets/img/fox.png"
          width={200}
          height={123}
          className="absolute -z-10 right-36 -top-16"
          alt="Picture of the author"
        />
      </div>
    </main>
  );
}
