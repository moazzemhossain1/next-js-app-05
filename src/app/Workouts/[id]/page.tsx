import DetileDataCard from '@/components/FatcheRealeted/DetileDataCard';
import { ExerciseType } from '@/Types/DataTypes';
import React from 'react';

interface DetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getEcricesDetileData = async (): Promise<ExerciseType[]> => {
    try {
        const res = await fetch(
            "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch data");
    }
};

const DetilesPage = async ({
    params,
}: DetailsPageProps) => {

    const { id } = await params;

    const Datas = await getEcricesDetileData();

    const detileData = Datas.find(
        (data) => data.id === parseInt(id)
    );

    if (!detileData) {
        return (
            <div className="text-center text-white mt-10">
                Exercise Not Found
            </div>
        );
    }

    return (
        <div>
            <DetileDataCard detileData={detileData} />
        </div>
    );
};

export default DetilesPage;