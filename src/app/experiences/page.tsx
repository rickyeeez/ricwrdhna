/* eslint-disable react/no-unescaped-entities */
"use client";
import useSWR from "swr";
import Image from "next/image";
import Navbar from "../component/navbar";
import BlurBg from "../component/blurbg";
import { IoLogoLinkedin, IoArrowDown, IoLogoGithub } from "react-icons/io5";
import { useRef } from "react";
import ExperienceCard from "./component/experience_card";
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
          Full Stack Developer & Mobile Developer Enthusiast
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
      <div className="flex flex-col space-y-4 mt-16 w-full">
        <ExperienceCard
          experience_logo="/assets/logo/e_umm.png"
          experience_start="October 2021"
          experience_end="July 2025"
          experience_description={[
            "Developed academic projects focusing on information systems and business process re-engineering.",
            "Actively engaged in lectures, discussions, and academic activities to enhance knowledge and collaboration.",
            "Maintained a strong academic record with a GPA of 3.87 / 4.00.",
          ]}
          experience_name="Universitas Muhammadiyah Malang (Educational Experience)"
          experience_role="Bachelor of Informatics Engineering -  GPA : 3,87 / 4.00"
        ></ExperienceCard>
        <ExperienceCard
          experience_logo="/assets/logo/e_bangkit.png"
          experience_start="August 2023"
          experience_end="January 2024"
          experience_description={[
            "Achieved a Band 5 (Excellent) grade for ILT Soft Skills 1-6, demonstrating proficiency in essential soft skills. Maintained a record of punctuality with no late submissions.",
            "Complete all project submissions on time, and meet all the criteria for the questions or problems given and get ahead of schedule status.",
            "Being the originator of the idea for the final assignment in this program as well as being the team leader with a project called Hi Service. Apart from that, he is also an Android application developer and runs features for this final project.",
          ]}
          experience_name="Bangkit Academy led By Google, GoTo and Traveloka"
          experience_role="Mobile Development Cohort"
        ></ExperienceCard>
        <ExperienceCard
          experience_logo="/assets/logo/Le_inka.png"
          experience_start="February 2024"
          experience_end="July 2024"
          experience_description={[
            "Become a Full Stack Developer to build a given project using the Laravel Framework, starting from creating the UI, distributing data from the database to the controller, and processing the data in the controller to the application view.",
            "Added Train Set Monitoring Module to the train project monitoring system application developed using Laravel.",
            "Create a visualization dashboard of project development information for customers, according to the customer's project. Where the data is data that has been released.",
          ]}
          experience_name="PT INDUSTRI KERETA API ( PERSERO )"
          experience_role="IT Research and Development Intern ( Full Stack Web Developer )"
        ></ExperienceCard>
      </div>
    </main>
  );
}
