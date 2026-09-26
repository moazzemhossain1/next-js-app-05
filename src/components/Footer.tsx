import React from 'react';
import logeo from "@/assets/logo.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0B1220] border-t border-[#1E293B] mt-20">
                <div className="container mx-auto px-4 py-10">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        {/* Logo & Brand */}
                        <div className="text-center md:text-left">

                            <div className='flex items-center justify-center gap-1'>
                                <Image src={logeo} width={20} height={20} alt='logto'></Image>
                                <h2 className="text-3xl font-extrabold text-[#C2F800]">
                                    FITLOG
                                </h2>
                            </div>
                            <p className="text-[#8A92A0] mt-2 text-sm">
                                Your ultimate workout companion.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <a href="/" className="text-[#CBD5E1] hover:text-[#C2F800] transition">
                                Home
                            </a>
                            <a href="/Workouts" className="text-[#CBD5E1] hover:text-[#C2F800] transition">
                                Workouts
                            </a>
                            <a href="/MyPlan" className="text-[#CBD5E1] hover:text-[#C2F800] transition">
                                My Plan
                            </a>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#1E293B] my-6"></div>

                    {/* Copyright */}
                    <div className="text-center text-[#8A92A0] text-sm">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </div>

                </div>
            </footer>

        </div>
    );
};

export default Footer;