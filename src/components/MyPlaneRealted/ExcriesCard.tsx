"use client";
import { WorkoutContext } from "@/Contaxet/ExcirsContaxt";
import { useContext } from "react";
import { FaDumbbell } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

const ExcriesCard = () => {
    const PlaneExcrise=useContext(WorkoutContext)
    const{count,setCount,totalDuration,setTotalDuration,PlaCalories}=PlaneExcrise;
    const handlePlaneIncrije=()=>{
        const PlanIn=count+1;
        setCount(PlanIn)

    }


    return (
        <div>
            <div className="w-full rounded-2xl sm:rounded-[24px] lg:rounded-[32px] border border-[#26385d] bg-[#111a2e] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 shadow-[0_0_40px_rgba(30,60,120,0.12)] ">

                <div className="grid grid-cols-1 md:grid-cols-3">

                    {/* Exercises */}
                    <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-12 px-2 sm:px-4 py-6 md:py-0 md:border-r md:border-[#304261]">

                        <div className="flex h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 shrink-0 items-center justify-center rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#79a934] bg-[#27342b] shadow-[0_0_35px_rgba(190,255,70,0.15)]">
                            <FaDumbbell className="text-4xl sm:text-5xl lg:text-6xl text-[#d5ff5c]" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-[#aab7d3]">
                                Exercises
                            </p>

                            <h2
                            onClick={()=> handlePlaneIncrije()}
                             className="mt-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                                {count}
                            </h2>

                            <div className="mt-3 sm:mt-4 lg:mt-5 h-2 sm:h-2.5 lg:h-3 w-full max-w-[215px] overflow-hidden rounded-full bg-[#344039]">
                                <div className="h-full w-[75%] rounded-full bg-[#d5ff5c] shadow-[0_0_12px_#d5ff5c]" />
                            </div>
                        </div>
                    </div>


                    {/* Minutes */}
                    <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-12 px-2 sm:px-4 lg:px-10 py-6 md:py-0 md:border-r md:border-[#304261]">

                        <div className="flex h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 shrink-0 items-center justify-center rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#1761a5] bg-[#102c4d] shadow-[0_0_35px_rgba(0,150,255,0.15)]">
                            <FiClock className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#69c3ff]" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-[#aab7d3]">
                                Minutes
                            </p>

                            <h2 className="mt-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                                {totalDuration}
                            </h2>

                            <div className="mt-3 sm:mt-4 lg:mt-5 h-2 sm:h-2.5 lg:h-3 w-full max-w-[215px] overflow-hidden rounded-full bg-[#193d62]">
                                <div className="h-full w-[75%] rounded-full bg-[#32aaff] shadow-[0_0_12px_#32aaff]" />
                            </div>
                        </div>
                    </div>


                    {/* Calories */}
                    <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-12 px-2 sm:px-4 lg:px-10 py-6 md:py-0">

                        <div className="flex h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 shrink-0 items-center justify-center rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#873b8b] bg-[#38213d] shadow-[0_0_35px_rgba(255,50,240,0.15)]">
                            <FiHeart className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#f05ce7]" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-[#aab7d3]">
                                Calories
                            </p>

                            <h2 className="mt-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                                {PlaCalories}
                            </h2>

                            <div className="mt-3 sm:mt-4 lg:mt-5 h-2 sm:h-2.5 lg:h-3 w-full max-w-[215px] overflow-hidden rounded-full bg-[#48214d]">
                                <div className="h-full w-[75%] rounded-full bg-[#ec5ce5] shadow-[0_0_12px_#ec5ce5]" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default ExcriesCard;