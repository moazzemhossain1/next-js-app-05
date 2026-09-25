import React from "react";
import Image from "next/image";
import { ExerciseType } from "@/Types/DataTypes";
import { FaDumbbell, FaFire, FaClock, FaStar } from "react-icons/fa";

interface DataCardProps {
    data: ExerciseType;
}

const DataCard = ({ data }: DataCardProps) => {
    return (
        <div
            className="
        group
        overflow-hidden
        rounded-3xl
        border border-[#323845]
        bg-[#222630]
        shadow-[0_15px_50px_rgba(0,0,0,0.25)]
        transition-all duration-300
        hover:-translate-y-2
        hover:border-[#C2F800]/50
      "
        >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={data.image}
                    alt={data.name}
                    width={400}
                    height={300}
                    className="
             h-full
      w-full
      object-cover
      transition
      duration-500
      group-hover:scale-110
          "
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222630] via-transparent to-transparent" />

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 backdrop-blur-sm">
                    <FaStar className="text-[#C2F800]" />
                    <span className="font-semibold text-white">
                        {data.rating}
                    </span>
                </div>

                {/* Difficulty */}
                <div className="absolute bottom-4 left-4 rounded-full border border-[#C2F800]/30 bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black">
                    {data.difficulty}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <h2 className="mb-2 text-xl font-bold uppercase text-white transition group-hover:text-[#C2F800]">
                    {data.name}
                </h2>

                {/* Equipment */}
                <div className="mb-4 flex items-center gap-2 text-sm text-[#9CA3AF]">
                    <FaDumbbell className="text-[#C2F800]" />
                    <span>{data.equipment}</span>
                </div>

                {/* Muscle Groups */}
                <div className="mb-5 flex flex-wrap gap-2">
                    {data.muscleGroups.map((muscle, index) => (
                        <span
                            key={index}
                            className="
                rounded-full
                border border-[#323845]
                bg-[#2D3440]
                px-3 py-1
                text-xs
                font-medium
                text-[#D1D5DB]
              "
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 border-t border-[#323845] pt-4">

                    <div className="text-center">
                        <FaClock className="mx-auto mb-2 text-[#C2F800]" />
                        <p className="text-xs text-[#9CA3AF]">Duration</p>
                        <p className="font-bold text-white">
                            {data.duration} min
                        </p>
                    </div>

                    <div className="border-x border-[#323845] text-center">
                        <FaFire className="mx-auto mb-2 text-[#C2F800]" />
                        <p className="text-xs text-[#9CA3AF]">Calories</p>
                        <p className="font-bold text-white">
                            {data.caloriesBurned}
                        </p>
                    </div>

                    <div className="text-center">
                        <FaDumbbell className="mx-auto mb-2 text-[#C2F800]" />
                        <p className="text-xs text-[#9CA3AF]">Sets</p>
                        <p className="font-bold text-white">
                            {data.sets} × {data.reps}
                        </p>
                    </div>

                </div>

                {/* Button */}


            </div>
        </div>
    );
};

export default DataCard;