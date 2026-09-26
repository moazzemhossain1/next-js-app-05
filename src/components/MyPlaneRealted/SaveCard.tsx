"use client";

import { WorkoutContext } from "@/Contaxet/ExcirsContaxt";
import { ExerciseType } from "@/Types/DataTypes";
import { useContext } from "react";
import { FaFire, FaStar } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaDumbbell } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";



const SaveCard = () => {
    const SaveworkoutContext = useContext(WorkoutContext);

    if (!SaveworkoutContext) {
        return null;
    }

    const {
        savedExercises,
        setSavedExercises,

        saveCount,
        setsaveCount,

        toSaveDuration,
        setSaveDuration,

        SaveCalories,
        setSaveCalories

    } = SaveworkoutContext;
    const handleDletedPlane = (id: number) => {
        const deletedExercis = savedExercises.find(
            (item: ExerciseType) => item.id === id
        );

        if (!deletedExercis) return;
        const updatedExcrisePlan = savedExercises.filter(
            (item: ExerciseType) => item.id !== id)
        setSavedExercises(updatedExcrisePlan);
        setsaveCount(saveCount - 1);
        setSaveDuration(
            toSaveDuration - deletedExercis.duration
        );

        setSaveCalories(
            SaveCalories - deletedExercis.caloriesBurned
        );



        toast.success("🗑️ Exercise removed from your saved!");

    }


    // Empty State
    if (savedExercises.length === 0) {
        return (
            <div className="mt-10 flex flex-col items-center justify-center text-center bg-[#0B1220] border border-[#1E293B] rounded-3xl p-10">
                <div className="w-20 h-20 rounded-full bg-[#C2F800]/10 flex items-center justify-center mb-5">
                    <FaDumbbell className="text-4xl text-[#C2F800]" />
                </div>

                <h2 className="text-2xl font-bold text-white">
                    NOTHING HERE YET
                </h2>

                <p className="text-gray-400 mt-3 max-w-md">
                    Browse the library and add a lift to get today moving.
                </p>

                <Link href={"/Workouts"}>
                    <button className="mt-6 px-6 py-3 rounded-full bg-[#C2F800] text-black font-bold hover:scale-105 transition">
                        Go to Workouts
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-4 mt-7">
            {savedExercises.map((exercis: ExerciseType) => (
                <div
                    key={exercis.id}
                    className="bg-[#0B1220] border border-[#1E293B] rounded-2xl p-4 flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <Image
                            width={300}
                            height={300}
                            src={exercis.image}
                            alt={exercis.name}
                            className="w-28 h-20 rounded-xl object-cover"
                        />

                        <div>
                            <h2 className="text-white font-bold uppercase text-lg">
                                {exercis.name}
                            </h2>

                            <p className="text-gray-400 text-sm mt-1">
                                {exercis.equipment}
                            </p>

                            <div className="flex items-center gap-4 mt-3 text-sm text-gray-300">
                                <div className="flex items-center gap-1">
                                    <LuClock3 className="text-lime-400" />
                                    <span>{exercis.duration} min</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaFire className="text-lime-400" />
                                    <span>{exercis.caloriesBurned} kcal</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>{exercis.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href={`/Workouts/${exercis.id}`}>
                            <button className="btn btn-outline border-[#334155] text-white rounded-full">
                                View Details
                            </button>
                        </Link>

                        <button className="btn bg-[#C2F800] hover:bg-[#d4ff33] border-none text-black rounded-full font-bold">
                            ✓ Mark as Done
                        </button>

                        <button
                            onClick={() => handleDletedPlane(exercis.id)}
                            className="text-gray-500 hover:text-red-500 text-xl">
                            <IoClose />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SaveCard;