
import { ExerciseType } from "@/Types/DataTypes";
import Image from "next/image";

import { FaBookmark, FaPlus } from "react-icons/fa";
import PlaneButon from "../ButtonRealeted/PlaneButon";

interface DetileDataCardProps {
    detileData: ExerciseType;
}

const DetileDataCard = ({ detileData }: DetileDataCardProps) => {

    
    return (
        <section className="container mx-auto px-4 py-10">
            <div className="bg-[#1D212B] border border-[#2C3240] rounded-3xl p-6 lg:p-10">

                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* Left Side Image */}
                    <div className="h-full">
                        <Image
                            src={detileData.image}
                            alt={detileData.name}
                            width={800}
                            height={800}
                            className="
        w-full
        h-full
        min-h-[750px]
        object-cover
        rounded-3xl
      "
                        />
                    </div>

                    {/* Right Side */}
                    <div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white mb-4">
                            {detileData.name}
                        </h1>

                        {/* Description */}
                        <p className="text-[#9CA3AF] leading-relaxed mb-6">
                            {detileData.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {detileData.muscleGroups.map((muscle, index) => (
                                <span
                                    key={index}
                                    className="
                    bg-[#C2F800]
                    text-black
                    text-sm
                    font-semibold
                    px-4
                    py-2
                    rounded-full
                  "
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Info Table */}
                        <div className="bg-[#222630] rounded-2xl p-5 mb-8">

                            <div className="flex justify-between py-3 border-b border-[#323845]">
                                <span className="text-[#9CA3AF] uppercase font-semibold">
                                    Equipment
                                </span>
                                <span className="text-white">
                                    {detileData.equipment}
                                </span>
                            </div>

                            <div className="flex justify-between py-3 border-b border-[#323845]">
                                <span className="text-[#9CA3AF] uppercase font-semibold">
                                    Difficulty
                                </span>
                                <span className="text-white">
                                    {detileData.difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between py-3 border-b border-[#323845]">
                                <span className="text-[#9CA3AF] uppercase font-semibold">
                                    Sets
                                </span>
                                <span className="text-white">
                                    {detileData.sets}
                                </span>
                            </div>

                            <div className="flex justify-between py-3 border-b border-[#323845]">
                                <span className="text-[#9CA3AF] uppercase font-semibold">
                                    Reps
                                </span>
                                <span className="text-white">
                                    {detileData.reps}
                                </span>
                            </div>

                            <div className="flex justify-between py-3 border-b border-[#323845]">
                                <span className="text-[#9CA3AF] uppercase font-semibold">
                                    Duration
                                </span>
                                <span className="text-white">
                                    {detileData.duration} min
                                </span>
                            </div>

                            <div className="flex justify-between py-3 border-b border-[#323845]">
                                <span className="text-[#9CA3AF] uppercase font-semibold">
                                    Calories
                                </span>
                                <span className="text-white">
                                    {detileData.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between pt-3">
                                <span className="text-[#9CA3AF] uppercase font-semibold">
                                    Rating
                                </span>
                                <span className="text-white">
                                    {detileData.rating}
                                </span>
                            </div>

                        </div>

                        {/* Instructions */}
                        <div className="mb-8">
                            <h2 className="text-white font-bold text-xl mb-4 uppercase">
                                Instructions
                            </h2>

                            <ol className="space-y-3">
                                {detileData.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="text-[#D1D5DB] flex gap-3"
                                    >
                                        <span className="font-bold text-[#C2F800]">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            <PlaneButon detileData={detileData}></PlaneButon>

                            

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetileDataCard;