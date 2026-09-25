"use client";

import React, { useContext } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutContext } from "@/Contaxet/ExcirsContaxt";

const Navaber = () => {

    const workout = useContext(WorkoutContext);

    if (!workout) {
        return null;
    }

    const {
        count,
        saveCount,
    } = workout;

    const pathname = usePathname();

    const Links = (
        <>
            <li>
                <Link
                    href="/"
                    className={`rounded-2xl ${pathname === "/"
                        ? "bg-[#1A2312] text-[#C2F800] font-semibold"
                        : "text-[#9CA3AF] font-medium"
                        }`}
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/my-plane"
                    className={`rounded-2xl ${pathname === "/my-plane"
                        ? "bg-[#1A2312] text-[#C2F800] font-semibold"
                        : "text-[#9CA3AF] font-medium"
                        }`}
                >
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <>
            <div className="sticky top-0 z-50 bg-base-100/95 backdrop-blur-md shadow-sm">

                <div className="navbar container mx-auto">

                    <div className="navbar-start">

                        <div className="dropdown">

                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    aria-label="Menu"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                {Links}
                            </ul>

                        </div>

                        <div className="flex items-center gap-2">
                            <Image
                                src={Logo}
                                width={30}
                                height={30}
                                alt="logo"
                            />

                            <h2 className="text-xl font-bold">
                                FITLOG
                            </h2>
                        </div>

                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {Links}
                        </ul>
                    </div>

                    <div className="navbar-end flex gap-4">

                        <div className="font-medium text-[#9CA3AF]">
                            Plan

                            <span
                                className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        ml-2
                                        w-8
                                        h-6
                                        rounded-full
                                        border
                                      border-blue-200
                                      bg-[#CCFF00]
                                      text-[#000000]
                                      
                                        "
                            >
                                {count}
                            </span>
                        </div>

                        <div className="font-medium text-[#9CA3AF]">
                            Saved <span
                                className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        ml-2
                                        w-8
                                        h-6
                                        rounded-full
                                        border
                                      border-blue-200
                                      
                                      
                                        "
                            >
                                {saveCount}
                            </span> 
                        </div>

                    </div>

                </div>

            </div>

            <div className="divider -mt-2"></div>
        </>
    );
};

export default Navaber;