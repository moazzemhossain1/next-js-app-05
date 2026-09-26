"use client";
import { WorkoutContext } from '@/Contaxet/ExcirsContaxt';
import { ExerciseType } from '@/Types/DataTypes';
import React, { useContext, useState } from 'react';
import { FaBookmark, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PlaneButon = ({ detileData }) => {
   
    const workutPoint = useContext(WorkoutContext);
    if (!workutPoint) {
        return null;
    }

    const { count,
        setCount,
        saveCount,
        setsaveCount,
        totalDuration,
        setTotalDuration,
        toSaveDuration,
        setSaveDuration,
        PlaCalories,
        setPlaCalories,
        SaveCalories,
        setSaveCalories,
        planExercises,
        setPlanExercises,
        savedExercises,
        setSavedExercises,
    } = workutPoint;
    const handleIncrajeplane = () => {
        const alreadyExists = planExercises.find(
            (item: ExerciseType) => item.id === detileData.id
        );

        if (alreadyExists) {
            toast.warning(
                "⚠️ This exercise is already in your plan!"
            );
            return;
        }

        setCount(count + 1);
        setTotalDuration(
            totalDuration + detileData.duration
        );
        setPlaCalories(
            PlaCalories + detileData.caloriesBurned
        );

        setPlanExercises([
            ...planExercises,
            detileData
        ]);

        toast.success(
            "🎉 Exercise added to your plan!"
        );
    };

    const handleSaveIncrije = () => {

        const alreadySaved = savedExercises.find(
            (ite: ExerciseType) => ite.id === detileData.id
        );

        if (alreadySaved) {
            toast.warning(
                "⚠️ This exercise is already in Saved!"
            );
            return;
        }

        setsaveCount(saveCount + 1);

        setSaveDuration(
            toSaveDuration + detileData.duration
        );

        setSaveCalories(
            SaveCalories + detileData.caloriesBurned
        );

        setSavedExercises([
            ...savedExercises,
            detileData
        ]);

        toast.success(
            "🎉 Exercise added to your Saved!"
        );
    };

    return (
        <div className='flex gap-3'>
            <button
                onClick={() => handleIncrajeplane()}
                className="
                              btn
                              bg-[#C2F800]
                              text-black
                              border-none
                              rounded-xl
                              font-bold
                            "
            >
                <FaPlus />
                Add to today's plan
            </button>
            <button
                onClick={() => handleSaveIncrije()}


                className="
            
                  btn
                  btn-outline
                  border-[#323845]
                  text-white
                  rounded-xl
                "
            >
                <FaBookmark />
                Save for later
            </button>

        </div>
    );
};

export default PlaneButon;