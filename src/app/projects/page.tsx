/* eslint-disable react/no-unescaped-entities */
"use client";
import useSWR from "swr";
import Image from "next/image";
import Navbar from "../component/navbar";
import BlurBg from "../component/blurbg";
import { IoLogoLinkedin, IoArrowDown, IoLogoGithub } from "react-icons/io5";
import { useRef } from "react";
import ProjectCard from "./component/projectcard";
import TechCard from "./component/techcard";

interface Quote {
  content: string;
  authorSlug: string;
}
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col relative px-8 lg:px-28 mt-8 overflow-x-hidden mb-10">
        <Navbar />
        <BlurBg background="#A469FC" pxBlur="100" x="300" y="200" />
        <BlurBg background="#FC6969" pxBlur="80" x="1400" y="200" />
        <BlurBg background="#00FFFF" pxBlur="160" x="100" y="800" />
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
            Projects
          </h3>
          <Image
            src="/assets/img/fox.png"
            width={200}
            height={123}
            className="absolute -z-10 right-36 -top-16"
            alt="Picture of the author"
          />
        </div>
        {/* CARD */}
        <div className="grid grid-cols-1 w-full h-full lg:grid-cols-3 mt-16 lg:px-32 mb-10">
          <div className="h-full w-full flex justify-center items-center">
            <ProjectCard
              tech={[
                "Code Igniter 4",
                "Kotlin",
                "Python Flask",
                "Google Cloud",
                "Jetpack Compose",
              ]}
              device={"mobile"}
              title="Hi Service"
              subtitle="Bangkit Capstone"
              linkImg="hiservice.gif"
              linkGithub="https://github.com/hi-service"
              linkYoutube="https://youtu.be/7JtyW6uldpo"
            ></ProjectCard>
          </div>
          <div className="h-full w-full flex justify-center mt-4 lg:mt-0 items-center">
            <ProjectCard
              tech={["Laravel 8", "PHP", "Bootstrap"]}
              device={"web"}
              title="Sistem Monitoring Train Set"
              subtitle="MSIB PT Inka"
              linkImg="trainset.png"
            ></ProjectCard>
          </div>
          <div className="h-full w-full flex justify-center mt-4 lg:mt-0 items-center">
            <ProjectCard
              tech={["Laravel 11", "PHP", "Tailwind CSS", "Next JS"]}
              device={"web"}
              title="UJM E-Catalogue"
              subtitle="Free Lance"
              linkImg="ujm.png"
              linkDefault="https://ujm-website-8kmz.vercel.app/"
            ></ProjectCard>
          </div>
          <div className="h-full w-full flex justify-center mt-4 items-center">
            <ProjectCard
              tech={["Next JS", "postgresql", "Tailwind CSS", "Vercel App"]}
              device={"web"}
              title="To Do App"
              subtitle="Personal Project"
              linkImg="todo.png"
              linkDefault="https://to-do-app-list-using-next-js.vercel.app/"
              linkGithub="https://github.com/rickyeeez/To-Do-App-List-Using-Next-JS"
            ></ProjectCard>
          </div>
          <div className="h-full w-full flex justify-center mt-4 items-center">
            <ProjectCard
              tech={["Laravel 11", "MySQL", "Tailwind CSS"]}
              device={"web"}
              title="Website CBT Sertifikasi K3s"
              subtitle="Free lance"
              linkImg="cbt.png"
            ></ProjectCard>
          </div>
          <div className="h-full w-full flex justify-center mt-4 items-center">
            <ProjectCard
              tech={["Flutter", "Dart"]}
              device={"mobile"}
              title=" PPDIKTI Data Scrapper"
              subtitle="Personal Project"
              linkImg="ppdikti.png"
              linkGithub="https://github.com/rickyeeez/Flutter-PPDIKTI-API"
            ></ProjectCard>
          </div>
          <div className="h-full w-full flex justify-center mt-4 items-center">
            <ProjectCard
              tech={["Laravel 9", "PHP", "Tailwind CSS"]}
              device={"web"}
              title="Teknokreasi UMKM Dadaprejo"
              subtitle="Freelance"
              linkImg="umkmdadaprejo.png"
              linkDefault="https://umkmdadaprejo.com/"
            ></ProjectCard>
          </div>
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
