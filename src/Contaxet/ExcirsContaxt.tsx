"use client";
import { ExerciseType } from '@/Types/DataTypes';
import React, { createContext, ReactNode, useState } from 'react';

interface WorkoutContextType {
    planExercises: ExerciseType[];
    setPlanExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>;

    savedExercises: ExerciseType[];
    setSavedExercises: React.Dispatch<
        React.SetStateAction<ExerciseType[]>
    >;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}
export const WorkoutContext = createContext<WorkoutContextType | null>(null);

interface WorkoutProviderProps {
    children: ReactNode;
}

const ExcirsContaxt = ({ children }: WorkoutProviderProps) => {
    const [count, setCount] = useState<number>(0)
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
                setSavedExercises

            }}
        >

            {children}

        </WorkoutContext.Provider>




    );
};

export default ExcirsContaxt;