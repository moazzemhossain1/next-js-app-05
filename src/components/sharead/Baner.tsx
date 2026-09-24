
import React from "react";
import Image from "next/image";
import BanearLogo from "@/assets/banner.png";
import { Oswald } from "next/font/google";
import { FaArrowDown } from "react-icons/fa";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Baner = () => {
  return (
    <section className="px-4 py-10 lg:py-16">

      <div
        className="
          grid grid-cols-1 lg:grid-cols-2
          items-center gap-10
          bg-[#222630]
          border border-[#323845]
          rounded-[32px]
          p-8 md:p-12 lg:p-16
          shadow-[0_20px_80px_rgba(0,0,0,0.4)]
          overflow-hidden
        "
      >

        {/* Left Content */}
        <div className="space-y-6">

          {/* Eyebrow */}
          <div className="inline-block bg-[#2D3440] px-4 py-2 rounded-full border border-[#323845]">
            <p className="text-xs font-bold tracking-[3px] text-[#C2F800]">
              WORKOUT LIBRARY
            </p>
          </div>

          {/* Heading */}
          <h1
            className={`${oswald.className} text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-tight text-white`}
          >
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#9CA3AF] max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          {/* CTA */}
          <a
            href="#library"
            className="inline-flex items-center gap-3 rounded-full bg-[#C2F800] px-8 py-4 font-bold text-black transition hover:bg-[#d4ff4d]"
          >
            <FaArrowDown />
            BROWSE WORKOUTS
          </a>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center">

          <div className="absolute h-80 w-80 rounded-full bg-[#C2F800]/10 blur-[100px]"></div>

          <Image
            src={BanearLogo}
            alt="Fitness Hero Banner"
            priority
            className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-xl object-contain"
          />

        </div>

      </div>

    </section>
  );
};

export default Baner;

