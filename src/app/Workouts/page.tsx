
import DataCard from '@/components/FatcheRealeted/DataCard';
import { ExerciseType } from '@/Types/DataTypes';
import React from 'react';

interface DataCardProps {
    data: ExerciseType;
}

const getEcricesData = async (): Promise<ExerciseType[]> => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch data");
    }
};

const WorkoutsPage = async () => {
    const datas = await getEcricesData();
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-[30px] text-[#FFFFFF]'>THE LIBRARY</h2>
            <p className='text-[14px] text-[#9CA3AF] mb-4'>Twelve lifts covering every major muscle group.</p>
            <div className=' grid grid-cols-1 gap-5 sm:grid-cols-2
          lg:grid-cols-3
          xl:gap-6'>
                {
                    datas.map((data: ExerciseType) => <DataCard key={data.id} data={data}></DataCard>)
                }
            </div>


        </div>
    );
};

export default WorkoutsPage;