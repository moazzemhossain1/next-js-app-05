"use client";
import { ExerciseType } from '@/Types/DataTypes';
import React, { createContext, ReactNode, useState } from 'react';

interface WorkoutContextType {
    planExercises: ExerciseType[];
    setPlanExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>;

    savedExercises: ExerciseType[];
    setSavedExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>;
   
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    saveCount:number;
    setsaveCount:React.Dispatch<React.SetStateAction<number>>;
    totalDuration:number;
    setTotalDuration:React.Dispatch<React.SetStateAction<number>>;
    toSaveDuration:number;
    setSaveDuration:React.Dispatch<React.SetStateAction<number>>;
    PlaCalories:number;
    setPlaCalories:React.Dispatch<React.SetStateAction<number>>;
    SaveCalories:number;
    setSaveCalories:React.Dispatch<React.SetStateAction<number>>;

}
export const WorkoutContext = createContext<WorkoutContextType | null>(null);

interface WorkoutProviderProps {
    children: ReactNode;
}

const ExcirsContaxt = ({ children }: WorkoutProviderProps) => {
    const [count, setCount] = useState<number>(0)
    const[saveCount,setsaveCount]=useState<number>(0)
    const [totalDuration, setTotalDuration] = useState<number>(0);
    const [toSaveDuration,setSaveDuration]=useState<number>(0)
    const[PlaCalories,setPlaCalories]=useState<number>(0)
    const[SaveCalories,setSaveCalories]=useState<number>(0)
    const [planExercises,setPlanExercises]=useState<ExerciseType[]>([])
    const [savedExercises,setSavedExercises]=useState<ExerciseType[]>([])
   

    return (
        <WorkoutContext.Provider
            value={{
                count,
                setCount,
                planExercises,
                setPlanExercises,
                savedExercises,
                setSavedExercises,
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

            }}
        >

            {children}

        </WorkoutContext.Provider>




    );
};

export default ExcirsContaxt;