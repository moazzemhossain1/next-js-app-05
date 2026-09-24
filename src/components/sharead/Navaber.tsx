"use client";
import React from 'react';
import Logo from "@/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navaber = () => {
    const pathname = usePathname();

    const Links = (
        <>
            <li>
                <Link
                    href="/Workouts"
                    className={`rounded-2xl ${pathname === "/Workouts"
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
                    className={`rounded-2xl  ${pathname === "/my-plane"
                        ? "bg-[#1A2312] text-[#C2F800] font-semibold"
                        : "text-[#9CA3AF] font-medium"
                        }`}
                >
                    My Plan
                </Link>
            </li>
        </>
    );






    // const Links = <>
    //     < li >
    //         <Link className='text-[#C2F800] font-semibold rounded-2xl' href="/Workouts">Workouts</Link>
    //     </li>
    //     < li >
    //         <Link className='text-[#9CA3AF] font-medium rounded-2xl' href="/my-plane">My Plan</Link>
    //     </li>

    // </>


    return (
        <div className=' bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <div className='flex gap-1'>
                        <Image src={Logo} width={30} height={30} alt='logo'></Image>
                        <a className=" btn-ghost text-xl">FITLOG</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <a className="text-[#9CA3AF] font-medium">Plan(0)</a>
                    <a className="text-[#9CA3AF] font-medium">Saved(0)</a>
                </div>
            </div>
        </div>
    );
};

export default Navaber;