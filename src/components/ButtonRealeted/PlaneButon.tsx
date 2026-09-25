"use client";
import { WorkoutContext } from '@/Contaxet/ExcirsContaxt';
import React, { useContext, useState } from 'react';
import { FaBookmark, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PlaneButon = () => {
    const [isAdded, setIsAdded] = useState<boolean>(false)
    const[savIsAdd,setSaveIsAdd]=useState<boolean>(false)
    const workutPoint = useContext(WorkoutContext);
    const { count, setCount, saveCount, setsaveCount } = workutPoint;
    const handleIncrajeplane = () => {
        if (isAdded) {
            toast.warning(
                "⚠️ This exercise is already in your plan!"
            );
            return;

        }
        const Incraje = count + 1;
        setCount(Incraje)
        setIsAdded(true)
        toast.success("🎉 Exercise added to your plan!");

    }
    const handleSaveIncrije = () => {
        if (savIsAdd) {
            toast.warning(
                "⚠️ This exercise is already in your Saved!"
            );
            return;


        }
        const SaveIncarje = saveCount + 1;
        setsaveCount(SaveIncarje)
        setSaveIsAdd(true)

        toast.success("🎉 Exercise added to your Saved!")

    }

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