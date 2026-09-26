"use client";

import { useState } from "react";
import ExcriesCard from "@/components/MyPlaneRealted/ExcriesCard";
import SaveExriesCard from "@/components/MyPlaneRealted/SaveExriesCard";
import PlaneExcriesCard from "@/components/MyPlaneRealted/PlaneExcriesCard";
import SaveCard from "@/components/MyPlaneRealted/SaveCard";

const MyplanePage = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    return (
        <div className="container mx-auto">

            <h2 className="text-[30px] font-bold text-white">
                MY PLAN
            </h2>

            <p className="mb-8 text-[14px] text-[#8A92A0]">
                Cap of five lifts for today. Finish them, then load more.
            </p>


            {/* CONTENT */}

            {activeTab === "today" && (
                <ExcriesCard />
            )}

            {activeTab === "saved" && (
                <SaveExriesCard></SaveExriesCard>

            )}



            <div className="mt-8 flex ">

                <div className="tabs tabs-box">

                    <button
                        onClick={() => setActiveTab("today")}
                        className={`tab ${activeTab === "today"
                            ? "tab-active"
                            : ""
                            }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`tab ${activeTab === "saved"
                            ? "tab-active"
                            : ""
                            }`}
                    >
                        Saved
                    </button>

                </div>

            </div>
            {activeTab === "today" &&(
                <PlaneExcriesCard></PlaneExcriesCard>
            )}

            {activeTab === "saved" &&(
                <SaveCard></SaveCard>
            )}

        </div>
    );
};

export default MyplanePage;